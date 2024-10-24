import React, { useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import contactFirst from "/contact-first.jpg";
import contactSecond from "/contact-second.jpg";
import contactThird from "/contact-third.jpg";
import "./Register.css"

const RegisterBody = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("Invalid man bro")
    const [isFetching, setIsFetching] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsFetching(true)

        try {

        } catch (err) {
            setMessage("Invalid credentials")
        }



    }


    return (
        <div className="contact-container">
      <div className="contact-image-container">
        <div className="contact-image-container-left">
          <img
            className="contact-first-image"
            src={contactFirst}
            alt="contact first image"
            />
        </div>
        <div className="contact-image-container-right">
          <img
            className="contact-second-image"
            src={contactSecond}
            alt="contact second image"
            />
          <img
            className="contact-third-image"
            src={contactThird}
            alt="contact third image"
            />
        </div>
      </div>
      <div className="contact-form-container">
        <form className="contact-form-body" onSubmit={handleSubmit}>
            <h2>Create an account</h2>
          <input
            className="contact-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="contact-input"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="contact-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="contact-button" disabled={isFetching}>{isFetching ? "Creating account.." : "Register"}</button>
          {message}
        </form>
      </div>
    </div>
    )
}

export default function Register() {
  return (
    <>
    <Header />
    <RegisterBody />
    <Footer />
    </>
  )
}
