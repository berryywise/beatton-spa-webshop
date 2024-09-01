import "./Header.css";

import bagIcon from "/ph--handbag-thin.svg"
import userIcon from "/ph--user-thin.svg"
import searchIcon from "/iconamoon--search-thin.svg"

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../cart/CartProvider";

const Header = () => {

    const {cart, toggleCart} = useContext(CartContext)

    const cartTotalItems = cart.reduce ((acc, item) => acc + item.quantity, 0)

    return (
        <div className='header-container'>
            <div><p className='header-logo'><Link to="/">Beatton</Link></p></div>
            <div className='header-links'>
                <Link to="/"><p>Shop</p></Link>
                <Link to="/about"><p>About</p></Link>
                <Link to="/contact"><p>Contact</p></Link>
            </div>
            <div className='header-icons'>
                <a href=""><img src={searchIcon} alt="search icon" /></a>
                <a href=""><img src={userIcon} alt="account icon" /></a>
                <div onClick={toggleCart} className="header-cart">
                    <img src={bagIcon} alt="cart icon" />
                    {cart && <p className="header-cart-quantity">{cartTotalItems}</p>}
                </div>
            </div>
            
        </div>
        
    );
}

export default Header;
