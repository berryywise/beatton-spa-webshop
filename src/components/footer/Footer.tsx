import React from 'react';
import "./Footer.css"

export const FooterBanner = () => {
    return (
    <div className='footer-banner-container'>
        <div className='footer-banner'>
            <div className='footer-form'>
                <h3 className='footer-title'>Subscribe to our Newsletter</h3>
                <input className='footer-input' type="text" placeholder='Your Email Address' />
            </div>
        </div>
    </div>
    )
}

//TODO Implement flexbox and layout here!

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-header'>
                <div className='footer-address'>
                    <p>401 University</p>
                </div>
                <div className='footer-links'>
                    <p>Links</p>
                    <p>Home</p>
                    <p>Shop</p>
                    <p>Shop</p>
                    <p>Shop</p>
                </div>
                <div className='footer-help-links'>
                    <p>Help</p>
                    <p>Payment Options</p>
                    <p>Payment Options</p>
                    <p>Payment Options</p>
                </div>
                <div className='footer-credits'>
                    <p>Beatton 2023</p>
                    <p>Beatton 2023</p>
                </div>
            </div>
            <div className='footer-title-container'>
                <p className='footer-title'>Beatton</p>
            </div>
        </div>
    );
}

export default Footer;
