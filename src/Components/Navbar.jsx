//import { useContext } from "react";
//import { Link } from "react-router-dom";
//import { CartContext } from "../Context/CartContext";
import './Navbar.css';
import logo1 from"../../src/photu/logo1.png";
import {ArrowBackIcon} from "@chakra-ui/icons";
import { Grid,GridItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  //const { cart } = useContext(CartContext);
  return (
    <div class="main">
    <section class="one">
      <span class="two">
      </span>
      <div class="three">
        <h2 class="four">
          <div to="/" class="five">Home
          <img src={logo1} alt="logo"  />
          </div>
        </h2>
      </div>
      <div class="six">
        <span class="seven"></span>
        <div class="eight">
          <span >
            {/* <Link to="/Cart"> */}
            <span class="nine">Shopping Cart</span>
            <span class="ten">Trial Cart</span>
          </span>
        </div>
      </div>
      <div class="eleven">
        <p class="e">Need assistance?</p>
        <span></span>
      </div>
    </section>
    </div>
    
       
  
  );
};
