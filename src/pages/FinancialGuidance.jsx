import React, { useEffect } from 'react';
import './FinancialGuidance.css';

import imgAuxilo from '../assets/partners/Auxilo Logo.png';
import imgAvanse from '../assets/partners/Avanse Logo.png';
import imgHdfc from '../assets/partners/HDFC Credila Logo.png';
import imgIdfc from '../assets/partners/IDFC First Bank Logo.webp';
import imgPoonawalla from '../assets/partners/Poonawalla Logo.png';
import imgSbi from '../assets/partners/SBI Logo.png';
import imgTata from '../assets/partners/Tata Capital Logo.png';

const FinancialGuidance = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="financial-guidance-page">
            <section className="finance-hero">
                <div className="finance-hero-content">
                    <span className="finance-badge">Financial Guidance</span>
                    <h1>Affordable & Stress-Free <span>UK Education</span></h1>
                    <p>We make your UK education journey affordable and stress-free with expert financial support. We don't just send you abroad – we guide you until you succeed.</p>
                </div>
            </section>

            <main className="finance-main">
                <div className="finance-grid">
                    <div className="finance-card">
                        <div className="finance-card-icon">
                            <i className="fa-solid fa-sack-dollar"></i>
                        </div>
                        <h3>Educational Loan Assistance</h3>
                        <p>We partner with India's most trusted financial institutions to help you secure the funds you need for your education with ease.</p>
                        <ul className="finance-features">
                            <li><i className="fa-solid fa-check-circle"></i> Loans through trusted finance partners</li>
                            <li><i className="fa-solid fa-check-circle"></i> End-to-end support with loan documentation</li>
                            <li><i className="fa-solid fa-check-circle"></i> Guidance on loan eligibility and processing</li>
                        </ul>
                    </div>

                    <div className="finance-card">
                        <div className="finance-card-icon">
                            <i className="fa-solid fa-piggy-bank"></i>
                        </div>
                        <h3>Show Money & Visa Funds</h3>
                        <p>Understanding UK Visas and Immigration (UKVI) financial rules can be complex. We simplify the entire proof of funds process.</p>
                        <ul className="finance-features">
                            <li><i className="fa-solid fa-check-circle"></i> Guidance on student show money requirements</li>
                            <li><i className="fa-solid fa-check-circle"></i> Dependent show money calculations & rules</li>
                            <li><i className="fa-solid fa-check-circle"></i> Support with 28-day rule maintenance</li>
                        </ul>
                    </div>

                    <div className="finance-card">
                        <div className="finance-card-icon">
                            <i className="fa-solid fa-graduation-cap"></i>
                        </div>
                        <h3>Scholarship Guidance</h3>
                        <p>Reduce your tuition fees significantly by applying for university-specific and international scholarships tailored for you.</p>
                        <ul className="finance-features">
                            <li><i className="fa-solid fa-check-circle"></i> Up to £5,000 available in scholarships</li>
                            <li><i className="fa-solid fa-check-circle"></i> Profile evaluation for merit-based awards</li>
                            <li><i className="fa-solid fa-check-circle"></i> Application assistance for early bird discounts</li>
                        </ul>
                    </div>

                    <div className="finance-card">
                        <div className="finance-card-icon">
                            <i className="fa-solid fa-chart-pie"></i>
                        </div>
                        <h3>Transparent Cost Breakdown</h3>
                        <p>No hidden costs. We provide a completely transparent breakdown of what your journey to the UK will actually cost.</p>
                        <ul className="finance-features">
                            <li><i className="fa-solid fa-check-circle"></i> Clear breakdown of university tuition fees</li>
                            <li><i className="fa-solid fa-check-circle"></i> Realistic UK living costs estimations</li>
                            <li><i className="fa-solid fa-check-circle"></i> IHS (Immigration Health Surcharge) & VISA charges</li>
                        </ul>
                    </div>
                </div>

                <section className="partners-section">
                    <h2>Our Financial Partners</h2>
                    <p>We work closely with leading financial institutions to secure the best education loans for you.</p>

                    <div className="partners-grid">
                        <div className="partner-logo-wrapper">
                            <img src={imgHdfc} alt="HDFC Credila" className="bank-logo-img scale-08" />
                        </div>
                        <div className="partner-logo-wrapper">
                            <img src={imgAvanse} alt="Avanse Education Loans" className="bank-logo-img scale-15" />
                        </div>
                        <div className="partner-logo-wrapper">
                            <img src={imgTata} alt="Tata Capital" className="bank-logo-img scale-10" />
                        </div>
                        <div className="partner-logo-wrapper">
                            <img src={imgIdfc} alt="IDFC FIRST Bank" className="bank-logo-img scale-09" />
                        </div>
                        <div className="partner-logo-wrapper">
                            <img src={imgSbi} alt="SBI" className="bank-logo-img scale-09" />
                        </div>
                        <div className="partner-logo-wrapper">
                            <img src={imgAuxilo} alt="Auxilo" className="bank-logo-img scale-23" />
                        </div>
                        <div className="partner-logo-wrapper">
                            <img src={imgPoonawalla} alt="Poonawalla Fincorp" className="bank-logo-img scale-15" />
                        </div>
                    </div>
                </section>

                <div className="finance-footer-banner">
                    <h3>We don't just send you abroad – we guide you until you succeed</h3>
                </div>
            </main>
        </div>
    );
};

export default FinancialGuidance;
