import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import './Blog.css';

import imgBusiness from '../../assets/courses/business.jpg';
import imgComputing from '../../assets/courses/computing.jpg';
import imgArts from '../../assets/courses/arts.jpg';
import imgEngineering from '../../assets/courses/engineering.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'UK Graduate Route Visa Updates 2026: Everything You Need to Know',
    excerpt: 'The UK government has announced key updates to the Graduate Route Visa for the upcoming 2026/2027 intakes. Discover how these changes affect your post-study work opportunities and how to prepare.',
    category: 'Visa Updates',
    date: 'September 2, 2026',
    author: 'Tamil Overseas Team',
    image: imgEngineering,
    featured: true
  },
  {
    id: 2,
    title: 'Navigating UK Student Visa Financial Requirements: 2026 Bank Balances',
    excerpt: 'Understanding the financial requirements is crucial for a successful visa application. We break down the exact funds needed for London vs. outside London for 2026.',
    category: 'Financial Guidance',
    date: 'August 28, 2026',
    author: 'Tamil Overseas Team',
    image: imgBusiness,
    featured: false
  },
  {
    id: 3,
    title: 'Top Universities in the UK for Tech & Business: 2026/2027 Intakes',
    excerpt: 'Explore the leading UK institutions offering cutting-edge programs in Technology and Business, and learn about their specific admission criteria for the next intake.',
    category: 'University Guide',
    date: 'August 15, 2026',
    author: 'Tamil Overseas Team',
    image: imgComputing,
    featured: false
  },
  {
    id: 4,
    title: 'Is IELTS Mandatory? A Guide to University English Requirements in 2026',
    excerpt: 'Did you know many UK universities offer IELTS waivers based on your Medium of Instruction (MOI) or high school English scores? Find out if you qualify.',
    category: 'Admissions',
    date: 'August 5, 2026',
    author: 'Tamil Overseas Team',
    image: imgArts,
    featured: false
  }
];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Latest Insights</span>
          <h2 className="section-title">News & Updates</h2>
          <p className="section-description">
            Stay informed with the latest updates on UK education, visa rules, and study abroad tips from our experts.
          </p>
        </div>

        <div className="blog-content">
          {featuredPost && (
            <div className="featured-post">
              <div className="featured-image-wrapper">
                <img src={featuredPost.image} alt={featuredPost.title} className="featured-image" />
                <div className="post-category badge-yellow">{featuredPost.category}</div>
              </div>
              <div className="featured-content">
                <div className="post-meta">
                  <span className="meta-item"><Calendar size={16} /> {featuredPost.date}</span>
                  <span className="meta-item"><User size={16} /> {featuredPost.author}</span>
                </div>
                <h3 className="featured-title">{featuredPost.title}</h3>
                <p className="featured-excerpt">{featuredPost.excerpt}</p>
                <button className="read-more-btn">
                  Read Full Article <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          <div className="blog-grid">
            {regularPosts.map((post) => (
              <div className="blog-card" key={post.id}>
                <div className="blog-image-wrapper">
                  <img src={post.image} alt={post.title} className="blog-image" />
                  <div className="post-category badge-yellow">{post.category}</div>
                </div>
                <div className="blog-card-content">
                  <div className="post-meta">
                    <span className="meta-item"><Calendar size={14} /> {post.date}</span>
                  </div>
                  <h4 className="blog-card-title">{post.title}</h4>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <button className="read-more-link">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
