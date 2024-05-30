import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Address.css";
import { Select ,Stack } from '@chakra-ui/react';

 const Address = () => {
  const FnameRef = useRef(null);
  const LnameRef = useRef(null);
  const shRef = useRef(null);
  const addiRef = useRef(null);
  const pinRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const counRef = useRef(null);
  const navigate = useNavigate();

  const getFormData = () => {
    if (
      FnameRef.current.value == "" ||
     LnameRef.current.value == "" ||
      addiRef.current.value == "" ||
      cityRef.current.value == "" ||
      stateRef.current.value == "" || pinRef.current.value == "" || counRef.current.value == "" || shRef.current.value == ""   
    ) {
      alert("Please fill out the Complete Information!!");
     
      return;
    }

    let addressObj = {
      firstName: FnameRef.current.value,
      lastname:LnameRef.current.value,
       addinfo:addiRef.current.value,
       pin:pinRef.current.value,
      city: cityRef.current.value,
      sh:shRef.current.value,
      state: stateRef.current.value,
      coun:counRef.current.value
    };

    // console.log(addressObj);
    localStorage.setItem("addreddObj", JSON.stringify(addressObj));
     alert("Details Saved Successfully!");
    // window.location.reload(true);
    
    navigate("/Payment");
    // console.log();
  };

  return (
    <div class="main">
        <h3 class="head1">Shipping Address</h3>
        <div>
            <div class="one">
                <div>
                    <div class="two">
                        <div class="three">
                            <div class="four">
                                <div class="five">
                                    <label class="lab1"></label>
                                    <input spellcheck="false" placeholder="First Name" class="in1" type="text" name="firstName" autocomplete="shipping Name"  required ref={FnameRef}  ></input>
                                </div>
                                <div class="five">
                                    <label class="lab1"></label>
                                    <input spellcheck="false" placeholder="Last Name" class="in1" type="text" name="LastName" autocomplete="shipping Name"  ref={LnameRef}></input>
                                </div>        
                            </div>
                            <div class="six">
                            <div class="five">
                                    <label class="lab1"></label>
                                    <input spellcheck="false"placeholder="Street and House Number" class="in1" type="text" name="Street and House Number" autocomplete="shipping Name"  maxLength="300" ref={shRef} ></input>
                                </div>
                                <div class="five">
                                    <label class="lab1"></label>
               
                                    <input spellcheck="false" placeholder="Additional Information" class="in1" type="text" name="Additional Information" autocomplete="shipping Name" ref={addiRef} ></input>
                                </div>    
                            </div>
                            <div class="seven">
                            <div class="five">
                                    <label class="lab1"></label>
                                    <input spellcheck="false" placeholder="PinCode" class="in1" type="text" name="PinCode" autocomplete="shipping Name"  ref={pinRef} ></input>
                                </div> 
                                <div class="five">
                                    <label class="lab1"></label>
                                    <input spellcheck="false" placeholder="City" class="in1" type="text" name="City" autocomplete="shipping Name"  ref={cityRef} ></input>
                                </div>  
                            </div>
                            <div class="eight">
                                <div class="nine">
                                    <div class="ten">
                                        <div class="f">
                                         <div>
                                            <Stack spacing={3} class="i">
                                            <Select variant='filled' placeholder='State' class="j" ref={stateRef}>
                                             <option value='option1'>Jharkhand</option>
                                             <option value='option2'>Assam</option>
                                             <option value='option3'>Gujarat</option>
                                             <option value='option3'>Odisha</option>
                                             <option value='option3'>Tamil Nadu</option>
                                            </Select>
                                            </Stack>
                                         </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="eight">
                                <div class="nine">
                                    <div class="ten">
                                        <div class="f">
                                         <div>
                                            <Stack spacing={3} class="i">
                                            <Select variant='filled' placeholder='Country' class="j" ref={counRef}>
                                             <option value='option1'>India</option>
                                             <option value='option2'>Australia</option>
                                             <option value='option3'>Nepal</option>
                                             <option value='option3'>America</option>
                                             <option value='option3'>Europe</option>
                                            </Select>
                                            </Stack>
                                         </div>    
                                    </div>
                                </div>
                                </div>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="l">
    <button content="CONTINUE" class="but1" onClick={() => getFormData()}>CONTINUE TO PAY</button>
    </div>
    </div>
    
  );
 };

export default Address;
