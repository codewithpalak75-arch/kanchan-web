import React from 'react';
import PageBanner from '../components/PageBanner';
import './About.css';
import centreEntranceImg from '../assets/KAN2.jpeg';

const trustees = [
  {
    name: 'Shri R. K. Sharma',
    role: 'Founder & Chairman',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg">
        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
      </svg>
    ),
  },
  {
    name: 'Smt. Kanchan Devi',
    role: 'Trustee, Patron',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg">
        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
      </svg>
    ),
  },
  {
    name: 'Dr. Anil Mathur',
    role: 'Chief Medical Advisor',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg">
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm0-320c-66.2 0-120 53.8-120 120s53.8 120 120 120 120-53.8 120-120-53.8-120-120-120z"></path>
      </svg>
    ),
  },
  {
    name: 'Shri Vikram Singh',
    role: 'Trustee, Operations',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg">
        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
      </svg>
    ),
  },
];

const milestones = [
  { year: '2021', text: 'Shri Kanchan Dialysis Centre founded under Shri Krishan Kanchan Sewa Trust.' },
  { year: '2022', text: 'Crossed 2,000 free dialysis sessions within the first year of operation.' },
  { year: '2023', text: 'Expanded capacity with modern hemodialysis machines and a dedicated care team.' },
  { year: '2024', text: 'Recognised as Rajasthan\'s first fully free dialysis centre for underprivileged patients.' },
  { year: '2025', text: 'Surpassed 10,000 sessions, serving over 200 patients every month.' },
];

const About = () => {
  return (
    <>
      <PageBanner
        label="About Us"
        title="Guided by Compassion, Driven by Care"
        subtitle="Learn about our journey, our mission, and the people behind Rajasthan's first free dialysis centre."
      />

      {/* Founding Story */}
      <section className="ab-story-section">
        <div className="ab-container ab-story-grid">
          <div className="ab-story-image-wrap">
            <img
              src={centreEntranceImg}
              alt="Shri Kanchan Dialysis Centre Building & Entrance"
              className="ab-story-image"
            />
            <div className="ab-story-badge">
              <span className="ab-badge-svg-wrap">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </span>
              <div>
                <h4>Since 2021</h4>
                <p>Serving with Seva</p>
              </div>
            </div>
          </div>
          <div className="ab-story-text">
            <span className="ab-section-label">Our Story</span>
            <h2 className="ab-section-title">A Trust Born From a Simple Belief</h2>
            <p>
              Shri Kanchan Dialysis Centre was established in 2021 as a unit of the
              Shri Krishan Kanchan Sewa Trust, founded on the principle that
              life-saving medical treatment should never depend on a patient's
              ability to pay. What began as a small initiative has grown into
              Rajasthan's first fully free dialysis centre.
            </p>
            <p>
              Every session, every machine, and every hour of care at our centre is
              made possible by the generosity of donors and volunteers who share our
              belief that health is a right, not a privilege.
            </p>
            <div className="ab-trust-tag">
              <span className="ab-check-svg">
                <svg stroke="currentColor" fill="none" strokeWidth="3" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              <span>A Unit of Shri Krishan Kanchan Sewa Trust</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="ab-mv-section">
        <div className="ab-container ab-mv-grid">
          <div className="ab-mv-card">
            <div className="ab-mv-icon orange">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm0-320c-66.2 0-120 53.8-120 120s53.8 120 120 120 120-53.8 120-120-53.8-120-120-120z"></path></svg>
            </div>
            <h3>Our Mission</h3>
            <p>
              To provide free, high-quality dialysis and renal care to every patient
              who needs it, regardless of financial background, with dignity and
              compassion at every step.
            </p>
          </div>
          <div className="ab-mv-card">
            <div className="ab-mv-icon blue">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 144 144 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>
            </div>
            <h3>Our Vision</h3>
            <p>
              A future where no kidney patient in Rajasthan is denied treatment due
              to cost — where world-class dialysis care is accessible to all,
              everywhere.
            </p>
          </div>
          <div className="ab-mv-card">
            <div className="ab-mv-icon green">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><path d="M256 0c-73.5 0-136.5 45.4-162.6 109.8C58.1 118.6 32 149.8 32 187c0 41.6 33.7 75.3 75.3 75.3H144v-32h-36.7C86.7 230.3 64 210 64 187c0-25.6 20.7-46.3 46.3-46.3H144v-32c0-58.7 47.6-106.3 106.3-106.3S356.6 50 356.6 108.7v32H384c25.6 0 46.3 20.7 46.3 46.3 0 23-22.7 43.3-43.3 43.3H352v32h34.7c41.6 0 75.3-33.7 75.3-75.3 0-37.2-26.1-68.4-61.4-77.2C374.5 45.4 311.5 0 256 0zM192 320h128l-16 96H208l-16-96zm-16-32l16 96h-64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-64l16-96H176z"></path></svg>
            </div>
            <h3>Our Values</h3>
            <p>
              Compassion, dignity, transparency, and service (seva) guide everything
              we do — from patient care to how we handle every donated rupee.
            </p>
          </div>
        </div>
      </section>

      {/* Trustees */}
      <section className="ab-team-section">
        <div className="ab-container">
          <div className="ab-header">
            <span className="ab-section-label center">Our People</span>
            <h2 className="ab-section-title center">Meet the Trustees</h2>
            <p className="ab-header-desc">
              A dedicated group of individuals who volunteer their time and
              expertise to keep our mission running.
            </p>
          </div>
          <div className="ab-team-grid">
            {trustees.map((person) => (
              <div className="ab-team-card" key={person.name}>
                <div className="ab-team-avatar">{person.icon}</div>
                <h4>{person.name}</h4>
                <p>{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="ab-timeline-section">
        <div className="ab-container">
          <div className="ab-header">
            <span className="ab-section-label center">Our Journey</span>
            <h2 className="ab-section-title center">Milestones Along the Way</h2>
          </div>
          <div className="ab-timeline">
            {milestones.map((m, i) => (
              <div className="ab-timeline-item" key={m.year}>
                <div className="ab-timeline-dot">{i + 1}</div>
                <div className="ab-timeline-content">
                  <span className="ab-timeline-year">{m.year}</span>
                  <p>{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ab-cta-section">
        <div className="ab-container ab-cta-inner">
          <h2>Be a Part of Our Story</h2>
          <p>Your support helps us keep dialysis free for those who need it most.</p>
          <div className="ab-cta-buttons">
            <a href="#/donate" className="ab-btn-primary">Donate Now</a>
            <a href="#/contact" className="ab-btn-secondary">Contact Us</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
