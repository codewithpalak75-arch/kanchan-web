import React from 'react';
import PageBanner from '../components/PageBanner';
import './Services.css';
import dialysisCareGuideImg from '../assets/KAN10.jpeg';

const services = [
  {
    title: 'Free Hemodialysis',
    desc: 'Complete hemodialysis sessions on modern machines at absolutely no cost to the patient or their family.',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.2 76.4 56.5 98.9 99.9 8.5 16.5 22.2 29.5 39.4 39.4 9.1-8.5 14.8-20.6 14.8-33.9v-32c0-53-43-96-96-96zM320 320c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z"></path></svg>
    ),
  },
  {
    title: 'Pre-Dialysis Consultation',
    desc: 'Nephrology consultations to assess patient condition, kidney function, and treatment planning before dialysis begins.',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><path d="M256 0c-53 0-96 43-96 96 0 41.6 26.5 77 63.6 90.5C158.6 200.5 96 262.5 96 336v16c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16v-16c0-73.5-62.6-135.5-127.6-149.5C325.5 173 352 137.6 352 96c0-53-43-96-96-96z"></path></svg>
    ),
  },
  {
    title: 'Lab Investigations',
    desc: 'Regular blood work and diagnostic tests to monitor kidney function, electrolyte balance, and overall health.',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><path d="M437.2 403.5L340 215V64h4c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H168c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h4v151L74.8 403.5C56.1 440.1 82.6 480 123.8 480h264.4c41.2 0 67.7-39.9 49-76.5z"></path></svg>
    ),
  },
  {
    title: 'Emergency Dialysis',
    desc: 'Priority slots reserved for emergency renal cases requiring immediate dialysis support, day or night.',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0 0 114.6 0 256s114.6 256 256 256zm-24-392c0-13.3 10.7-24 24-24s24 10.7 24 24v128h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H256c-13.3 0-24-10.7-24-24V120z"></path></svg>
    ),
  },
  {
    title: 'Nutrition Counseling',
    desc: 'Dietary guidance tailored for dialysis patients to help manage fluid intake, potassium, and phosphorus levels.',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><path d="M255.1 331.4c33.7 0 61-6 61-40.6 0-27-15.5-33.5-40.7-36.8-30.2-3.9-40.5-6.9-40.5-15.6 0-8.4 12.6-11.5 25.9-11.5 15.6 0 27.9 3.8 30.8 15.7l43.5-9c-3.8-19.9-15.5-31.6-45.4-38.1v-24.9h-38.3v24.9c-25.3 5.5-40.7 20-40.7 37.8 0 26.4 22.5 33.5 42.9 36.3 30.6 4.1 38.2 8.2 38.2 17.1 0 9.4-11.4 12.2-25.9 12.2-16.1 0-30.4-5.5-33.2-19.6l-43.9 8.4c4.4 20.9 17.7 33.9 43.4 39.8v25.9h38.3v-24.9c0-.1.3-.1.7-.1z"></path></svg>
    ),
  },
  {
    title: 'Ambulance Support',
    desc: 'Coordinated transport assistance for patients who face mobility or accessibility challenges reaching the centre.',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm16-208H416v-96h44.1l67.9 96H496z"></path></svg>
    ),
  },
];

const steps = [
  { title: 'Registration', desc: 'Visit the centre or call our helpline to register with basic medical history and ID proof.' },
  { title: 'Medical Screening', desc: 'Our nephrology team reviews kidney function and overall health to plan the right treatment.' },
  { title: 'Free Dialysis Session', desc: 'Patients receive scheduled dialysis sessions on modern machines, completely free of cost.' },
  { title: 'Ongoing Care', desc: 'Regular monitoring, nutrition guidance, and follow-ups to support long-term wellbeing.' },
];

const Services = () => {
  return (
    <>
      <PageBanner
        label="Our Services"
        title="Comprehensive Renal Care, Completely Free"
        subtitle="From consultation to dialysis and follow-up care — every service at Shri Kanchan is offered without a single rupee changing hands."
      />

      {/* Services Grid */}
      <section className="sv-section">
        <div className="sv-container">
          <div className="sv-header">
            <span className="sv-label">What We Offer</span>
            <h2>Our Core Services</h2>
          </div>
          <div className="sv-grid">
            {services.map((s) => (
              <div className="sv-card" key={s.title}>
                <div className="sv-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="sv-steps-section">
        <div className="sv-container">
          <div className="sv-header">
            <span className="sv-label">The Process</span>
            <h2>How Patients Get Started</h2>
          </div>
          <div className="sv-steps-grid">
            {steps.map((step, i) => (
              <div className="sv-step-card" key={step.title}>
                <div className="sv-step-number">{String(i + 1).padStart(2, '0')}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                {i < steps.length - 1 && <div className="sv-step-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility highlight */}
      <section className="sv-facility-section">
        <div className="sv-container sv-facility-grid">
          <div className="sv-facility-image-wrap">
            <img
              src={dialysisCareGuideImg}
              alt="Shri Kanchan Dialysis Patient Care Guide & Modern Facility"
              className="sv-facility-image"
            />
          </div>
          <div className="sv-facility-text">
            <span className="sv-label">Our Facility</span>
            <h2>Equipped for Safe, Reliable Treatment</h2>
            <ul className="sv-facility-list">
              <li>
                <svg className="sv-check-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                <span>Modern hemodialysis machines with RO water purification</span>
              </li>
              <li>
                <svg className="sv-check-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                <span>Trained nephrology nurses and technicians on every shift</span>
              </li>
              <li>
                <svg className="sv-check-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                <span>Sanitised, comfortable treatment beds and recliners</span>
              </li>
              <li>
                <svg className="sv-check-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                <span>On-site emergency response protocols</span>
              </li>
              <li>
                <svg className="sv-check-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                <span>Regular equipment maintenance and calibration</span>
              </li>
            </ul>
            <a href="#/contact" className="sv-cta-link">
              Book a Consultation
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
