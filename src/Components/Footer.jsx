import React from "react";
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn  } from "react-icons/fa";



function Footer(){
  return(
    <>
    <div className="last">
    <div className="footer">
    <div className="data">
      <h2>Tech-Shop</h2>
      <p>Subscribe to our Email alerts to receive <br/> early discount offers and new products <br/>info.</p>
      <input type="text" placeholder="Email Address"/><br></br>
      <button>Subscribe</button>
    </div>
    <div className="list">
    <ul>
      <h4>Help</h4>
      <li>FAQS</li>
      <li>Track Order</li>
      <li>Cancel Order</li>
      <li>Return Order</li>
      <li>Warranty</li>
    </ul>
    </div>
    <div className="list">
    <ul>
      <h4>Policies</h4>
      <li>Return Order</li>
      <li>Security</li>
      <li>Site map</li>
      <li>Privacy Policy</li>
      <li>Terms & Conditions</li>
    </ul>
    </div>
      <div className="list">
    <ul>
      <h4>Company</h4>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Service Centres</li>
      <li>Careers</li>
      <li>Affiliates</li>
    </ul>
    </div>
    </div>
    <hr></hr>
    <div className="Reserve">
    <p>2025| All Rights Reserved @ Swarupa</p>
    <div className="icons">
    <FaFacebookF />
    <FaTwitter />
    <FaInstagram />
    <FaLinkedinIn />
    </div>
    

    </div>
    </div>


    </>
  )
}
export default Footer