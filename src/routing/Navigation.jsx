import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Browserproducts from "../Pages/Browserproducts";
import Productdetails from "../Pages/productsdetails";

// import Header from "../Components/Header";
function Navigation({ cart, setCart }){
  return(
    <>
    <Routes>
    <Route path="/" element={<Home cart={cart} setCart={setCart}/>}></Route>
    <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} ></Route>
    <Route path="/product/:id" element={<Productdetails/>}/>
    <Route path="/Allproduct" element={<Browserproducts/>}></Route>
    </Routes>

    </>
  )
}
export default Navigation