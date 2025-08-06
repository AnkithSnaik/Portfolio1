import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call from '../../assets/call_icon.svg';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "c3058529-161b-4d23-8378-097e27186eca");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message || "Submission failed. Please try again.");
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let’s talk</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt='' /><p>ankith@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt='' /><p>900-9844-28848</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt='' /><p>Dharwad,Karnataka</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type='text' placeholder='Enter Your Name' name='name' required />
          <label>Your Email</label>
          <input type='email' placeholder='Enter your email' name='email' required />
          <label>Write your message here</label>
          <textarea name='message' rows="8" placeholder="Enter your message" required></textarea>
          <button className='contact-submit' type='submit'>Submit now</button>
          {result && <p className="form-result">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
