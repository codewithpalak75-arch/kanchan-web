import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import './Contact.css';

const infoCards = [
  {
    title: 'Visit Us',
    lines: ['29, Janpath, Near Dana Pani Restaurant', 'Shyam Nagar, Sodala, Jaipur, Rajasthan 302019'],
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
    ),
  },
  {
    title: 'Call Us',
    lines: ['+91 80057 70633', '+91 80055 66014'],
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
    ),
  },
  {
    title: 'Email Us',
    lines: ['kanchandialysis@gmail.com'],
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
    ),
  },
  {
    title: 'Working Hours',
    lines: ['Monday – Saturday', '7:00 AM – 7:00 PM'],
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm94.3 337.7c-4.3 6.9-13.5 9-20.4 4.7l-63.5-38.9c-5.9-3.6-9.4-10-9.4-16.9V116c0-8.2 6.8-15 15-15h.6c8.2 0 15 6.8 15 15v170.9l55.9 34.2c7 4.4 9.1 13.6 4.8 20.6z"></path></svg>
    ),
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageBanner
        label="Contact Us"
        title="We're Here to Help"
        subtitle="Have a question about treatment, donations, or volunteering? Reach out and our team will respond as soon as possible."
      />

      {/* Info cards */}
      <section className="ct-info-section">
        <div className="ct-container">
          <div className="ct-info-grid">
            {infoCards.map((card) => (
              <div className="ct-info-card" key={card.title}>
                <div className="ct-info-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                {card.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + map */}
      <section className="ct-main-section">
        <div className="ct-container ct-main-grid">
          <div className="ct-form-wrap">
            <span className="ct-label">Send a Message</span>
            <h2>Get in Touch</h2>
            <p className="ct-form-intro">
              Fill out the form below and our team will get back to you within 24-48
              hours.
            </p>

            {submitted ? (
              <div className="ct-success">
                <span className="ct-success-icon-wrap">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
                <div>
                  <h4>Thank you for reaching out!</h4>
                  <p>We've received your message and will respond shortly.</p>
                </div>
              </div>
            ) : (
              <form className="ct-form" onSubmit={handleSubmit}>
                <div className="ct-form-row">
                  <div className="ct-field">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" />
                  </div>
                  <div className="ct-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div className="ct-field">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" />
                </div>
                <div className="ct-field">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="How can we help?" />
                </div>
                <div className="ct-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} placeholder="Write your message here..."></textarea>
                </div>
                <button type="submit" className="ct-submit-btn">Send Message</button>
              </form>
            )}
          </div>

          <div className="ct-map-wrap">
            <iframe
              title="Shri Kanchan Dialysis Centre Location"
              className="ct-map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=75.7873%2C26.8850%2C75.8473%2C26.9350&layer=mapnik"
              loading="lazy"
            ></iframe>
            <div className="ct-map-card">
              <h4>Shri Kanchan Dialysis Centre</h4>
              <p>Near Bus Stand, Jaipur, Rajasthan, India</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
