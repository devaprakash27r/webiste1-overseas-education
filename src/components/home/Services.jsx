import React from 'react';
import { 
    GraduationCap, 
    ClipboardList, 
    FolderOpen, 
    Library, 
    Clock, 
    Award, 
    Banknote, 
    Users, 
    FileCheck, 
    MessageCircle, 
    PenTool, 
    Monitor 
} from 'lucide-react';
import './Services.css';

const services = [
    { id: 0, icon: <GraduationCap size={24} strokeWidth={2} />, title: 'Comprehensive Study Support', desc: 'Guidance for UG, PG, MRes, and PhD courses in the UK' },
    { id: 1, icon: <ClipboardList size={24} strokeWidth={2} />, title: 'Complimentary Consultation', desc: 'In-depth profile evaluation and advice' },
    { id: 2, icon: <FolderOpen size={24} strokeWidth={2} />, title: 'Paperwork Assistance', desc: 'Templates and support for LORs, SOPs, and MOIs' },
    { id: 3, icon: <Library size={24} strokeWidth={2} />, title: 'University Admissions', desc: 'Direct partnerships with leading UK institutions' },
    { id: 4, icon: <Clock size={24} strokeWidth={2} />, title: 'Expedited Offers', desc: 'Receive conditional or pre-conditional letters in 3-5 days' },
    { id: 5, icon: <Award size={24} strokeWidth={2} />, title: 'Funding & Scholarships', desc: 'Assistance securing awards up to £5,000' },
    { id: 6, icon: <Banknote size={24} strokeWidth={2} />, title: 'Education Loans', desc: 'Expert financial advice and loan processing' },
    { id: 7, icon: <Users size={24} strokeWidth={2} />, title: 'Family VISA Assistance', desc: 'Support for dependents of eligible students' },
    { id: 8, icon: <FileCheck size={24} strokeWidth={2} />, title: 'Student VISA Processing', desc: 'Complete end-to-end application guidance' },
    { id: 9, icon: <MessageCircle size={24} strokeWidth={2} />, title: 'Language Proficiency', desc: 'IELTS coaching and test preparation' },
    { id: 10, icon: <PenTool size={24} strokeWidth={2} />, title: 'Statement Writing', desc: 'Expert tips for crafting your Personal Statement' },
    { id: 11, icon: <Monitor size={24} strokeWidth={2} />, title: 'Interview Prep', desc: 'Mock sessions for university admission interviews' },
];

const Services = () => {
    return (
        <section className="services-section" id="services">
            <div className="services-container">
                {/* Left Side: Text & Images */}
                <div className="services-left">
                    <div className="section-badge">SERVICES</div>
                    <h2 className="services-title">Complete A-Z Support</h2>
                    
                    <div className="services-images-wrapper">
                        <div className="image-frame main-image">
                            <img src="/assets/uk_university_student.jpg" alt="Student at UK University" />
                        </div>
                        <div className="image-frame secondary-image">
                            <img src="/assets/counseling_session.jpg" alt="Counseling Session" />
                        </div>
                    </div>
                </div>

                {/* Right Side: Services Grid */}
                <div className="services-right">
                    <div className="services-list-header">
                        <h3>Our Core Services</h3>
                    </div>
                    <div className="services-grid">
                        {services.map(service => (
                            <div className="service-card" key={service.id}>
                                <div className="service-icon">{service.icon}</div>
                                <div className="service-content">
                                    <h4>{service.title}</h4>
                                    <p>{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
