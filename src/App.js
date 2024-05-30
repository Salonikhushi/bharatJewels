//import {ChakraProvider} from '@chakra-ui/react';
//import logo from './logo.svg';
import './App.css';
//import { Navbar } from './Components/Navbar';
//import {Trialcart} from './Components/Trialcart';
//import { AllRoutes } from './Pages/AllRoutes';
//import Cartt from './Components/Cartt';
//import Wishlist from './Components/Wishlist';
//import Cart from './Components/Cart';
//import {Routes,Route} from "react-router-dom";
// import {PrivateRoute} from ".Privat"
//import Address from "./Components/Address";
//import { Payment } from './Components/Payment';
import {Payment} from "./Components/Payment";
  
function App() {
  return (
    <div className="App">
      {/* <Routes>
      <Route path='/payment' element={<Payment />} />
      <Route path='/address' element={<Address />} />
      </Routes> */}
      {/* <Payment/> */}
      {/* <Cart/> */}
      {/* <Navbar/> */}
      {/* <Address/> */}
      <Payment/>
      {/* <Navbar/> */}
      {/* <Trialcart/> */}
      {/* <Cartt/> */}
      {/* <Wishlist/> */}
       {/* <Routes>
        <Route
       path="/cart.jsx" element ={<Cart/>}/>
       
        </Routes>    */}
        
    </div>
  );
}

export default App;
// { <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header> }
