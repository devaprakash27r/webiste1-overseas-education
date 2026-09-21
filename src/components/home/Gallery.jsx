import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './Gallery.css';

// 45 placeholder images to give us 5 pages of 10 images each (last page has 5)
const dummyImages = Array.from({ length: 45 }, (_, i) => `https://picsum.photos/seed/${i + 42}/400/400`);

const Gallery = () => {
    // Start at index 1 because index 0 is a clone of the last page
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [screenSize, setScreenSize] = useState('desktop');

    useEffect(() => {
        if (lightboxIndex !== null) {
            document.body.classList.add('popup-open');
        } else {
            document.body.classList.remove('popup-open');
        }
        return () => {
            document.body.classList.remove('popup-open');
        };
    }, [lightboxIndex]);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            let newSize = 'desktop';
            if (width <= 768) newSize = 'mobile';
            else if (width <= 992) newSize = 'tablet';
            
            if (newSize !== screenSize) {
                setScreenSize(newSize);
                setCurrentIndex(1); // Reset index on layout switch
            }
        };
        handleResize(); // Initialize on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [screenSize]);
    
    const imagesPerPage = screenSize === 'mobile' ? 1 : (screenSize === 'tablet' ? 9 : 10);
    const totalPages = Math.ceil(dummyImages.length / imagesPerPage);
    
    const nextPage = useCallback(() => {
        setCurrentIndex(prev => {
            if (prev >= totalPages + 1) return prev;
            return prev + 1;
        });
        setIsTransitioning(true);
    }, [totalPages]);

    const prevPage = useCallback(() => {
        setCurrentIndex(prev => {
            if (prev <= 0) return prev;
            return prev - 1;
        });
        setIsTransitioning(true);
    }, []);

    const goToPage = (pageIndex) => {
        setIsTransitioning(true);
        setCurrentIndex(pageIndex + 1);
    };

    // Auto loop every 4 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            nextPage();
        }, 4000);
        return () => clearTimeout(timer);
    }, [currentIndex, nextPage]);

    const handleTransitionEnd = () => {
        if (currentIndex >= totalPages + 1) {
            // Jump from end clone to real first page
            setIsTransitioning(false);
            setCurrentIndex(1);
        } else if (currentIndex <= 0) {
            // Jump from start clone to real last page
            setIsTransitioning(false);
            setCurrentIndex(totalPages);
        }
    };

    // Chunk images into pages for the sliding track
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
        pages.push(dummyImages.slice(i * imagesPerPage, (i + 1) * imagesPerPage));
    }
    
    // Create clones for infinite looping
    const clonedPages = [
        pages[totalPages - 1], // Clone of last page at the start
        ...pages,
        pages[0]               // Clone of first page at the end
    ];

    // Determine the active dot in the pagination
    const realCurrentPage = currentIndex === 0 ? totalPages - 1 : currentIndex === totalPages + 1 ? 0 : currentIndex - 1;

    const getTrueGlobalIndex = (clonedPageIndex, imgIndex) => {
        let truePageIdx;
        if (clonedPageIndex === 0) truePageIdx = totalPages - 1;
        else if (clonedPageIndex === totalPages + 1) truePageIdx = 0;
        else truePageIdx = clonedPageIndex - 1;
        
        return truePageIdx * imagesPerPage + imgIndex;
    };

    return (
        <section id="gallery" className="gallery-section">
            <div className="gallery-container">
                <div className="gallery-header">
                    <div className="badges-wrapper">
                        <div className="section-badge">GALLERY</div>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cta-pill instagram-pill">
                            <i className="fa-brands fa-instagram"></i> View on Instagram
                        </a>
                    </div>
                    <h2 className="gallery-title">
                        Our Students' <span className="highlight">Moments</span>
                    </h2>
                    <p className="gallery-description">
                        These are our students moments. A glimpse into the vibrant life, achievements, and experiences of our students in the UK.
                    </p>
                </div>

                <div className="gallery-panel-wrapper">
                    {/* Left Navigation Arrow */}
                    <button 
                        className="gallery-nav-btn prev-btn" 
                        onClick={prevPage}
                        aria-label="Previous page"
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    {/* Gallery Panel with sliding track */}
                    <div className="gallery-panel">
                        <div 
                            className="gallery-track"
                            style={{ 
                                transform: `translateX(-${currentIndex * 100}%)`,
                                transition: isTransitioning ? 'transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
                            }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {clonedPages.map((pageImages, clonedPageIndex) => (
                                <div key={clonedPageIndex} className="gallery-page">
                                    <div className="gallery-grid">
                                        {pageImages.map((src, index) => {
                                            const globalIndex = getTrueGlobalIndex(clonedPageIndex, index);
                                            return (
                                                <div 
                                                    key={index} 
                                                    className="gallery-item"
                                                    onClick={() => setLightboxIndex(globalIndex)}
                                                >
                                                    <img src={src} alt={`Student moment ${globalIndex + 1}`} loading="lazy" />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Navigation Arrow */}
                    <button 
                        className="gallery-nav-btn next-btn" 
                        onClick={nextPage}
                        aria-label="Next page"
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
                
                {/* Pagination Dots at the bottom */}
                <div className="gallery-pagination">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`pagination-dot ${realCurrentPage === idx ? 'active' : ''}`}
                            onClick={() => goToPage(idx)}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox Overlay */}
            {lightboxIndex !== null && createPortal(
                <div className="gallery-lightbox-overlay" onClick={() => setLightboxIndex(null)}>
                    <div className="gallery-lightbox-content" onClick={e => e.stopPropagation()}>
                        <button className="gallery-lightbox-close" onClick={() => setLightboxIndex(null)}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        
                        <button 
                            className="gallery-lightbox-nav prev" 
                            onClick={() => setLightboxIndex(prev => prev === 0 ? dummyImages.length - 1 : prev - 1)}
                        >
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        
                        <img 
                            src={dummyImages[lightboxIndex]} 
                            alt={`Gallery enlarged ${lightboxIndex + 1}`} 
                            className="gallery-lightbox-img" 
                        />
                        
                        <button 
                            className="gallery-lightbox-nav next" 
                            onClick={() => setLightboxIndex(prev => (prev + 1) % dummyImages.length)}
                        >
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
};

export default Gallery;

