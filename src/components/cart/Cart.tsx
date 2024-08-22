import "./Cart.css";
import trashcan from "/trash-can.svg"
import placeholder from "/products/console-table.jpg";
import { useContext } from "react";
import { CartContext } from "./CartProvider";


const CartItems = () => {

  return (
    <div className="cart-items-body">
      <div className="cart-image-body">
        <img src={placeholder} width="115px" alt="cart image" />
      </div>
      <div className="cart-mid-body">
        <div className="cart-mid-info">
          <p>LEVIOSA</p>
          <p className="cart-subheader-title">Nomad Snow Chair</p>
        </div>
        <div className="cart-quantity-info">
          <p className="cart-quantity-title">Quantity</p>
          <button className="cart-quantity-minus">-</button>
          <p className="cart-quantity-input">1</p>
          <button className="cart-quantity-plus">+</button>
        </div>
      </div>
      <div className="cart-right-body">
        <p>$1.599</p>
        <p className="cart-remove-title">Remove</p>
        <p className="cart-remove-svg"><img src={trashcan} alt="remove icon" width="22px" /></p>
      </div>
    </div>
  );
};

const Cart = () => {

const { toggleCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <p className="cart-title">Cart (2)</p>
        <p onClick={toggleCart} className="cart-close-button">X</p>
      </div>
      <div className="cart-body">
        <CartItems />
        <CartItems />
      </div>
      <div className="cart-footer">
        <p className="cart-footer-title">
          Estimated shipping within 10 - 14 working days
        </p>
        <button className="cart-footer-button">
          Checkout <span className="cart-footer-total">( $ 2.598 )</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
