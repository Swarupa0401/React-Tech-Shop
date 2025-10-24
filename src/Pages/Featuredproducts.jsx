import React from "react";
import productsData from "../Components/details";
function Featuredproducts(){
  const featuredProducts=productsData.filter((item)=>item.tag==="featured")

  return(
    <>
    <h1>Featured products</h1>
    <div>
    {featuredProducts.map((data,index)=>(
      <h1>{data.title}</h1>
    ) 
    )}
    
    </div>

    </>
  )
}
export default Featuredproducts