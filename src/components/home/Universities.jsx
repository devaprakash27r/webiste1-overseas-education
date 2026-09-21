import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Universities.css';

const verticalUniversities = [
    { name: 'Ravensbourne University London', file: 'Ravensbourne Logo.png', scale: 1.4, url: 'https://www.ravensbourne.ac.uk/' },
    { name: 'University of Bolton', file: 'University of Bolton Logo.png', scale: 1.3, url: 'https://www.bolton.ac.uk/' },
    { name: 'University of East London', file: 'University of East London Logo.png', scale: 1.3, url: 'https://uel.ac.uk/' },
    { name: 'Northumbria University', file: 'Northumbria University Logo.png', scale: 1.3, offsetX: 5, url: 'https://www.northumbria.ac.uk/' },
    { name: 'University of Hull', file: 'Univerity of Hull Logo.png', url: 'https://www.hull.ac.uk/' },
    { name: 'Buckinghamshire New University', file: 'Buckinghamshire New University Logo.png', scale: 1.3, offsetX: 5, url: 'https://www.bucks.ac.uk/' },
    { name: 'Coventry University', file: 'Coventry University Logo.png', scale: 1.2, url: 'https://www.coventry.ac.uk/' },
    { name: 'University of Roehampton', file: 'University of Roehampton Logo.png', scale: 1.3, offsetX: 5, url: 'https://www.roehampton.ac.uk/' },
    { name: 'Ulster University', file: 'Ulster University Logo.png', url: 'https://www.ulster.ac.uk/' },
    { name: 'University of Glasgow', file: 'University of Glasgow Logo.png', url: 'https://www.gla.ac.uk/' },
    { name: 'Birmingham City University', file: 'Birmingham City Logo.png', scale: 1.4, url: 'https://www.bcu.ac.uk/' },
    { name: 'University of Liverpool', file: 'University of Liverpool Logo.png', scale: 1.4, url: 'https://www.liverpool.ac.uk/' },
    { name: 'Sheffield Hallam University', file: 'Sheffield Hallam University Logo.png', url: 'https://www.shu.ac.uk/' },
    { name: 'University of Wolverhampton', file: 'University of Wolverhampton Logo.png', scale: 1.3, url: 'https://www.wlv.ac.uk/' },
    { name: 'BPP University', file: 'BPP University Logo.png', scale: 1.3, url: 'https://www.bpp.com/' },
    { name: 'Brunel University London', file: 'Brunel University London Logo.png', scale: 1.3, url: 'https://www.brunel.ac.uk/' },
    { name: 'University of Greenwich', file: 'University of Greenwich Logo.png', scale: 1.3, url: 'https://www.gre.ac.uk/' },
    { name: 'University of Bedfordshire', file: 'University of Bedfordshire Logo.png', scale: 1.4, url: 'https://www.beds.ac.uk/' },
    { name: 'Royal Holloway', file: 'Royal Holloway University Logo.png', scale: 1.6, url: 'https://www.royalholloway.ac.uk/' }
];

const horizontalUniversities = [
    { name: 'University of Northampton', file: 'University of Northampton Logo.png', scale: 1.3, url: 'https://www.northampton.ac.uk/' },
    { name: 'Anglia Ruskin University', file: 'Angila Ruskin University Logo.png', url: 'https://aru.ac.uk/' },
    { name: "Regent's University", file: 'Regents University Logo.png', scale: 1.3, offsetX: 5, url: 'https://www.regents.ac.uk/' },
    { name: 'Middlesex University', file: 'Middlesex University Logo.png', offsetY: 5, url: 'https://www.mdx.ac.uk/' },
    { name: 'University of Manchester', file: 'University of Manchester Logo.png', scale: 1.1, url: 'https://www.manchester.ac.uk/' },
    { name: 'Westminster University', file: 'Westminster University Logo.png', url: 'https://www.westminster.ac.uk/' },
    { name: 'University of Bradford', file: 'University of Bradford Logo.png', scale: 1.3, url: 'https://www.bradford.ac.uk/' },
    { name: 'University of the West of Scotland', file: 'University of the West of Scotland Logo.png', scale: 1.3, url: 'https://www.uws.ac.uk/' },
    { name: 'University of Kent', file: 'University of Kent Logo.png', url: 'https://www.kent.ac.uk/' },
    { name: 'University of Chester', file: 'University of Chester Logo.png', url: 'https://www.chester.ac.uk/' },
    { name: 'Queen Mary', file: 'Queen Mary University Logo.png', scale: 1.3, url: 'https://www.qmul.ac.uk/' },
    { name: 'Aston University', file: 'Aston University Logo.png', url: 'https://www.aston.ac.uk/' },
    { name: 'University of Sunderland', file: 'University of Sunderland Logo.png', scale: 1.3, offsetY: 10, url: 'https://www.sunderland.ac.uk/' },
    { name: 'De Montfort University', file: 'De Montfort University Logo.png', url: 'https://www.dmu.ac.uk/' },
    { name: 'University of South Wales', file: 'University of South Wales Logo.png', scale: 0.85, url: 'https://www.southwales.ac.uk/' },
    { name: 'University of York', file: 'University of York Logo.png', scale: 1.3, offsetX: 5, url: 'https://www.york.ac.uk/' },
    { name: 'University of Dundee', file: 'University of Dundee Logo.png', url: 'https://www.dundee.ac.uk/' },
    { name: 'University of Leicester', file: 'University of Leicester Logo.png', scale: 1.1, url: 'https://le.ac.uk/' },
    { name: 'University of Stirling', file: 'University of Stirling Logo.png', scale: 1.3, url: 'https://www.stir.ac.uk/' },
    { name: 'Universal Higher Education', file: 'Universal Higher Education Logo.png', scale: 1.4, url: 'https://uhe.ac.uk/' }
];

const LogoCard = ({ file, name, scale = 1.0, offsetX = 0, offsetY = 0, onClick }) => (
    <div className="uni-logo-card" title={name} onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
        <img
            src={`/assets/universities/${file}`}
            alt={name}
            className="uni-logo-img"
            style={{ transform: `scale(${scale}) translate(${offsetX}px, ${offsetY}px)` }}
        />
    </div>
);

const Universities = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const allUniversities = [...verticalUniversities, ...horizontalUniversities].sort((a, b) => a.name.localeCompare(b.name));

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('popup-open');
        } else {
            document.body.classList.remove('popup-open');
        }
        return () => {
            document.body.classList.remove('popup-open');
        };
    }, [isModalOpen]);

    return (
        <section id="universities" className="universities-section">
            <div className="uni-container">

                {/* Text Content */}
                <div className="uni-text-content">
                    <div className="section-badge">PARTNER UNIVERSITIES</div>
                    <h2 className="uni-title">
                        Our Partner Universities <br />
                        <span className="highlight">in the UK</span>
                    </h2>
                    <p className="uni-description">
                        Tamil Overseas Educational Consultancy is proudly partnered with leading UK universities across England, Scotland, Wales, and Northern Ireland. These partnerships give our students direct pathways to admissions, scholarships, and global career opportunities.
                    </p>

                    <div className="uni-featured-badge" onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
                        Featured Universities
                    </div>
                </div>

                {/* Vertical Marquee */}
                <div className="uni-vertical-track-container">
                    <div className="uni-vertical-track">
                        {verticalUniversities.map((uni, idx) => (
                            <LogoCard key={`v1-${idx}`} file={uni.file} name={uni.name} scale={uni.scale} offsetX={uni.offsetX} offsetY={uni.offsetY} onClick={() => setIsModalOpen(true)} />
                        ))}
                        {/* Duplicate for infinite scroll */}
                        {verticalUniversities.map((uni, idx) => (
                            <LogoCard key={`v2-${idx}`} file={uni.file} name={uni.name} scale={uni.scale} offsetX={uni.offsetX} offsetY={uni.offsetY} onClick={() => setIsModalOpen(true)} />
                        ))}
                    </div>
                </div>

                {/* Horizontal Marquee */}
                <div className="uni-horizontal-track-container">
                    <div className="uni-horizontal-track">
                        {horizontalUniversities.map((uni, idx) => (
                            <LogoCard key={`h1-${idx}`} file={uni.file} name={uni.name} scale={uni.scale} offsetX={uni.offsetX} offsetY={uni.offsetY} onClick={() => setIsModalOpen(true)} />
                        ))}
                        {/* Duplicate for infinite scroll */}
                        {horizontalUniversities.map((uni, idx) => (
                            <LogoCard key={`h2-${idx}`} file={uni.file} name={uni.name} scale={uni.scale} offsetX={uni.offsetX} offsetY={uni.offsetY} onClick={() => setIsModalOpen(true)} />
                        ))}
                    </div>
                </div>

                {/* Mobile Marquee (Visible only < 1250px) */}
                <div className="uni-mobile-track-container">
                    <h3 className="uni-mobile-title">View All Partner Universities</h3>
                    <div className="uni-mobile-track" onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
                        {allUniversities.map((uni, idx) => (
                            <LogoCard key={`m1-${idx}`} file={uni.file} name={uni.name} scale={uni.scale} />
                        ))}
                        {/* Duplicate for infinite scroll */}
                        {allUniversities.map((uni, idx) => (
                            <LogoCard key={`m2-${idx}`} file={uni.file} name={uni.name} scale={uni.scale} />
                        ))}
                    </div>
                </div>

                {/* Intersection Highlight Box */}
                <div className="intersection-highlight-box" onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
                    <div className="highlight-inner"></div>
                    <div className="highlight-glow"></div>
                </div>

            </div>

            {/* Modal Popup */}
            {isModalOpen && createPortal(
                <div className="uni-modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <button className="uni-modal-close-fixed" onClick={() => setIsModalOpen(false)}>×</button>
                    <div className="uni-modal-content" onClick={e => e.stopPropagation()}>
                        <h3 className="uni-modal-title">Featured Universities</h3>
                        <div className="uni-modal-grid">
                            {allUniversities.map((uni, idx) => (
                                <a key={`modal-${idx}`} href={uni.url} target="_blank" rel="noopener noreferrer" className="uni-modal-card" style={{ textDecoration: 'none' }}>
                                    <LogoCard file={uni.file} name={uni.name} scale={uni.scale} offsetX={uni.offsetX} offsetY={uni.offsetY} />
                                    <p className="uni-modal-name">{uni.name}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
};

export default Universities;
