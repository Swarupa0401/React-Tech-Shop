import React from "react";
import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./index.css";
// import Featuredproducts from "./Pages/Featuredproducts";
import Navigation from "./routing/Navigation";
import Ouradvantages from "./Pages/Ouradvantages";
function App(){
   const [cart, setCart] = useState([]);
   console.log()
  return(
    <>
      <Header cart={cart} />
    
    {/* <Featuredproducts/> */}
   
   
    <Navigation cart={cart} setCart={setCart} />
    <Ouradvantages/>
    <Footer/>
   

    </>
  )
}
export default App