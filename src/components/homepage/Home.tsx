import Header from "../header/Header";

import "../../App.css";

import Banner from "./Banner";
import BrowseProducts from "./BrowseProducts";
import Footer, { FooterBanner } from "../footer/Footer";
import Cart from "../cart/Cart";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <BrowseProducts />
      <FooterBanner />
      <Footer />
      /* <Cart /> */
    </>
  );
};

export default Home;
