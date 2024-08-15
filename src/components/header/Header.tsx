import bagIcon from "../../assets/ph--handbag-thin.svg"
import userIcon from "../../assets/ph--user-thin.svg"
import searchIcon from "../../assets/iconamoon--search-thin.svg"

import "./Header.css";


const Header = () => {
    return (
        <div className='header-container'>
            <div><p className='header-logo'>Beatton</p></div>
            <div className='header-links'>
                <a href=""><p>Shop</p></a>
                <a href=""><p>About</p></a>
                <a href=""><p>Contact</p></a>
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
