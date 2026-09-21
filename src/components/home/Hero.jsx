import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <>
            <section className="hero-section" id="home">
                {/* Full width alternative background */}
                {/* <div className="hero-bg-london"></div> */}

                {/* Main Container */}
                <div className="hero-container">

                    {/* Left Side Content */}
                    <div className="hero-content">

                        {/* Tagline */}
                        <div className="hero-tagline">
                            <span>Your Trusted Partner for <br className="break-mobile" />UK Education <br className="break-mobile" />& Settlement</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="hero-heading">
                            Study in <span className="text-green">Abroad</span>
                        </h1>

                        {/* Sub Headline */}
                        <p className="hero-subtext">
                            From admission to settlement <br /> - we guide you at every step of your journey.
                        </p>

                        {/* Information Pills */}
                        <div className="hero-pills">
                            <div className="pill">
                                <i className="fa-solid fa-graduation-cap text-green"></i>
                                <span>Study | Work | Settle</span>
                            </div>
                            <div className="pill">
                                <i className="fa-regular fa-clock text-orange"></i>
                                <span>Fast Offers in 5-15 Days</span>
                            </div>
                            <div className="pill">
                                <i className="fa-solid fa-headset text-blue"></i>
                                <span>End-to-End Support<br /><small>India + UK</small></span>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="hero-ctas">
                            <button className="btn-counselling">
                                <i className="fa-regular fa-calendar-check"></i>
                                Book Free Counselling
                                <i className="fa-solid fa-arrow-right arrow-icon"></i>
                            </button>
                            <button className="btn-whatsapp">
                                <i className="fa-brands fa-whatsapp text-green"></i>
                                WhatsApp Now
                            </button>
                        </div>

                        {/* Social Proof */}
                        <div className="hero-social-proof">
                            <div className="avatars">
                                <img className="avatar" src="/avatar1.jpg" alt="Student" />
                                <img className="avatar" src="/avatar2.jpg" alt="Student" />
                                <img className="avatar" src="/avatar3.jpg" alt="Student" />
                                <img className="avatar" src="/avatar4.jpg" alt="Student" />
                            </div>
                            <p className="social-text">
                                <span className="text-orange fw-bold">1000+</span> Students Achieved Their Dreams
                            </p>
                        </div>

                    </div>
                </div>

            </section>

            {/* Bottom Statistics Bar moved out of Hero section for now */}
            <div className="hero-stats-bar">
                <div className="stat-item">
                    <div className="stat-icon-wrapper bg-green-light">
                        <i className="fa-solid fa-users text-light-green"></i>
                    </div>
                    <div className="stat-text">
                        <h4 className="text-light-green">1000+</h4>
                        <p>Student Success<br />Stories</p>
                    </div>
                </div>

                <div className="stat-divider"></div>

                <div className="stat-item">
                    <div className="stat-icon-wrapper bg-orange-light">
                        <i className="fa-solid fa-building-columns text-orange"></i>
                    </div>
                    <div className="stat-text">
                        <h4 className="text-orange">40+</h4>
                        <p>UK University<br />Partners</p>
                    </div>
                </div>

                <div className="stat-divider"></div>

                <div className="stat-item">
                    <div className="stat-icon-wrapper bg-blue-light">
                        <i className="fa-solid fa-location-dot text-blue"></i>
                    </div>
                    <div className="stat-text">
                        <h4 className="text-blue">7</h4>
                        <p>Branches Across<br />World</p>
                    </div>
                </div>

                <div className="stat-divider"></div>

                <div className="stat-item">
                    <div className="stat-icon-wrapper bg-purple-light">
                        <i className="fa-solid fa-map-location-dot text-purple"></i>
                    </div>
                    <div className="stat-text">
                        <h4 className="text-purple stat-text-smaller">India, London<br/>& Dubai</h4>
                        <p>Global Presence</p>
                    </div>
                </div>

                <div className="stat-divider"></div>

                <div className="stat-item">
                    <div className="stat-icon-wrapper bg-yellow-light">
                        <i className="fa-solid fa-handshake text-yellow"></i>
                    </div>
                    <div className="stat-text">
                        <h4 className="text-yellow stat-text-smaller">A-Z Support</h4>
                        <p>From Application<br />to Settlement</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
