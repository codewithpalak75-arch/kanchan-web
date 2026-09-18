import React from 'react';
import PageBanner from '../components/PageBanner';
import './News.css';

import centreEntranceImg from '../assets/centre-entrance.jpg';
import sponsoredDialysisImg from '../assets/sponsored-dialysis-treatment.jpg';
import janmashtamiSevaImg from '../assets/janmashtami-seva.jpg';

const featured = {
  date: 'August 12, 2026',
  category: 'Milestone',
  title: 'Shri Kanchan Crosses 10,000 Free Dialysis Sessions',
  excerpt:
    'A landmark moment for our trust and our community — thanks to the continued support of our donors, volunteers, and medical staff, we have now provided over ten thousand life-saving dialysis sessions completely free of cost.',
  image: centreEntranceImg,
};

const posts = [
  {
    date: 'September 6, 2026',
    category: 'Memorial Sponsorship',
    title: "Today's Dialysis Sponsored by Singhvis in Loving Memory",
    excerpt: 'In loving memory of Late Mr. Kunal Singhvi, dedicated donors sponsored all patient dialysis sessions, bringing healing and care to needy families.',
    image: sponsoredDialysisImg,
  },
  {
    date: 'August 26, 2026',
    category: 'Festival Seva',
    title: 'Janmashtami Seva & Patient Blessing Drive at Shri Kanchan',
    excerpt: 'Celebrating the birth of kindness and compassion with special care packages, blessings, and uninterrupted free dialysis treatments.',
    image: janmashtamiSevaImg,
  },
  {
    date: 'July 3, 2026',
    category: 'Health Camp',
    title: 'Free Kidney Health Screening Camp Held in Jaipur',
    excerpt: 'Over 300 residents were screened for early signs of kidney disease at our community outreach camp in Shyam Nagar.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    date: 'June 18, 2026',
    category: 'Announcement',
    title: 'New Hemodialysis Machines Added to Our Facility',
    excerpt: 'Thanks to a generous CSR contribution, we have added three new hemodialysis machines, increasing our monthly patient capacity.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    date: 'May 22, 2026',
    category: 'Patient Care',
    title: 'Meet the Compassionate Medical Staff at Shri Kanchan',
    excerpt: 'A look at the dedicated nephrology nurses and technicians who work round the clock to ensure safe and comfortable dialysis.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    date: 'February 14, 2026',
    category: 'Announcement',
    title: 'Extended Operating Hours to Serve More Patients',
    excerpt: 'To accommodate rising demand from across Rajasthan, the centre has extended its operating hours on weekdays.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
];

const News = () => {
  return (
    <>
      <PageBanner
        label="News & Updates"
        title="Stories From Our Community"
        subtitle="Stay up to date with milestones, health camps, volunteer stories, and announcements from Shri Kanchan Dialysis Centre."
      />

      <section className="nw-section">
        <div className="nw-container">
          {/* Featured post */}
          <div className="nw-featured">
            <div className="nw-featured-image">
              <img src={featured.image} alt={featured.title} />
            </div>
            <div className="nw-featured-content">
              <div className="nw-meta">
                <span className="nw-tag">{featured.category}</span>
                <span className="nw-date">{featured.date}</span>
              </div>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <a href="#/contact" className="nw-read-more">
                Read Full Story
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
              </a>
            </div>
          </div>

          {/* Post grid */}
          <div className="nw-grid">
            {posts.map((post) => (
              <article className="nw-card" key={post.title}>
                <div className="nw-card-image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <span className="nw-card-tag">{post.category}</span>
                </div>
                <div className="nw-card-body">
                  <span className="nw-card-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href="#/contact" className="nw-card-link">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
