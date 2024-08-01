import React from 'react';
import logo from '../images/logo2.png';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows={5} cols={5} required></textarea>
            <button className='button-primary' type="submit">Send Message</button>
          </form>
        </div>
        <div className="footer-top-right">
          <h2>Get in touch !</h2>
          <div className="contact-info">
            <p><FaPhone /> Call Us: 123-456-7890</p>
            <p><FaEnvelope /> Email: info@company.com</p>
            <p><FaMapMarkerAlt /> Office Address: 123 Street, City, Country</p>
          </div>
        </div>
      </div>
      <div className="footer-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.19517187592!2d144.955659815481!3d-37.81732774202168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577eddb3f3c9f0!2sGoogle%20Australia!5e0!3m2!1sen!2sin!4v1598442210731!5m2!1sen!2sin"
          width="100%"
          height="300"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
