import "./About.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";

import aboutFirst from "../../../public/about-first.jpg";
import aboutSecond from "../../../public/about-second.jpg";
import Cart from "../cart/Cart";
import { useContext } from "react";
import { CartContext } from "../cart/CartProvider";

const AboutContainer = () => {
  
  return (
    <div className="about-container">
      <div className="about-intro">
        <p>OUR PRINCIPLE</p>
      </div>
      <div className="about-body">
        <img className="about-first" src={aboutFirst} alt="about first image" />
        <p className="about-main-title">
          The function of art is to satisfy the artist, with little or no regard
          to the viewer. The function of furniture is to give meaning to the
          viewer, and enchance the richness of their life.
        </p>
        <img
          className="about-second"
          src={aboutSecond}
          alt="about second image"
        />
      </div>

      <div className="about-footer">
        <p>READ MORE...</p>
      </div>
    </div>
  );
};

const About = () => {

  const {toggled} = useContext(CartContext);
  

  return (
    <>
      <Header />
      <AboutContainer />
      <Footer />
      {toggled && <Cart />}
    </>
  );
};

export default About;
