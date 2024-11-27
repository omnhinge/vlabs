import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigati
import './style.css'; // Optional: For custom styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>
                        We are a team of passionate developers creating useful and efficient web solutions.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <ul className="social-links">
                        <li><a href="#facebook">Facebook</a></li>
                        <li><a href="#twitter">Twitter</a></li>
                        <li><a href="#linkedin">LinkedIn</a></li>
                        <li><a href="#instagram">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 MyWebsite. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
