import errorImg from "/errorpage.jpg"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import "./ErrorPage.css"
import Cart from "../cart/Cart"
import { useContext } from "react"
import { CartContext } from "../cart/CartProvider"

const ErrorPage = () => {

    const {toggled} = useContext(CartContext);

    return (
        <>
        <Header/>
        <div className='error-page-container'>
            
            <h1 className="error-title">404</h1>
            <img src={errorImg} className="error-image" alt="error-page-image" />

        </div>
        <Footer/>
        {toggled && <Cart />}
        </>
    );
}

export default ErrorPage;
