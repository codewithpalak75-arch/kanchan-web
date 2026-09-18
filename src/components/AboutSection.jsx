import React from 'react';
import './AboutSection.css';
import CountUp from './CountUp';
import centreEntranceImg from '../assets/KAN2.jpeg';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Top Part: Founding & Image */}
        <div className="founding-content-wrapper">
          <div className="founding-text">
            <span className="section-label">OUR FOUNDING</span>
            <h2 className="section-title">
              Guided by Compassion,<br />
              Driven by Care.
            </h2>
            <p className="section-description">
              Established in 2021 under the spiritual guidance and vision of ensuring healthcare accessibility, Shri Kanchan Dialysis Centre was founded to serve those in critical need. We operate on the fundamental belief that life-saving treatments should never be a financial burden.
            </p>

            <div className="trust-badge">
              <span className="trust-icon">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>
              </span>
              <span className="trust-text">A Unit of Shri Krishan Kanchan Sewa Trust</span>
            </div>
          </div>

          <div className="founding-image-wrapper">
            <img
              src={centreEntranceImg}
              alt="Shri Kanchan Dialysis Centre Jaipur Entrance"
              className="founding-image"
            />
            <div className="floating-badge">
              <div className="badge-icon-wrapper">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
              </div>
              <div className="badge-text-content">
                <h4 className="badge-title">No Cash Counter</h4>
                <p className="badge-subtext">100% Free Treatment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Part: Impact Stats */}
        <div className="impact-section">
          <div className="impact-header">
            <h3 className="impact-title">Our Growing Impact</h3>
            <p className="impact-subtitle">
              Measuring our success not in revenue, but in lives touched and families supported through accessible renal care.
            </p>
          </div>

          <div className="impact-cards">
            {/* Card 1 */}
            <div className="impact-card">
              <div className="card-icon orange-text">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></svg>
              </div>
              <h3 className="card-number"><CountUp end={10000} suffix="+" /></h3>
              <p className="card-label">Dialysis Sessions Completed</p>
            </div>

            {/* Card 2 */}
            <div className="impact-card">
              <div className="card-icon blue-text">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>
              </div>
              <h3 className="card-number"><CountUp end={200} suffix="+" /></h3>
              <p className="card-label">Monthly Patients Served</p>
            </div>

            {/* Card 3 */}
            <div className="impact-card">
              <div className="card-icon green-text">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"></path></svg>
              </div>
              <h3 className="card-number"><CountUp end={3} suffix="+" /></h3>
              <p className="card-label">Years of Uninterrupted Service</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;