import React from 'react';
import './UkSupport.css';
import { Home, Briefcase, BookOpen, Presentation, Plane, Crown } from 'lucide-react';

const UkSupport = () => {
    const supportServices = [
        {
            icon: Home,
            title: "Housing Assistance",
            description: "Discover secure, budget-friendly accommodation near your campus."
        },
        {
            icon: Briefcase,
            title: "Part-Time Work Links",
            description: "Access exclusive networking opportunities for roles in retail, hospitality, and logistics."
        },
        {
            icon: BookOpen,
            title: "Academic Mentorship",
            description: "Get expert help with your university projects, assignments, and research."
        },
        {
            icon: Presentation,
            title: "Continuous Mentoring",
            description: "Rely on our local London team for advice and help anytime during your studies."
        },
        {
            icon: Plane,
            title: "Post-Study Visa Support",
            description: "Seamless guidance for visa extensions and exploring graduate routes."
        },
        {
            icon: Crown,
            title: "Path to Residency",
            description: "End-to-end support for your journey towards becoming a UK permanent resident."
        }
    ];

    return (
        <section id="uk-support" className="uk-support-section">
            <div className="uk-support-container">
                {/* Left Side: Content & Grid */}
                <div className="uk-support-content">
                    <h2 className="support-subtitle">
                        From Free Counselling to Settling in the UK
                    </h2>
                    
                    <div className="support-grid">
                        {supportServices.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div key={index} className="support-card">
                                    <div className="support-icon-wrapper">
                                        <IconComponent className="support-icon" size={24} />
                                    </div>
                                    <div className="support-text">
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Side: Images */}
                <div className="uk-support-images">
                    <div className="section-badge right-badge">SUPPORT IN THE UK</div>
                    <div className="image-stack-right">
                        <img 
                            src="/assets/uk_london_campus.jpg" 
                            alt="Student smiling on a UK campus" 
                            className="support-image-primary"
                        />
                        <img 
                            src="/assets/uk_mentorship.jpg" 
                            alt="Student and counselor in London office" 
                            className="support-image-secondary"
                        />
                        {/* Decorative elements */}
                        <div className="support-dots"></div>
                        <div className="support-dots dots-bottom"></div>
                    </div>
                </div>
            </div>
            
            <div className="support-footer-banner">
                <p>From arrival to graduation — our London office is here to support you.</p>
            </div>
        </section>
    );
};

export default UkSupport;
