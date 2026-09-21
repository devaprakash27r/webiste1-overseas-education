import React, { useState, useEffect } from 'react';
import './SuccessStories.css';

const dummyVideos = [
    {
        id: 1,
        title: "Karthik's Journey to Oxford",
        thumbnail: "https://picsum.photos/seed/succ1/800/450",
        youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Dummy link
    },
    {
        id: 2,
        title: "Priya's Medical Degree in London",
        thumbnail: "https://picsum.photos/seed/succ2/800/450",
        youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        id: 3,
        title: "Arjun's Engineering Success",
        thumbnail: "https://picsum.photos/seed/succ3/800/450",
        youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        id: 4,
        title: "Sneha's MBA Experience",
        thumbnail: "https://picsum.photos/seed/succ4/800/450",
        youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        id: 5,
        title: "Rahul's Data Science Career",
        thumbnail: "https://picsum.photos/seed/succ5/800/450",
        youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
];

const SuccessStories = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const total = dummyVideos.length;

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % total);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % total);
        }, 10000);
        return () => clearTimeout(timer);
    }, [activeIndex, total]);

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    };

    const getOffset = (index) => {
        let offset = (index - activeIndex) % total;
        if (offset > Math.floor(total / 2)) offset -= total;
        if (offset < -Math.floor(total / 2)) offset += total;
        return offset;
    };

    return (
        <section id="success-stories" className="success-section">
            <div className="success-container">
                <div className="success-header">
                    <div className="badges-wrapper">
                        <div className="section-badge">TESTIMONIALS</div>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="cta-pill youtube-pill">
                            <i className="fa-brands fa-youtube"></i> Watch on YouTube
                        </a>
                    </div>
                    <h2 className="success-title">
                        Our <span className="highlight">Success Stories</span>
                    </h2>
                    <p className="success-description">
                        Hear directly from our students who have successfully transformed their dreams of studying in the UK into reality.
                    </p>
                </div>

                <div className="carousel-wrapper">
                    <button className="carousel-nav-btn prev" onClick={prevSlide} aria-label="Previous story">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    <div className="carousel-track">
                        {dummyVideos.map((video, index) => {
                            const offset = getOffset(index);
                            
                            // Calculate styles based on offset for the coverflow effect
                            // Center is 0. Left is negative, Right is positive.
                            const absOffset = Math.abs(offset);
                            const isActive = offset === 0;
                            
                            // X position
                            const translateX = offset * 65; // percentage
                            // Scale down items further away
                            const scale = 1 - (absOffset * 0.15);
                            // Fade items further away
                            const opacity = absOffset > 2 ? 0 : 1 - (absOffset * 0.2);
                            // Z-index: center is highest
                            const zIndex = 10 - absOffset;
                            
                            return (
                                <div 
                                    key={video.id} 
                                    className={`carousel-item ${isActive ? 'active' : ''}`}
                                    style={{
                                        transform: `translateX(${translateX}%) scale(${scale})`,
                                        zIndex: zIndex,
                                        opacity: opacity,
                                        visibility: opacity === 0 ? 'hidden' : 'visible'
                                    }}
                                    onClick={() => {
                                        if (!isActive) {
                                            setActiveIndex(index);
                                        }
                                    }}
                                >
                                    <div className="video-card">
                                        <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                                        <div className="video-overlay">
                                            {isActive ? (
                                                <a href={video.youtubeLink} target="_blank" rel="noopener noreferrer" className="play-btn-wrapper">
                                                    <div className="play-btn"></div>
                                                </a>
                                            ) : null}
                                        </div>
                                        <div className="video-info">
                                            <h3>{video.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <button className="carousel-nav-btn next" onClick={nextSlide} aria-label="Next story">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
                
                <div className="carousel-pagination">
                    {dummyVideos.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`pagination-dot ${activeIndex === idx ? 'active' : ''}`}
                            onClick={() => setActiveIndex(idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
