import React from 'react';
import './About.css';
import { Landmark, Compass, Handshake, BadgeCheck } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-top-row">
                    <div className="about-content">
                        <div className="section-badge">ABOUT US</div>
                    <h2 className="about-title">
                        Your Trusted Partner for <br />
                        <span className="highlight">UK Education & Settlement</span>
                    </h2>
                    
                    <div className="about-description">
                        <p>
                            <strong>Tamil Overseas Educational Consultancy</strong> expertly guides your journey to study, build a career, and find your home in the UK.
                        </p>
                        <p>
                            In just five years, we have successfully mentored <strong>1000+ students</strong>, securing their places at the UK's most prestigious academic institutions.
                        </p>
                        <p>
                            With branches across Tamil Nadu and international offices in London and Dubai, we provide world-class, personalized educational guidance.
                        </p>
                    </div>

                    </div>

                    <div className="about-image-wrapper">
                        <div className="image-frame-about">
                            <img src="/assets/about-us.jpg" alt="Professional Educational Counseling" className="about-main-image" />
                        </div>
                        
                        {/* Floating Stat Card */}
                        <div className="floating-stat-card">
                            <div className="stat-number">1000+</div>
                            <div className="stat-label">Successful Students</div>
                        </div>
                    </div>
                </div>

                <div className="about-features-grid">
                    <div className="feature-item">
                        <div className="feature-icon-wrapper">
                            <Landmark className="feature-icon" />
                        </div>
                        <span className="feature-text">Direct affiliations with leading British academic institutions</span>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon-wrapper">
                            <Compass className="feature-icon" />
                        </div>
                        <span className="feature-text">Comprehensive assistance spanning from university applications to securing housing</span>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon-wrapper">
                            <Handshake className="feature-icon" />
                        </div>
                        <span className="feature-text">Seamless transitional support delivered locally in India and upon arrival in the UK</span>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon-wrapper">
                            <BadgeCheck className="feature-icon" />
                        </div>
                        <span className="feature-text">Seasoned advisors offering proven expertise and personalized mentoring</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
