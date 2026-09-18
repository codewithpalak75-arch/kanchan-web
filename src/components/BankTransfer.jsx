import React, { useState } from 'react';
import './BankTransfer.css';
import upiQrImage from '../assets/upi-qr-scanner-clean.png';

const BANK_DETAILS = [
  {
    id: 'name',
    label: 'Beneficiary / Account Name',
    value: 'Shri Krishan Kanchan Sewa Trust',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
      </svg>
    ),
  },
  {
    id: 'bank',
    label: 'Bank & Branch',
    value: 'HDFC Bank Ltd, Jaipur, Rajasthan',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M496 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-384-64h64V192h-64v192zm128 0h64V192h-64v192zm128 0h64V192h-64v192zM256 0L0 128v32h512v-32L256 0z"></path>
      </svg>
    ),
  },
  {
    id: 'account',
    label: 'Account Number (Current A/C)',
    value: '50200058222032',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M528 288H48c-26.51 0-48 21.49-48 48v128c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V336c0-26.51-21.49-48-48-48zm-16 128H64v-64h448v64zM288 32c-35.35 0-64 28.65-64 64 0 14.07 4.58 27.08 12.3 37.64L38.48 253.49C22.61 262.8 32.55 288 51.05 288h473.9c18.5 0 28.44-25.2 12.57-34.51L339.7 133.64C347.42 123.08 352 110.07 352 96c0-35.35-28.65-64-64-64z"></path>
      </svg>
    ),
    highlight: true,
  },
  {
    id: 'ifsc',
    label: 'IFSC Code',
    value: 'HDFC0001377',
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
    highlight: true,
  },
];

const TRUST_METRICS = [
  {
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
        <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256 462.8V51.7l175.9 73.3c-3.3 152.3-81.8 261.5-175.9 337.8z"></path>
      </svg>
    ),
    title: '80G Tax Exemption',
    desc: 'Eligible for 50% deduction under Section 80G',
  },
  {
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
    title: '100% Direct Care',
    desc: '0% administrative deduction on donations',
  },
  {
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
        <path d="M464 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM128 120c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm256 216V224H128v112h256z"></path>
      </svg>
    ),
    title: 'Audited & Verified',
    desc: 'Reg. under Shri Krishan Kanchan Sewa Trust',
  },
  {
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
    title: 'Instant Tax Receipt',
    desc: 'Issued on WhatsApp & Email within 24 hrs',
  },
];

const BankTransfer = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, value) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(value).catch(() => {});
    }
    setCopiedId(id);
    setTimeout(() => setCopiedId((curr) => (curr === id ? null : curr)), 2000);
  };

  return (
    <section className="bt-premium-section" id="bank-transfer">
      {/* Ambient background glows */}
      <div className="bt-ambient-glow glow-1"></div>
      <div className="bt-ambient-glow glow-2"></div>

      <div className="bt-premium-container">
        {/* Header */}
        <div className="bt-header">
          <div className="bt-badge">
            <span className="bt-pulse-dot"></span>
            <span>Direct Trust Contribution</span>
          </div>
          <h2 className="bt-title">
            Direct Bank Transfer <span className="bt-title-highlight">&amp; Instant UPI</span>
          </h2>
          <p className="bt-subtitle">
            Support life-saving free dialysis treatments for underprivileged kidney patients.
            Transfer securely to our verified trust account with 100% transparency.
          </p>
        </div>

        {/* Dual-Pane Main Interactive Showcase Card */}
        <div className="bt-showcase-card">
          {/* Left Column: Bank Account Details */}
          <div className="bt-left-pane">
            <div className="bt-pane-header">
              <div className="bt-pane-title-wrap">
                <div className="bt-icon-bubble">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256 462.8V51.7l175.9 73.3c-3.3 152.3-81.8 261.5-175.9 337.8z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="bt-pane-title">Verified Bank Account Details</h3>
                  <p className="bt-pane-subtitle">NEFT / RTGS / IMPS / Net Banking</p>
                </div>
              </div>
              <span className="bt-verified-pill">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Verified HDFC A/C
              </span>
            </div>

            <div className="bt-details-list">
              {BANK_DETAILS.map((detail) => {
                const isCopied = copiedId === detail.id;
                return (
                  <div
                    key={detail.id}
                    className={`bt-detail-item ${detail.highlight ? 'bt-item-highlight' : ''}`}
                  >
                    <div className="bt-item-left">
                      <span className="bt-item-icon">{detail.icon}</span>
                      <div className="bt-item-info">
                        <span className="bt-item-label">{detail.label}</span>
                        <span className="bt-item-value">{detail.value}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className={`bt-copy-action-btn ${isCopied ? 'copied' : ''}`}
                      onClick={() => handleCopy(detail.id, detail.value)}
                      title={`Copy ${detail.label}`}
                    >
                      {isCopied ? (
                        <>
                          <svg className="bt-check-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                          </svg>
                          <span>{detail.highlight ? 'Copy' : 'Copy'}</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Note & Online Form CTA */}
            <div className="bt-left-footer">
              <div className="bt-footer-note">
                <span className="bt-info-icon">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </span>
                <span>Mention your <strong>Mobile / PAN</strong> in the transaction remarks for an instant 80G tax receipt.</span>
              </div>
              <a href="#/donate" className="bt-online-form-btn">
                Or Use Interactive Donation Form &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Scan & Pay via UPI */}
          <div className="bt-right-pane">
            <div className="bt-upi-card">
              <div className="bt-upi-header">
                <span className="bt-upi-badge">Instant 0-Fee Transfer</span>
                <h3 className="bt-upi-title">Scan &amp; Donate via UPI</h3>
                <p className="bt-upi-sub">Google Pay • PhonePe • Paytm • BHIM • Cred</p>
              </div>

              {/* QR Code Container with Scanning Frame Effect */}
              <div className="bt-qr-scanner-frame">
                <div className="bt-scanner-corners">
                  <span className="corner top-left"></span>
                  <span className="corner top-right"></span>
                  <span className="corner bottom-left"></span>
                  <span className="corner bottom-right"></span>
                </div>
                <img
                  src={upiQrImage}
                  alt="Scan & Donate via HDFC Bank UPI - Shri Krishan Kanchan Sewa Trust"
                  className="bt-qr-code-img"
                />
              </div>

              {/* UPI ID Row */}
              <div className="bt-upi-id-box">
                <div className="bt-upi-id-left">
                  <span className="bt-upi-id-label">Official Trust UPI ID:</span>
                  <strong className="bt-upi-id-code">shrikanchantrust@hdfcbank</strong>
                </div>
                <button
                  type="button"
                  className={`bt-upi-copy-btn ${copiedId === 'upi' ? 'copied' : ''}`}
                  onClick={() => handleCopy('upi', 'shrikanchantrust@hdfcbank')}
                >
                  {copiedId === 'upi' ? (
                    <>
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: '4px' }}><path d="M20 6L9 17l-5-5"/></svg>
                      Copied
                    </>
                  ) : 'Copy ID'}
                </button>
              </div>

              {/* Mobile Quick Pay Action */}
              <a
                href="upi://pay?pa=shrikanchantrust@hdfcbank&pn=Shri%20Krishan%20Kanchan%20Sewa%20Trust&cu=INR"
                className="bt-mobile-upi-btn"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                </svg>
                <span>Tap to Pay with any UPI App</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Trust Metrics Row */}
        <div className="bt-trust-metrics-grid">
          {TRUST_METRICS.map((m) => (
            <div className="bt-metric-card" key={m.title}>
              <span className="bt-metric-icon">{m.icon}</span>
              <div className="bt-metric-text">
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BankTransfer;