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

const Footer = () => {
    return (
        <div className='footer-container'>

        </div>
    );
}

export default Footer;
