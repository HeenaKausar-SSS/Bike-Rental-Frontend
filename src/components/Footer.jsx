import React from 'react';
import logo from '../images/logo2.png';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <img src={logo} alt="Company Logo" />
          <p>Explore the vibrant city of Bengaluru with ease and convenience. Whether you're a tourist or a local, our service is designed to give you the freedom to travel at your own pace.</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="footer-bottom-middle">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/terms">Terms and Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-bottom-right">
          <h3>Information</h3>
          <p><FaPhone /> Phone: <br /> 123-456-7890</p>
          <p><FaEnvelope /> Email: <br /> info@company.com</p>
          <p><FaMapMarkerAlt /> Address: <br /> 123 Street, City, Country</p>
        </div>
      </div>
      <div className="footer-bottom-line">
        <hr />
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
