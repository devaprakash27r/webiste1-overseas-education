import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Blog from '../components/common/Blog';
import FAQ from '../components/common/FAQ';
import './Resources.css';

const Resources = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="resources-page pt-20">
      <div className="resources-hero">
        <div className="container">
          <h1 className="resources-title">Insights & Resources</h1>
          <p className="resources-subtitle">Everything you need to know about studying in the UK. Explore our latest blog posts and find answers to frequently asked questions.</p>
        </div>
      </div>
      
      <Blog />
      
      <div className="section-divider"></div>
      
      <div id="faqs">
        <FAQ />
      </div>
    </div>
  );
};

export default Resources;
