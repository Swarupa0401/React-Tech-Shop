import React, { useState } from "react";
import { FaTrash} from "react-icons/fa";
import { BsCartX  } from "react-icons/bs";
import {useNavigate} from "react-router-dom"
import "./Cart.css";

function Cart({ cart: initialCart }) {
  const [cart, setCart] = useState(initialCart);
  const navigate=useNavigate();

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const deleteItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const originalPrice = cart.reduce(
    (acc, item) => acc + item.originalPrice * item.quantity,
    0
  );
  const finalPrice = cart.reduce(
    (acc, item) => acc + item.finalPrice * item.quantity,
    0
  );
  const discount = originalPrice - finalPrice;

  return (
    <div className="cart-page">
      {/* 🛒 CART SECTION */}
      <div className="cart-container">
        {/* <h1>Tech-Shop Cart</h1> */}

        {cart.length === 0 ? (
          <div className="empty-cart">
            <BsCartX className="empty-cart-icon" />
            <p>Your Cart is Empty</p>
            <button className="start-shopping-button" onClick={()=>navigate("/")}>Start Shopping</button>
          </div>
        ) : (
          <div className="cart-items-section">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.info}</h3>
                  <button
                    className="delete-button"
                    onClick={() => deleteItem(item.id)}
                    title="Remove item"
                  >
                    <FaTrash />
                  </button>
                  <div className="price-details">
                    <span className="final-price">₹{item.finalPrice}</span>
                    <span className="original-price">₹{item.originalPrice}</span>
                  </div>
                  <div className="quantity-control">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <p>Total: ₹{item.finalPrice * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 🧾 ORDER SUMMARY SECTION (completely separate) */}
      {cart.length > 0 && (
        <div className="summary-section">
          <div className="order-summary">
            <h2>Order Summary ({cart.length} items)</h2>
            <p>Original Price: <span>₹{originalPrice.toLocaleString()}</span></p>
            <p className="discount">
              Discount: <strong>-₹{discount.toLocaleString()}</strong>
            </p>
            <p>
              Delivery: <strong>Free</strong>
            </p>
            <hr />
            <h3>Total Price:   <strong> ₹{finalPrice.toLocaleString()}</strong></h3>
            <button className="checkout-button">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
