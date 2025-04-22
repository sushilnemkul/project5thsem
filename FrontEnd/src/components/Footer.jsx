import React from 'react';
import './Footer.css' // Create this file for styling
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>    
 <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-sectionn">
        <img
          src="/logo-removebg-preview.png"
          alt="Aqua Shop Logo"
          className="footer-logo"
        />
        <p className="footer-description">Your one-stop shop for all aquatic needs.</p>
        </div>

    

        <div className="footer-section">
          <h3 className="footer-heading">Main Menus</h3>
          <ul className="footer-links">
            <li><Link to="/pricing">Home</Link></li>
            <li><Link to="/pricing">Shop </Link></li>
            <li><Link to="/pricing">Contact Us</Link></li>
            <li><Link to="/pricing">Terms and Conditions</Link></li>
            <li><Link to="/pricing">Delivery Rates</Link></li>
            <li><Link to="/pricing">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Product Categories</h3>
          <ul className="footer-links">
            <li><Link to="/faqs">Aquarium Hardscape</Link></li>
            <li><Link to="/faqs">Aquascape</Link></li>
            <li><Link to="/faqs">CO2 Accessories</Link></li>
            <li><Link to="/faqs">Lights</Link></li>
            <li><Link to="/faqs">LiveStock</Link></li>
            <li><Link to="/faqs">Nutrients and accessories</Link></li>
            <li><Link to="/faqs">Plants</Link></li>
            <li><Link to="/faqs">Substrates</Link></li>
            <li><Link to="/faqs">Tank</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2 className="footer-heading">Contact Us</h2>
          <ul className="footer-links">
      <h5>FishTopia</h5>
            <li><Link to="/about">Dhobighat, Lalitpur</Link></li>
            <li><Link to="/about">+977-9843432401</Link></li>
          </ul>
        </div>
      </div>
    </footer>
      </>

  );
};

export default Footer;
