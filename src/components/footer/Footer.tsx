import "./Footer.css"

export const FooterBanner = () => {
    return (
    <div className='footer-banner-container'>
        <div className='footer-banner'>
            <div className='footer-form'>
                <h3 className='footer-title'>Subscribe to our Newsletter</h3>
                <input className='footer-input' name="footer" type="text" placeholder='Your Email Address' />
            </div>
        </div>
    </div>
    )
}

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-header'>
                <div className='footer-address'>
                    <p>401 University</p>
                    <p>Coral Gables</p>
                    <p>FL 33134 US</p>
                </div>
                <div></div>
                <div></div>
                <div className='footer-links'>
                    <p className="footer-hide">Links</p>
                    <a>Home</a>
                    <a>Shop</a>
                    <a>About</a>
                    <a>Contact</a>
                </div>
                <div className='footer-help-links'>
                    <p className="footer-hide">Help</p>
                    <a>Payment Options</a>
                    <a>Returns</a>
                    <a>Privacy Policy</a>
                </div>
                <div className='footer-credits'>
                    <p>Beatton 2023 ©</p>
                    <p>All Rights Reserved</p>
                </div>
            </div>
            <div className='footer-title-container'>
                <p className='footer-banner-title'>Beatton</p>
            </div>
        </div>
    );
}

export default Footer;
