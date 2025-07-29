import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="footer logo" />
          <p>I am a frontend developer from USA with 10 years of experience.</p>
        </div>

        <div className="footer-top-right">
          <form className="footer-form">
            <div className="footer-email-input">
              <img src={user_icon} alt="user icon" />
              <input type="email" placeholder="Enter your email" />
            </div>
            <button type="submit" className="footer-subscribe">Subscribe</button>
          </form>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className='footer-bottom-left'>© 2023 Alex Bennet. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
