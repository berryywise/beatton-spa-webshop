import "./Cart.css";
import trashcan from "/trash-can.svg";
import React, { useContext } from "react";
import { CartContext } from "./CartProvider";

const CartItems = () => {

  const { cart, removeFromCart, incrementCart, decrementCart } = useContext(CartContext);

  const handleRemove = (event: React.MouseEvent, productId: number) => {

    event.preventDefault()

    removeFromCart(productId);

  }

  const handleQuantity = (event: React.MouseEvent, productId: number) => {

    const updater = event.currentTarget.textContent;

    if(updater === "+") {

      incrementCart(productId);

    } else if (updater === "-") {
      decrementCart(productId)
    }

  }

  return (
    <>
        {cart.map((product) => (
          <div key={product.id} className="cart-items-body">
            <div className="cart-image-body">
              <img src={product.img} width="115px" alt="cart image" />
            </div>
            <div className="cart-mid-body">
              <div className="cart-mid-info">
                <p>{product.name}</p>
                <p className="cart-subheader-title">{product.description}</p>
              </div>
              <div className="cart-quantity-info">
                <p className="cart-quantity-title">Quantity</p>
                <button className="cart-quantity-minus" onClick={(event) => handleQuantity(event, product.id)}>-</button>
                <p className="cart-quantity-input">{product.quantity}</p>
                <button className="cart-quantity-plus" onClick={(event) => handleQuantity(event, product.id)}>+</button>
              </div>
            </div>
            <div className="cart-right-body">
              <p>${product.price}</p>
              <p onClick={(event) => handleRemove(event, product.id)} className="cart-remove-title">Remove</p>
              <p className="cart-remove-svg">
              <img src={trashcan} alt="remove icon" width="22px" />
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

const Cart = () => {

  const { toggleCart } = useContext(CartContext);
  const { cart } = useContext(CartContext);

  const cartPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <p className="cart-title">Cart ({cart.length})</p>
        <p onClick={toggleCart} className="cart-close-button">
          X
        </p>
      </div>
      <div className="cart-body">
        <CartItems />
      </div>
      <div className="cart-footer">
        <p className="cart-footer-title">
          Estimated shipping within 10 - 14 working days
        </p>
        <button className="cart-footer-button">
          Checkout <span className="cart-footer-total">( $ {cartPrice} )</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
