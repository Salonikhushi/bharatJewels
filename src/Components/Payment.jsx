import "./Payment.css";
import {HStack,Radio,FormLabel,RadioGroup,FormHelperText,FormControl} from "@chakra-ui/react";
export const Payment = () => {
    const addressObj = JSON.parse(localStorage.getItem("addreddObj"));
    
    return(
        <div class="main">
            <h1 class="head1">Payment Method</h1>
            <FormControl as='fieldset'  >
  <FormLabel  as='legend'  margin="20px" >
    Choose a Payment Type
  </FormLabel>
  <RadioGroup defaultValue=''>
     <HStack  margin = "20px"border = "1px solid black" spacing='5px'>
      <Radio padding="8px"value='Credit Card'>Credit Card</Radio>
      </HStack>
       <HStack margin = "20px"border = "1px solid black" spacing='5px'>
      <Radio  padding="8px" value='Debit Card'>Debit Card</Radio>
       </HStack>
       <HStack  margin = "20px"border = "1px solid black" spacing='5px'>
      <Radio  padding="8px" value='UPI'>UPI</Radio>
      </HStack>
       <HStack  margin = "20px"border = "1px solid black" spacing='5px'>
      <Radio  padding="8px" value='Net Banking'>Net Banking</Radio>
      </HStack>
      <HStack  margin = "20px"border = "1px solid black" spacing='5px'>
      <Radio  padding="8px" value='Offline Payment'>Offline Payment</Radio>
      </HStack>
  </RadioGroup>
  <FormHelperText>Please select any one</FormHelperText>
</FormControl>
        <button content="Pay" class="but1">Pay</button>
        <div class="one">
            <div class="two">
            <h3 class="head3">Shipping Address</h3>
            <div class="three">
                    <div class="eleven">
                        <b>Name</b>:{addressObj.firstName}
                    </div>
                    <div class="six">
                        <b>Address</b>:{addressObj.sh}
                    </div>
                    <div >
                    <b> Pincode</b>:{addressObj.pin}
                    </div>
                    <div>
                    <b>City</b>:{addressObj.city}
                    </div>
                    <div>
                    <b> State</b>:{addressObj.state}
                    </div>
                    </div>
            </div>
        </div>
         </div>
    )
};
