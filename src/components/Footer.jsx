import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Election Website is your one-stop destination for comprehensive information and updates on elections across various regions. We strive to provide accurate and unbiased coverage to empower voters with the knowledge they need to make informed decisions.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us:</p>
          <p>Email: info@electionwebsite.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Stay connected with us on social media for the latest updates:</p>
          <div className="social-links">
            <a href="https://facebook.com/electionwebsite" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/electionwebsite" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com/electionwebsite" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Election Website. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
