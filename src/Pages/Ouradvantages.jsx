import React from "react";
import { FaShippingFast, FaTags, FaLock } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
function Ouradvantages(){
  const advantages = [
      {
        icon: <FaShippingFast size={40} color="red" />,
        title: "Express Delivery",
        text: "Ships in 24 Hours",
      },
      {
        icon: <MdSecurity size={40} color="red" />,
        title: "Brand Warranty",
        text: "100% Original products",
      },
      {
        icon: <FaTags size={40} color="red" />,
        title: "Exciting Deals",
        text: "On all prepaid orders",
      },
      {
        icon: <FaLock size={40} color="red" />,
        title: "Secure Payments",
        text: "SSL / Secure certificate",
      },
    ];
  return(
    <>
      
      <div style={{ backgroundColor: "gray", color: "#fff", padding: "70px 0" }}>
        <div className="container text-center">
          <h2 className="mb-5" style={{ fontWeight: "bold" }}>
            Our Advantages
          </h2>
          <div className="row justify-content-center">
            {advantages.map((item, index) => (
              <div className="col-6 col-md-3 mb-4 " key={index}>
                <div>
                  <h1 className="position-absolute top-150px">{item.icon}</h1>
                  <h5 className="mt-3">{item.title}</h5>
                  <p style={{ color: "white" }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default Ouradvantages