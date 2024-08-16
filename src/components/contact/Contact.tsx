import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Contaxt.css"

import contactFirst from "../../assets/contact-first.jpg"
import contactSecond from "../../assets/contact-second.jpg"
import contactThird from "../../assets/contact-third.jpg"

const ContactBody = () => {
    return (
        <div className="contact-container">
            <div className="contact-image-container">
                <div className="contact-image-container-left">
                    <img className="contact-first-image" src={contactFirst} alt="contact first image" />
                </div>
                <div className="contact-image-container-right">
                    <img className="contact-second-image" src={contactSecond} alt="contact second image" />
                    <img className="contact-third-image" src={contactThird} alt="contact third image" />
                </div>
            </div>
            <div className="contact-form-container">
            <div className="contact-form-body">
                <input className="contact-input" type="text" placeholder="Full Name" />
                <input className="contact-input" type="text" placeholder="Phone Number"/>
                <input className="contact-input" type="text" placeholder="Your Message"/>
                <button className="contact-button">Submit</button>
            </div>
            </div>
        </div>
    )
}

const Contact = () => {
    return (
        <>
        <Header />
        <ContactBody />
        <Footer />
        </>
    );
}

export default Contact;
