import React from 'react';
import './ContactFooter.css';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactFooter = () => {
    return (
        <footer id="contact" className="contact-footer">
            <div className="footer-top">
                <div className="footer-container">
                    <div className="footer-brand">
                        <img src="/assets/Contact Logo.png" alt="Tamil Overseas Logo" className="footer-logo" />
                        <p className="brand-tagline">Your trusted partner for UK education and settlement. We guide you from admission to graduation and beyond.</p>
                        <div className="social-links">
                            <a href="#" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
                            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
                            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Explore</h3>
                        <ul>
                            <li><a href="#">Courses</a></li>
                            <li><a href="#">Financial Guidance</a></li>
                            <li><a href="#">Our Branches</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <div className="contact-item">
                            <Mail className="contact-icon" size={18} />
                            <a href="mailto:Info@tamiloverseas.com">Info@tamiloverseas.com</a>
                        </div>
                        <div className="contact-item">
                            <Phone className="contact-icon" size={18} />
                            <a href="tel:+919361870904">India: +91 93618 70904</a>
                        </div>
                        <div className="contact-item">
                            <Phone className="contact-icon" size={18} />
                            <a href="tel:+447405546467">UK: +44 74055 46467</a>
                        </div>
                        <div className="contact-item">
                            <MapPin className="contact-icon" size={18} />
                            <a href="https://maps.google.com/?q=Namakkal,+Tamil+Nadu,+India" target="_blank" rel="noopener noreferrer">Namakkal, Tamil Nadu, India</a>
                        </div>
                        <div className="contact-item">
                            <MapPin className="contact-icon" size={18} />
                            <a href="https://maps.google.com/?q=London,+United+Kingdom" target="_blank" rel="noopener noreferrer">London, United Kingdom</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-container bottom-container">
                    <p>
                        &copy; {new Date().getFullYear()} Tamil Overseas Educational Consultancy. All rights reserved. 
                        <span className="designer-credit"> | Designed by Devaprakash – <a href="mailto:devaprakashr@gmail.com">devaprakashr@gmail.com</a></span>
                    </p>
                    <div className="legal-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;
