import React, { useEffect } from 'react';
import './Courses.css';

import imgEngineering from '../assets/courses/engineering.jpg';
import imgBusiness from '../assets/courses/business.jpg';
import imgHealth from '../assets/courses/health.jpg';
import imgEducation from '../assets/courses/education.jpg';
import imgLaw from '../assets/courses/law.jpg';
import imgMedicine from '../assets/courses/medicine.jpg';
import imgHospitality from '../assets/courses/hospitality.jpg';
import imgComputing from '../assets/courses/computing.jpg';
import imgArts from '../assets/courses/arts.jpg';
import imgMarine from '../assets/courses/marine_new.png';
import imgArchitecture from '../assets/courses/architecture.jpg';
import imgAgriculture from '../assets/courses/agriculture.jpg';
import imgAviation from '../assets/courses/aviation.png';
import imgSports from '../assets/courses/sports.png';
import imgVeterinary from '../assets/courses/veterinary.png';
import imgHumanities from '../assets/courses/humanities.png';
import imgMathematics from '../assets/courses/mathematics.png';

const fieldsOfStudy = [
    {
        title: "Agriculture & Environmental Sciences",
        image: imgAgriculture,
        courses: ["Agriculture", "Environmental Science", "Forestry", "Sustainability Studies"]
    },
    {
        title: "Architecture & Built Environment",
        image: imgArchitecture,
        courses: ["Architecture", "Construction Management", "Urban Planning"]
    },
    {
        title: "Arts, Design & Media",
        image: imgArts,
        courses: ["Animation", "Film, Media & Communication", "Graphic Design", "Performing Arts"]
    },
    {
        title: "Aviation & Aerospace",
        image: imgAviation,
        courses: ["Aerospace Engineering", "Aviation Management", "Pilot Training"]
    },
    {
        title: "Business & Management",
        image: imgBusiness,
        courses: ["Business Administration", "Human Resources", "International Business", "Marketing & Digital Marketing"]
    },
    {
        title: "Computing & Technology",
        image: imgComputing,
        courses: ["Artificial Intelligence (AI)", "Computer Science", "Cybersecurity", "Data Analytics", "Information Systems"]
    },
    {
        title: "Education & Social Sciences",
        image: imgEducation,
        courses: ["Education Studies", "Psychology", "Sociology"]
    },
    {
        title: "Engineering & Applied Sciences",
        image: imgEngineering,
        courses: ["Environmental & Energy Systems", "Mechanical, Civil, Electrical, Electronics", "Robotics"]
    },
    {
        title: "Health & Life Sciences",
        image: imgHealth,
        courses: ["Biomedical Sciences", "Biotechnology", "Nursing", "Public Health"]
    },
    {
        title: "Hospitality & Tourism",
        image: imgHospitality,
        courses: ["Hotel Management", "Tourism & Travel Studies"]
    },
    {
        title: "Humanities & Languages",
        image: imgHumanities,
        courses: ["English Literature", "History", "Linguistics", "Philosophy"]
    },
    {
        title: "Law & International Relations",
        image: imgLaw,
        courses: ["International Law", "Law (LLB, LLM)", "Politics & Governance"]
    },
    {
        title: "Marine Studies & Oceanography",
        image: imgMarine,
        courses: ["Marine Biology", "Marine Engineering", "Oceanography"]
    },
    {
        title: "Mathematics & Physical Sciences",
        image: imgMathematics,
        courses: ["Actuarial Science", "Applied Mathematics", "Chemistry", "Physics"]
    },
    {
        title: "Medicine Pathways",
        image: imgMedicine,
        courses: ["Allied Health", "Pre-medical Programs"]
    },
    {
        title: "Sports Sciences & Management",
        image: imgSports,
        courses: ["Physiotherapy", "Sports Management", "Sports Psychology"]
    },
    {
        title: "Veterinary Science & Animal Care",
        image: imgVeterinary,
        courses: ["Animal Science", "Veterinary Medicine", "Zoology"]
    }
];

const Courses = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="courses-page">
            <section className="fields-section">
                <div className="container">
                    <div className="section-header-centered">
                        <div className="section-badge">COURSES</div>
                        <h2 className="degree-programs-title">Degree Programs</h2>
                        <div className="program-levels">
                            <span className="level-tag">Undergraduate (UG)</span>
                            <span className="level-tag">Postgraduate (PG)</span>
                            <span className="level-tag">Master of Research (MRes)</span>
                            <span className="level-tag">Doctor of Philosophy (PhD)</span>
                        </div>
                    </div>
                    
                    <div className="fields-header-container">
                        <h2 className="fields-main-title">Fields of <span className="highlight-green">Study</span></h2>
                    </div>

                    <div className="fields-grid">
                        {fieldsOfStudy.map((field, index) => (
                            <div className="field-card" key={index}>
                                <img src={field.image} alt={field.title} className="field-image" />
                                <div className="field-overlay">
                                    <div className="overlay-content">
                                        <h3 className="overlay-title">{field.title}</h3>
                                        <ul className="course-list">
                                            {field.courses.map((course, idx) => (
                                                <li key={idx}>{course}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="field-title-static">
                                    <h3>{field.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Courses;
