import React from "react";
import  "./Wishlist.css";
import { useEffect, useState } from "react";
import { CloseButton } from '@chakra-ui/react';

const Wishlist = () => {
  const [status, setStatus] = useState(false);
  const [datas, setDatas] = useState([]);
  console.log(datas);

  // const addtocart = async (data) => {
  //   // let res = await fetch(`http://localhost:8080/cart`, {
  //   let res = await fetch(`http://localhost:3/wishlist`, {
  //     method: "POST",
  //     body: JSON.stringify({ ...data }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // };

  const deleteWishlist = async (id) => {
    
    let res = await fetch(`http://localhost:3/wishlist/${id}`, {
      method: "Delete",
    });
    setStatus(!status);
  };

  useEffect(() => {
    async function getWishList() {
      
      let res = await fetch("http://localhost:3/wishlist");
      let data1 = await res.json();
      setDatas(data1);
    }
    getWishList();
  }, [status]);

  if (datas.length === 0) {
    return (
      <div class="main">
        <section class="sec1">
          <div class="j">
            <div class="k">
              <hr class="hr5"/>
              <h3 class="head5">Your Wishlist</h3>
            </div>
            <div class="l">
              <span class="span5"></span>
              <p>Uh Oh!</p>
              <p>Your Wishlist Seems to be Empty!</p>
              <a href="">
                <button content="Start shopping" class="b5">Start Shopping</button>
              </a>
            </div>
          </div>
        </section>
      </div>
      
    );
  }

  return (
    <div class="main">
      <section class="sec1">
        <div class="one">
          <div class="two">
            <hr class="hr1"/>
            <h3 class="head1">Your Wishlist</h3>
          </div>
          <div class="three">
            <div class="four">
              <div span="1" class="five">
                <div class="six">
                  <div  data-sku="JL04632-1RP900" class="seven">
                  { 
                      datas.map((data) =>( 
                    <div role="presentation">
                      <div class="eight">
                        <img src={data.image} alt="" srcset="" class="img1"/>
                      </div>
                      <div class="nine" role="presentation">
                        <div class="ten">
                          <span class="span2">
                          <CloseButton onClick={() => deleteWishlist(data.id)}/>
                          </span>
                        </div> 
                        </div> 
                        <div class="e">
                          <div class="f">
                            <p class="p1">
                            <span class="" data-name="regPrice" locale="en_IN"><strong>₹{data.price}</strong></span>
                            <span class="span3">
                            <span class="" data-name="strikePrice" locale="en_IN">
                              <span class="span4">₹{data.price+540}</span>
                              </span>
                            </span>
                            </p>
                           </div>
                           <div class="g">
                            <a href="" class="a2">
                              <p class="p2">{data.name}</p>
                            </a>
                           </div>
                         </div> 
                    </div>))}
                    <div class="h">
                    <button content="Move to Cart" class="b1" >Move to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
