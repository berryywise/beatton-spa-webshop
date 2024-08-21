import "./Contact.css";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import Cart from "../cart/Cart";

import contactFirst from "/contact-first.jpg";
import contactSecond from "/contact-second.jpg";
import contactThird from "/contact-third.jpg";

import { useContext } from "react";
import { CartContext } from "../cart/CartProvider";

const ContactBody = () => {
  return (
    <div className="contact-container">
      <div className="contact-image-container">
        <div className="contact-image-container-left">
          <img
            className="contact-first-image"
            src={contactFirst}
            alt="contact first image"
          />
        </div>
        <div className="contact-image-container-right">
          <img
            className="contact-second-image"
            src={contactSecond}
            alt="contact second image"
          />
          <img
            className="contact-third-image"
            src={contactThird}
            alt="contact third image"
          />
        </div>
      </div>
      <div className="contact-form-container">
        <div className="contact-form-body">
          <input
            className="contact-input"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="contact-input"
            type="text"
            placeholder="Phone Number"
          />
          <input
            className="contact-input"
            type="text"
            placeholder="Your Message"
          />
          <button className="contact-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {

  const {toggled} = useContext(CartContext);

  return (
    <>
      <Header />
      <ContactBody />
      <Footer />
      {toggled && <Cart />}
    </>
  );
};

export default Contact;
