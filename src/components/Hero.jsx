import React, { useState } from 'react';
import './Hero.css';
import CountUp from './CountUp';
import upiQrImage from '../assets/upi-qr-scanner-clean.png';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('shrikanchantrust@hdfcbank');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="hero-section">
      {/* Background Image with Overlay */}
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-light">Rajasthan’s First</span>
            <span className="title-highlight">Free Dialysis</span>
            <span className="title-light">Centre</span>
          </h1>

          <p className="hero-subtitle">
            NO FEES. NO CASH COUNTER. JUST COMPASSION.
          </p>

          <p className="hero-description">
            Providing life-saving, high-quality dialysis to those who need it most, at no cost. Join us in our mission to save lives.
          </p>

          <div className="hero-buttons">
            <a href="#/donate" className="btn-primary">
              Donate Now
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </a>
            <a href="#/contact" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Floating Card */}
        <div className="hero-stats-card">
          <div className="hero-stats-row">
            <div className="stat-item">
              <div className="stat-icon-wrapper orange-bg">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM9 11.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"></path></svg>
              </div>
              <div className="stat-text">
                <h3 className="stat-number"><CountUp end={10000} suffix="+" /></h3>
                <p className="stat-label">SESSIONS CONDUCTED</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrapper blue-bg">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.2 76.4 56.5 98.9 99.9 8.5 16.5 22.2 29.5 39.4 39.4 9.1-8.5 14.8-20.6 14.8-33.9v-32c0-53-43-96-96-96zM153.1 274.6c-11.6-11.5-27.5-18.6-45.1-18.6H44c-53 0-96 43-96 96v32c0 13.3 5.7 25.4 14.8 33.9 17.2-9.9 30.9-22.9 39.4-39.4 22.5-43.4 58.6-77.7 98.9-99.9zM320 320c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm-104 32c-39.8 0-72 32.2-72 72v48c0 22.1 17.9 40 40 40h272c22.1 0 40-17.9 40-40v-48c0-39.8-32.2-72-72-72H216z"></path></svg>
              </div>
              <div className="stat-text">
                <h3 className="stat-number"><CountUp end={200} suffix="+" /></h3>
                <p className="stat-label">MONTHLY PATIENTS</p>
              </div>
            </div>
          </div>

          <div className="stat-divider"></div>

          {/* Balanced Scan & Donate Card */}
          <div className="hero-qr-box">
            <div className="hero-qr-top-badge">
              <span className="hero-qr-dot"></span> Scan &amp; Donate via UPI
            </div>

            <div className="hero-qr-body">
              <div 
                className="hero-qr-img-wrap" 
                onClick={() => setShowModal(true)}
                title="Click to view full size QR code"
              >
                <img
                  src={upiQrImage}
                  alt="Scan to donate via UPI - HDFC Bank SmartHub"
                  className="hero-qr-image"
                  loading="eager"
                />
                <div className="hero-qr-zoom-hint">
                  <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  Enlarge
                </div>
              </div>

              <div className="hero-qr-info">
                <p className="hero-qr-apps">PhonePe • GPay • Paytm</p>
                <div className="hero-upi-copy-line">
                  <span className="hero-upi-text">shrikanchantrust@hdfcbank</span>
                  <button 
                    type="button"
                    className={`hero-copy-btn ${copied ? 'copied' : ''}`}
                    onClick={handleCopy}
                  >
                    {copied ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enlarged QR Modal */}
      {showModal && (
        <div className="hero-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="hero-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="hero-modal-close" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <h3 className="hero-modal-title">Scan &amp; Donate via UPI</h3>
            <p className="hero-modal-sub">Official HDFC Bank SmartHub Trust QR Code</p>
            <div className="hero-modal-qr-frame">
              <img src={upiQrImage} alt="HDFC Bank SmartHub UPI QR Code" className="hero-modal-qr-img" />
            </div>
            <div className="hero-modal-id-row">
              <code>shrikanchantrust@hdfcbank</code>
              <button className="hero-modal-copy-btn" onClick={handleCopy}>
                {copied ? '✓ Copied' : 'Copy ID'}
              </button>
            </div>
            <a 
              href="upi://pay?pa=shrikanchantrust@hdfcbank&pn=Shri%20Krishan%20Kanchan%20Sewa%20Trust&cu=INR"
              className="hero-modal-pay-btn"
            >
              Open in UPI App
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;