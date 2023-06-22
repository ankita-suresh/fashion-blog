// Contact.jsx

import React from 'react';
import './contact.css';
import video1 from '../../../src/video/video1.mp4';

const Contact = () => { 
  return (
    <div className="contact-container">
    <video autoPlay muted loop id="myVideo">
       <source src={video1} type="video/mp4"/>
    </video>
      <div className="background-overlay"></div>
      <h1>Contact Us</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="4" placeholder="Enter your message"></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
