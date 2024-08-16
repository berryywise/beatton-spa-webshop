import bagIcon from "../../assets/ph--handbag-thin.svg"
import userIcon from "../../assets/ph--user-thin.svg"
import searchIcon from "../../assets/iconamoon--search-thin.svg"

import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
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
                <a href=""><img src={bagIcon} alt="cart icon" /></a>
            </div>
            
        </div>
        
    );
}

export default Header;
