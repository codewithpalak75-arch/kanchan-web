import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      {/* Background Heart Shape */}
      <div className="bg-heart-shape">
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>

      <div className="why-container">
        <div className="why-header">
          <h2 className="why-title">Why Choose Us</h2>
          <p className="why-subtitle">
            Dedicated to providing exceptional care with dignity, utilizing state-of-the-art facilities to ensure the best possible outcomes for every patient.
          </p>
        </div>

        <div className="why-features-grid">
          {/* Feature 1 */}
          <div className="feature-card feature-left">
            <div className="feature-icon">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
            </div>
            <h3 className="feature-title">Free Access</h3>
            <p className="feature-desc">
              Providing free treatments to those in need, ensuring financial barriers never stand in the way of essential, life-saving medical care.
            </p>
          </div>

          {/* Feature 2 (Center, pushed down) */}
          <div className="feature-card feature-center">
            <div className="feature-icon">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.2 76.4 56.5 98.9 99.9 8.5 16.5 22.2 29.5 39.4 39.4 9.1-8.5 14.8-20.6 14.8-33.9v-32c0-53-43-96-96-96zM153.1 274.6c-11.6-11.5-27.5-18.6-45.1-18.6H44c-53 0-96 43-96 96v32c0 13.3 5.7 25.4 14.8 33.9 17.2-9.9 30.9-22.9 39.4-39.4 22.5-43.4 58.6-77.7 98.9-99.9zM320 320c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm-104 32c-39.8 0-72 32.2-72 72v48c0 22.1 17.9 40 40 40h272c22.1 0 40-17.9 40-40v-48c0-39.8-32.2-72-72-72H216z"></path></svg>
            </div>
            <h3 className="feature-title">Dignified Care</h3>
            <p className="feature-desc">
              Fostering a compassionate environment where every patient is treated with utmost respect, empathy, and personalized attention throughout their journey.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card feature-right">
            <div className="feature-icon">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31.84 2.41 2 2.83V21h2v-1.17c1.16-.42 2-1.52 2-2.83 0-1.66-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12.43-8.49l-2.06-2.06C17.76 7.07 18 6.55 18 6V4h2V2H4v2h2v2c0 .55.24 1.07.63 1.45l-2.06 2.06c-.39.38-.57.91-.57 1.49v2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2c0-.58-.18-1.11-.57-1.49l-2.06-2.06A1.977 1.977 0 0 0 8 6V4h8v2c0 .55-.24 1.07-.63 1.45l-2.06 2.06c-.39.38-.57.91-.57 1.49v2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2c0-.58-.18-1.11-.57-1.49zM12 11H8V9l2-2 2 2v2zm6 0h-4V9l2-2 2 2v2z"></path></svg>
            </div>
            <h3 className="feature-title">Modern Technology</h3>
            <p className="feature-desc">
              Equipped with modern equipment and advanced hemodialysis machines to deliver safe, efficient, and high-quality clinical outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
