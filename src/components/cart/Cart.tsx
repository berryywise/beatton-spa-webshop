import React from "react";

import "./Cart.css";
import placeholder from "../../assets/products/console-table.jpg"

const CartItems = () => {
    return (
        <div className="cart-items-body">
            <div className="cart-image-body">
            <img src={placeholder} width="150px" alt="cart image" />
            </div>
            <div className="cart-mid-body">
                <div className="class-mid-info">
                <p>LEVIOSA</p>
                <p>Nomad Snow Chair</p>
                </div>
                <div className="class-quantity-info">
                    <p>Quantity</p>
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>
                <div className="cart-right-body">
                    <p>$1.599</p>
                    <p>Remove</p>
                </div>
            </div>
        </div>
    );
}


const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-header">
        <p className="cart-title">Cart(2)</p>
        <p className="cart-close-button">X</p>
      </div>
      <div className="cart-body">
        <CartItems />
      </div>
      <div className="cart-footer">
        <p>Estimated shipping within 10 - 14 working days</p>
        <button>Checkout ( $ 2.598 )</button>
      </div>
    </div>
  );
};

export default Cart;
