import React from 'react';
import './ContactCTA.css';

const STATS = [
  { value: '100%', label: 'Free Treatment', sub: 'Zero patient charges' },
  { value: '₹ 0', label: 'Fee Charged', sub: 'No cash counters' },
  { value: '24/7', label: 'Care Support', sub: 'Emergency slots' },
  { value: '10,000+', label: 'Sessions Done', sub: 'Lives touched with seva' },
];

const ContactCTA = () => {
  return (
    <section className="cta-full-section">
      {/* Background Image & Cinematic Overlay */}
      <div className="cta-bg-image" />
      <div className="cta-bg-overlay" />

      <div className="cta-full-container">
        <div className="cta-wide-card">
          {/* Top Seva Icon */}
          <div className="cta-top-icon-wrap">
            <div className="cta-top-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 14l-3.5 3.5a1.5 1.5 0 0 1-2-2L9 12" />
                <path d="M9 12l4.5-4.5a2 2 0 0 1 2.83 0L18 9.17a2 2 0 0 1 0 2.83L13 17" />
                <path d="M7 17l-3.5 3.5" />
                <path d="M13 7l4-4" />
                <path d="M17 3l4 4" />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h2 className="cta-wide-title">
            Give A Helping Hand For <br />
            <span className="cta-wide-highlight">Needy People</span>
          </h2>

          {/* Subtitle */}
          <p className="cta-wide-subtitle">
            Your support ensures that vital dialysis treatments remain accessible and completely free for those who need it most in Rajasthan. Join our seva mission as a volunteer or donor today.
          </p>

          {/* Action Buttons */}
          <div className="cta-wide-buttons">
            <a href="#/donate" className="cta-btn-donate-full">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
              </svg>
              <span>Donate Now (80G Tax-Free)</span>
            </a>

            <a href="#/contact" className="cta-btn-contact-full">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
              </svg>
              <span>Get In Touch / Contact</span>
            </a>
          </div>

          {/* Wide Stats Grid */}
          <div className="cta-wide-stats-grid">
            {STATS.map((stat, idx) => (
              <div className="cta-wide-stat-item" key={stat.label}>
                <span className="cta-wide-stat-value">{stat.value}</span>
                <span className="cta-wide-stat-label">{stat.label}</span>
                <span className="cta-wide-stat-sub">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;