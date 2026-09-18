import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import './GetInvolved.css';

const INVOLVEMENT_PILLARS = [
  {
    id: 'volunteer',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
        <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
      </svg>
    ),
    title: 'Volunteer Your Time',
    desc: 'Join our on-ground team of medical professionals, counselors, and community workers who dedicate their time to patient care.',
    actionLabel: 'Apply as Volunteer',
    actionHref: '#volunteer-form',
  },
  {
    id: 'csr',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
        <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20c0 6.627 5.373 12 12 12h424c6.627 0 12-5.373 12-12v-20c0-6.627-5.373-12-12-12zm-340-48H64v-64h32v64zm0-96H64v-64h32v64zm0-96H64v-64h32v64zm0-96H64V80h32v64zm96 288h-32v-64h32v64zm0-96h-32v-64h32v64zm0-96h-32v-64h32v64zm0-96h-32V80h32v64zm96 288h-32v-64h32v64zm0-96h-32v-64h32v64zm0-96h-32v-64h32v64zm0-96h-32V80h32v64zm96 288h-32v-64h32v64zm0-96h-32v-64h32v64zm0-96h-32v-64h32v64zm0-96h-32V80h32v64z"></path>
      </svg>
    ),
    title: 'Corporate CSR Grants',
    desc: 'Collaborate through your company’s CSR wing to fund dialysis machines, patient care wards, or community health camps with 80G benefits.',
    actionLabel: 'Explore CSR Program',
    actionHref: '#csr-section',
  },
  {
    id: 'camps',
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
    title: 'Organize Health Camps',
    desc: 'Host a free kidney screening and early detection awareness camp in your society, village, or workplace in Rajasthan.',
    actionLabel: 'Request a Camp',
    actionHref: '#/contact',
  },
  {
    id: 'donate',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
        <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
      </svg>
    ),
    title: 'Support Financially',
    desc: 'Every single contribution directly sponsors 100% free dialysis sessions and medicines for patients in critical need.',
    actionLabel: 'Make a Donation →',
    actionHref: '#/donate',
    highlight: true,
  },
];

const VOLUNTEER_ROLES = [
  {
    category: 'Medical & Clinical',
    roles: [
      { title: 'Visiting Nephrologists', time: '4-8 hrs / week', desc: 'Conduct patient evaluations and supervise treatment plans.' },
      { title: 'Dialysis Technicians', time: 'Flexible shifts', desc: 'Operate hemodialysis equipment and monitor patient vitals.' },
      { title: 'Staff Nurses & Paramedics', time: 'Flexible shifts', desc: 'Assist in patient setup, IV care, and emergency response.' },
    ],
  },
  {
    category: 'Support & Community Care',
    roles: [
      { title: 'Patient Counselors', time: 'Weekends / On-call', desc: 'Provide emotional encouragement and dietary guidance to dialysis families.' },
      { title: 'Front Desk & Patient Helpdesk', time: 'Morning / Evening', desc: 'Guide incoming patients and coordinate free registration files.' },
      { title: 'Awareness & Outreach Leads', time: 'Project-based', desc: 'Coordinate community screening camps and preventive health seminars.' },
    ],
  },
];

const CSR_BENEFITS = [
  {
    title: '100% 80G Tax Exemption',
    desc: 'All corporate donations and CSR grants qualify for tax deductions under Section 80G of the Indian Income Tax Act.',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
        <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256 462.8V51.7l175.9 73.3c-3.3 152.3-81.8 261.5-175.9 337.8z"></path>
      </svg>
    ),
  },
  {
    title: 'Transparent Impact Audits',
    desc: 'Complete quarterly utilization reports, patient counts, and audited financials provided to CSR committees.',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
        <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l31.79 31.79L231.07 298.45l-54.63-54.63c-6.25-6.25-16.38-6.25-22.63 0l-58.4 58.4c-6.25 6.25-6.25 16.38 0 22.63l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l35.77-35.77 54.63 54.63c6.25 6.25 16.38 6.25 22.63 0l150.31-150.31 31.79 31.79c15.11 15.12 40.97 4.41 40.97-16.97V112c0-8.84-7.16-16-16-16z"></path>
      </svg>
    ),
  },
  {
    title: 'Named Sponsorship Wings',
    desc: 'Recognition and plaque placement on sponsored hemodialysis machines or dialysis care suites.',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
      </svg>
    ),
  },
  {
    title: '0% Admin Cost Deduction',
    desc: '100% of your allocated CSR funds directly sponsor treatments, consumables, and machine maintenance.',
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  },
];

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    roleCategory: 'Medical & Clinical',
    availability: 'Weekends (Saturday / Sunday)',
    experience: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="gi-page">
      <PageBanner
        label="Get Involved"
        title="Join Our Mission of Healing & Seva"
        subtitle="Be a catalyst for change — explore volunteer opportunities, corporate CSR initiatives, and community drives at Rajasthan's first free dialysis centre."
      />

      {/* 4 Pillars of Involvement */}
      <section className="gi-pillars-section">
        <div className="gi-container">
          <div className="gi-section-header">
            <span className="gi-badge">Ways to Participate</span>
            <h2>How You Can Make an Impact</h2>
            <p>
              Whether through your professional skills, company CSR funds, or community organizing, there are many meaningful ways to save lives with us.
            </p>
          </div>

          <div className="gi-pillars-grid">
            {INVOLVEMENT_PILLARS.map((p) => (
              <div className={`gi-pillar-card ${p.highlight ? 'highlight' : ''}`} key={p.id}>
                <div className="gi-pillar-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href={p.actionHref} className={`gi-pillar-btn ${p.highlight ? 'highlight-btn' : ''}`}>
                  {p.actionLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Roles */}
      <section className="gi-roles-section" id="volunteer-form">
        <div className="gi-container">
          <div className="gi-section-header">
            <span className="gi-badge">Volunteer Program</span>
            <h2>Open Volunteer Opportunities</h2>
            <p>
              We welcome doctors, nurses, counselors, students, and citizens passionate about community healthcare.
            </p>
          </div>

          <div className="gi-roles-categories">
            {VOLUNTEER_ROLES.map((cat) => (
              <div className="gi-role-cat-block" key={cat.category}>
                <h3 className="gi-cat-title">{cat.category}</h3>
                <div className="gi-roles-grid">
                  {cat.roles.map((r) => (
                    <div className="gi-role-card" key={r.title}>
                      <div className="gi-role-card-top">
                        <h4>{r.title}</h4>
                        <span className="gi-time-badge">{r.time}</span>
                      </div>
                      <p>{r.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Volunteer Application Form Card */}
          <div className="gi-form-card">
            <div className="gi-form-header">
              <h3>Volunteer Application Form</h3>
              <p>Fill in your details and our team will get in touch with you within 48 hours.</p>
            </div>

            {submitted ? (
              <div className="gi-success-message">
                <div className="gi-success-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h4>Thank You, {formData.name || 'Volunteer'}!</h4>
                <p>
                  Your volunteer application has been received. Our community coordinator will connect with you on <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  className="gi-btn-reset"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      city: '',
                      roleCategory: 'Medical & Clinical',
                      availability: 'Weekends (Saturday / Sunday)',
                      experience: '',
                      message: '',
                    });
                  }}
                >
                  Submit Another Response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="gi-v-form">
                <div className="gi-form-row">
                  <div className="gi-field-group">
                    <label>Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="gi-field-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="rajesh@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="gi-form-row">
                  <div className="gi-field-group">
                    <label>Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      maxLength="10"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="gi-field-group">
                    <label>City &amp; State *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="e.g. Jaipur, Rajasthan"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="gi-form-row">
                  <div className="gi-field-group">
                    <label>Preferred Volunteer Area</label>
                    <select
                      name="roleCategory"
                      value={formData.roleCategory}
                      onChange={handleChange}
                    >
                      <option value="Medical & Clinical">Medical &amp; Clinical (Doctor / Technician / Nurse)</option>
                      <option value="Patient Counseling">Patient Counseling &amp; Mental Support</option>
                      <option value="Admin & Helpdesk">Front Desk &amp; Patient Administration</option>
                      <option value="Events & Awareness">Community Screening Camps &amp; Awareness</option>
                      <option value="General Volunteer">General Volunteer Support</option>
                    </select>
                  </div>

                  <div className="gi-field-group">
                    <label>Your Availability</label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                    >
                      <option value="Weekends (Saturday / Sunday)">Weekends (Saturday / Sunday)</option>
                      <option value="Weekdays Morning Shift">Weekdays Morning Shift (8 AM - 1 PM)</option>
                      <option value="Weekdays Evening Shift">Weekdays Evening Shift (1 PM - 6 PM)</option>
                      <option value="On-Call / As Needed">On-Call / Camp Based</option>
                      <option value="Full-time Seva">Full-time Seva</option>
                    </select>
                  </div>
                </div>

                <div className="gi-field-group">
                  <label>Background, Profession or Any Message</label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Tell us a little bit about yourself and why you'd like to join our mission..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="gi-submit-btn">
                  Submit Volunteer Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CSR Partnerships Section */}
      <section className="gi-csr-section" id="csr-section">
        <div className="gi-container">
          <div className="gi-csr-box">
            <div className="gi-csr-content">
              <span className="gi-badge-orange">Corporate Social Responsibility</span>
              <h2>Partner With Us Under CSR Provisions</h2>
              <p>
                Under Section 135 of the Companies Act and Section 80G, your company can create an enduring healthcare legacy by sponsoring hemodialysis machines, patient suites, or annual operational wings.
              </p>
              <div className="gi-csr-benefits-grid">
                {CSR_BENEFITS.map((b) => (
                  <div className="gi-csr-benefit" key={b.title}>
                    <span className="gi-csr-b-icon">{b.icon}</span>
                    <div>
                      <h4>{b.title}</h4>
                      <p>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="gi-csr-actions">
                <a href="#/contact" className="gi-csr-btn-primary">
                  Request Corporate CSR Proposal
                </a>
                <a href="#/donate" className="gi-csr-btn-secondary">
                  Make an Instant Donation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
