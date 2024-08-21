import Header from "../header/Header";

import "../../App.css";

import Banner from "./Banner";
import BrowseProducts from "./BrowseProducts";
import Footer, { FooterBanner } from "../footer/Footer";
import Cart from "../cart/Cart";
import { useContext } from "react";
import { CartContext } from "../cart/CartProvider";



const Home = () => {

  const { toggled } = useContext(CartContext);

  return (
    <>
      <Header />
      <Banner />
      <BrowseProducts />
      <FooterBanner />
      <Footer />
      {toggled && <Cart />} 
    </>
  );
};

export default Home;
