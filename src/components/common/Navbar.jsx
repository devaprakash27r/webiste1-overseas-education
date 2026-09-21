import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedDropdown, setExpandedDropdown] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollPosition = Math.ceil(window.innerHeight + scrollY);
            const documentHeight = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.offsetHeight,
                document.documentElement.clientHeight
            );

            // Always check for footer/contact at the bottom of the page
            if (scrollPosition >= documentHeight - 30) {
                setActiveSection('contact');
                return;
            }

            // If not on home page and not at bottom, clear active section
            if (location.pathname !== '/') {
                setActiveSection('');
                return;
            }

            const sections = document.querySelectorAll('section[id], footer[id]');
            const navHeight = 80;
            let currentActive = 'home';
            
            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - navHeight - 10;
                const sectionId = current.getAttribute('id');
                
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    currentActive = sectionId;
                }
            });
            
            if (scrollY < 50) {
                currentActive = 'home';
            }
            
            setActiveSection(currentActive);
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once on mount to set initial state
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    // Handle hash scrolling when navigating from another page
    useEffect(() => {
        if (location.pathname === '/' && location.hash) {
            setTimeout(() => {
                const id = location.hash.replace('#', '');
                const section = document.getElementById(id);
                if (section) {
                    window.scrollTo({
                        top: section.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }, [location]);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        
        if (location.pathname !== '/') {
            // Navigate to home with hash
            navigate(id === 'home' ? '/' : `/#${id}`);
            return;
        }

        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (isMobileMenuOpen) setExpandedDropdown(null); // Reset when closing
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setExpandedDropdown(null);
    };

    const handleDropdownClick = (e, dropdownName) => {
        if (window.innerWidth <= 1380) { // Mobile menu breakpoint
            e.preventDefault();
            setExpandedDropdown(expandedDropdown === dropdownName ? null : dropdownName);
        } else {
            // Desktop: proceed as normal or scroll to section
            if (dropdownName === 'services') {
                scrollToSection(e, 'services');
            } else {
                e.preventDefault();
            }
        }
    };

    return (
        <header className="navbar-header">
            <div className="nav-container">
                {/* Logo */}
                <a href="#" className="logo-container" onClick={(e) => scrollToSection(e, 'home')}>
                    <img src="/assets/Consultancy Logo.png" alt="Tamil Overseas Logo" />
                </a>
                
                {/* Mobile Menu Toggle Button */}
                <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </div>

                {/* Navigation Links */}
                <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
                    <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => { scrollToSection(e, 'home'); closeMobileMenu(); }}>Home</a></li>
                    <li className={`dropdown ${expandedDropdown === 'services' ? 'mobile-expanded' : ''}`}>
                        <a href="#services" className={(activeSection === 'services' || activeSection === 'uk-support') ? 'active' : ''} onClick={(e) => handleDropdownClick(e, 'services')}>
                            Services <i className={`fa-solid ${expandedDropdown === 'services' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="#services" onClick={(e) => { scrollToSection(e, 'services'); closeMobileMenu(); }}>Our Core Services</a></li>
                            <li><a href="#uk-support" onClick={(e) => { scrollToSection(e, 'uk-support'); closeMobileMenu(); }}>Support In The UK</a></li>
                        </ul>
                    </li>
                    <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => { scrollToSection(e, 'about'); closeMobileMenu(); }}>About Us</a></li>
                    <li><a href="#universities" className={activeSection === 'universities' ? 'active' : ''} onClick={(e) => { scrollToSection(e, 'universities'); closeMobileMenu(); }}>Universities</a></li>
                    <li><a href="#gallery" className={activeSection === 'gallery' ? 'active' : ''} onClick={(e) => { scrollToSection(e, 'gallery'); closeMobileMenu(); }}>Gallery</a></li>
                    <li className={`dropdown ${expandedDropdown === 'explore' ? 'mobile-expanded' : ''}`}>
                        <a href="#" onClick={(e) => handleDropdownClick(e, 'explore')}>
                            Explore <i className={`fa-solid ${expandedDropdown === 'explore' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link to="/courses" target="_blank" onClick={closeMobileMenu}>Courses</Link></li>
                            <li><a href="#success-stories" onClick={(e) => { scrollToSection(e, 'success-stories'); closeMobileMenu(); }}>Success Stories</a></li>
                            <li><Link to="/financial-guidance" target="_blank" onClick={closeMobileMenu}>Financial Guidance</Link></li>
                            <li><a href="#ourbranch" onClick={(e) => { scrollToSection(e, 'ourbranch'); closeMobileMenu(); }}>Our Branches</a></li>
                            <li><Link to="/resources" target="_blank" onClick={closeMobileMenu}>Blog</Link></li>
                            <li><Link to="/resources#faqs" target="_blank" onClick={closeMobileMenu}>FAQs</Link></li>
                        </ul>
                    </li>
                    <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => { scrollToSection(e, 'contact'); closeMobileMenu(); }}>Contact</a></li>
                </ul>
                <div className={`nav-right-actions ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
                    {/* Phone Details */}
                    <div className="nav-phone-details">
                        <i className="fa-solid fa-phone"></i>
                        <div className="phone-text">
                            <div className="phone-numbers">
                                <a href="tel:+919361870904">+91 93618 70904</a>
                                <a href="tel:+447405545086">+44 74055 45086</a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Pill */}
                    <div className="nav-contact-pill">
                        <i className="fa-regular fa-envelope"></i>
                        <a href="mailto:Info@tamiloverseas.com">Info@tamiloverseas.com</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
