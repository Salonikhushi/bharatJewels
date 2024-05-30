import React from "react";
import  "./Cart.css";
import { useEffect, useState } from "react";
// import { Link as RouterLink } from "react-router-dom";
import {ChevronDownIcon} from "@chakra-ui/icons";
import { CloseButton } from '@chakra-ui/react';

const Cart = () => {
  const [status, setStatus] = useState(false);
  const [datas, setDatas] = useState([]);
  const [total, setTotal] = useState(0);
  const [yousaved, setYousaved] = useState(0);
  const [subtot, setSubtot] = useState(0);

  const deleteCart = async (id) => {
    let res = await fetch(`http://localhost:3/cart/${id}`, {
      method: "Delete",
    });
    setStatus(!status);
  };

  function getTotal(data) {
    let totalamt = 0;
    let yousaved = 1681;
    let subtot = 0;
    for (let i = 0; i < data.length; i++) {
      totalamt += data[i].price;
      yousaved += i*1681;
    }
    subtot = totalamt+yousaved; 
    setYousaved(yousaved);
    setSubtot(subtot);
    setTotal(totalamt);
    localStorage.setItem("totalAmount",totalamt)
  }    

  useEffect(() => {
    async function getCart() {
      let res = await fetch("http://localhost:3/cart");
      let data1 = await res.json();
      setDatas(data1);
      await getTotal(data1);
    } 

     getCart();
  }, [status]);

  if (datas.length === 0) {
    return (
        <div class="main">
            <div>
                <div class="u">
                    <div>
                        <div class="v">
                            <div class="w">
                                <div>
                                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRsRmgAUBZpb2-XPUK2Gms8BJC-aC-tFEjbha3VI-7GhWuvUFeM" alt="" class="image2"/>
                                </div>
                            </div>
                            <div>
                                <div class="x">
                                    There is nothing here!
                                </div>
                                <div class="y">
                                Let's do some retail therapy.
                                </div>
                            </div>
                        </div>
                        <a href="">
                            <button class="but5" content="START SHOPPING">START SHOPPING</button>
                        </a>
                    </div>

                </div>
            </div>
        </div>
      
    );
  }

  return (
    <div class="main">
        <div>
            <div class="one">
                <div class="two">
                    <div class="three">
                        {/* <div class="four"> */}
                            {/* <div class="five">
                                 <div class="six">
                                    "Get ₹1095 xCLusive points on this Order"
                                    <p>"Redeem these points on your next order"
                                        <a>Know more</a>
                                    </p>
                                </div> 
                                <div class="seven">
                                    "Order Online & pick up from a store"
                                    <p>on the same day </p>
                                </div>
                            </div> */}
                        {/* </div> */}
                        <div class="eight">
                            <div class="nine">
                            {datas.map((data) => (
                                <div class="ten">
                                    <div>
                                        <div class="e">
                                            <a>
                                                <img src={data.image} alt="jewel"/>
                                            </a>
                                        </div> 
                                    </div>
                                    <div class="f">
                                        <div class="g">
                                            <p class="para1">{data.name}</p>
                                            <p class="para2">{data.price}
                                            <span class="span1">{data.price+1681}</span>
                                            <span class="span2">Save
                                            ₹1,681
                                            </span>
                                            </p>
                                            <div class="h">
                                                <div class="i">
                                                    <span>Size:</span>
                                                    <div >
                                                        <span>12
                                                        <ChevronDownIcon/>
                                                        </span>
                                                    </div>    
                                                </div>&nbsp;
                                                <div class="i">
                                                    <span>Quantity:</span>
                                                    <div >
                                                        <span>1
                                                        <ChevronDownIcon/>
                                                        </span> 
                                                    </div>    
                                                </div>
                                                </div>
                                            </div>
                                            <div class="j">
                                                <p class="para3">Delivered within 6 to 7 days.</p>
                                                </div>
                                                <CloseButton onClick={() => deleteCart(data.id)} class="icon"/>
                                        </div>
                                </div>))}
                                <div class="k">
                                    <div class="l">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="m">
                        <h5 class="head2">Caratlane Offers!</h5>
                        <div class="n">
                            <div class="o">
                                <span>EXTRA3</span>
                                <p class="para4">Save another ₹1,681 on this order </p>
                            </div>
                            <div class="p">Apply
                            </div>
                        </div>
                        <button class="but1">Apply More Coupons<div class="q"></div></button>
                        <h5 class="head3">Order Summary</h5>
                        <div class="r" id="first" data-name="order-summary-box">   
                            <div>
                            
                                <div>
                                
                                <p class="para5">SubTotal
                                <span class="span5">₹{subtot}</span>
                                </p>
                                <p class="para6">You Saved
                                <span class="span5">-₹{yousaved}</span> 
                                </p>
                                <p class="para6">Coupon Discount
                                <span class="span5"><a class="anc3">Apply Coupon</a></span> 
                                </p>
                                <p class="para7">Shipping
                                <span>(Standard)
                                </span>
                                <span class="span5">
                                    <span class="span6">Free</span>
                                </span>
                                </p>
                            </div>
                            <div>
                                <p class="para8">Total Cost
                                <span class="span5">₹{total}</span> 
                                </p>
                            </div>
                            </div>
                            
                        </div>
                            
                        
                        <div class="s">
                            <button class="but3">Place Order</button>
                        </div>
                    </div>
                            
                </div>
            </div>
        </div>
    </div>   
  );
};
export default Cart;
