import React from "react";
import "./Header.css"
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";



function Header({cart=[]}){
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return(
    <div className="header">
    {/* <h1>Header component</h1> */}
    <ul className="list">
    <li><Link to={"/"}  className="text-white font-bold text-xl"  style={{ textDecoration: "none" }}>Tech Shop</Link></li>
      <li className="header-icons"><CiSearch /></li>
      <Link to={"/cart"}><li className="header-icons" style={{ position: "relative", color: "white" }}>
        <FaShoppingCart />
        {/* {totalCount > 0 && (
          <span style={{
            position: "absolute",
            top: "-8px",
            right: "-8px",
            background:totalCount > 0 ? "red" : "gray",

            fontSize:"20px",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px", 
            fontSize: "0.8rem"
          }}>
            {totalCount}</span>
        )} */}
        </li>
      
       </Link>
       
      <li className="header-icons"><AiOutlineUser /></li>

    </ul>

    </div>
  )
}
export default Header