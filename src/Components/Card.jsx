import React from "react";
import productsData from "./details";

function Card({ data,cart, setCart}) {
  const addToCart=(data)=>{
    const existingItem =cart.find((item)=>item.id==data.id);
        if (existingItem) {
      // Increase quantity if already in cart
      const updatedCart = cart.map((item) =>
        item.id === data.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // Add new product to cart
      setCart([...cart, { ...data, quantity: 1 }]);
    }

    alert( "added to cart!");
  };
  return (
    <div class="card text-white border border-1px solid"
      style={{ width: "18rem", backgroundColor: "black" }}>
      <img src={data.image} class="card-img-top" style={{ paddingTop: "25px" }} alt={data.title}/>
      <div className="text-red-500 py-3 mx-3 text-lg">
        {"★".repeat(data.rateCount)}
      </div>
      <div class="card-body">
        <h5 class="card-title" style={{ marginTop: "-25px" }}>
          {data.title}
        </h5>
        <p class="card-text">{data.info}</p>
        <hr className="border-gray-600 mb-3" />
        <div className="d-flex align-items-center mb-4" style={{ gap: "10px" }}>
          <h6 className="text-white fw-bold m-0" style={{ fontSize: "18px" }}>
            ₹{data.finalPrice}
          </h6>
          {data.originalPrice && (
            <p
              className="text-secondary m-0"
              style={{
                textDecoration: "line-through",
                fontSize: "20px",
                fontFamily: "bold",
              }}
            >
              ₹{data.originalPrice}
            </p>
          )}
        </div>

        <button class="btn btn-danger" style={{ padding: "5px 50px", fontSize: "20px" }}onClick={() => addToCart(data)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
