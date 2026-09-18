import React, { useState, useMemo } from 'react';
import './DonateSection.css';
import upiQrImage from '../assets/upi-qr-scanner-clean.png';

const DONATION_CATEGORIES = [
  {
    id: 'dialysis',
    title: 'Free Dialysis Session',
    desc: 'Sponsor life-saving hemodialysis for underprivileged patients',
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
  },
  {
    id: 'medicines',
    title: 'Medicines & Injections',
    desc: 'Provide essential erythropoietin, iron & supportive drugs',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg">
        <path d="M437.2 403.5L340 215V64h4c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H168c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h4v151L74.8 403.5C56.1 440.1 82.6 480 123.8 480h264.4c41.2 0 67.7-39.9 49-76.5z"></path>
      </svg>
    ),
  },
  {
    id: 'consumables',
    title: 'Dialyzer & Bloodlines',
    desc: 'Fund sterile dialyzers, filters, tubing and safety kits',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg">
        <path d="M256 0c-73.5 0-136.5 45.4-162.6 109.8C58.1 118.6 32 149.8 32 187c0 41.6 33.7 75.3 75.3 75.3H144v-32h-36.7C86.7 230.3 64 210 64 187c0-25.6 20.7-46.3 46.3-46.3H144v-32c0-58.7 47.6-106.3 106.3-106.3S356.6 50 356.6 108.7v32H384c25.6 0 46.3 20.7 46.3 46.3 0 23-22.7 43.3-43.3 43.3H352v32h34.7c41.6 0 75.3-33.7 75.3-75.3 0-37.2-26.1-68.4-61.4-77.2C374.5 45.4 311.5 0 256 0z"></path>
      </svg>
    ),
  },
  {
    id: 'memory',
    title: 'Donate in Honor / Memory',
    desc: 'Dedicate healing in the cherished memory of a loved one',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg">
        <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
      </svg>
    ),
  },
  {
    id: 'occasion',
    title: 'Special Occasion',
    desc: 'Celebrate your Birthday, Anniversary, or Festivities with Seva',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg">
        <path d="M464 144h-54.4c21.8-25.9 30.4-60.6 22.4-94.4C421 7.2 384.8-8.9 344.3 3.6 295.3 18.7 264.4 78 256 108.6 247.6 78 216.7 18.7 167.7 3.6 127.2-8.9 91 7.2 80 49.6c-8 33.8.6 68.5 22.4 94.4H48c-26.5 0-48 21.5-48 48v64c0 8.8 7.2 16 16 16h16v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272h16c8.8 0 16-7.2 16-16v-64c0-26.5-21.5-48-48-48z"></path>
      </svg>
    ),
  },
  {
    id: 'csr',
    title: 'Sponsor Machine / CSR',
    desc: 'Corporate CSR partnership for new hemodialysis infrastructure',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg">
        <path d="M480 32H32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-48 384H80V96h352v320z"></path>
      </svg>
    ),
  },
  {
    id: 'bank',
    title: 'Wire / Cheque / DD',
    desc: 'Direct Bank NEFT / RTGS transfer & Cheque payment details',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg">
        <path d="M528 288H48c-26.51 0-48 21.49-48 48v128c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V336c0-26.51-21.49-48-48-48zm-16 128H64v-64h448v64zM288 32c-35.35 0-64 28.65-64 64 0 14.07 4.58 27.08 12.3 37.64L38.48 253.49C22.61 262.8 32.55 288 51.05 288h473.9c18.5 0 28.44-25.2 12.57-34.51L339.7 133.64C347.42 123.08 352 110.07 352 96c0-35.35-28.65-64-64-64z"></path>
      </svg>
    ),
  },
];

const PRESET_AMOUNTS = [
  4500, 9000, 13500, 18000, 24000,
  30000, 37500, 45000, 60000, 75000,
  90000, 105000, 150000, 201000, 500000,
];

const BANK_INFO = [
  { label: 'Beneficiary Name', value: 'Shri Krishan Kanchan Sewa Trust' },
  { label: 'Bank Name', value: 'HDFC Bank Ltd' },
  { label: 'Account Number', value: '50200058222032', isAccount: true },
  { label: 'IFSC Code', value: 'HDFC0001377', isIfsc: true },
  { label: 'Account Type', value: 'Current Account' },
  { label: 'Branch', value: 'Jaipur, Rajasthan' },
];

const formatINR = (val) => {
  if (!val || isNaN(val)) return '0';
  return Number(val).toLocaleString('en-IN');
};

const DonateSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('dialysis');
  const [amount, setAmount] = useState(150000);
  const [customInput, setCustomInput] = useState('150000');
  const [citizenship, setCitizenship] = useState('indian'); // 'indian' | 'foreign'

  // Personal Info Form State
  const [formData, setFormData] = useState({
    title: 'Mr',
    fullName: '',
    email: '',
    dob: '',
    countryCode: '+91',
    mobile: '',
    altMobile: '',
    request80G: true,
    panNumber: '',
    address: '',
    city: '',
    pincode: '',
    dedicationNote: '',
  });

  // Math Captcha State
  const [captcha, setCaptcha] = useState(() => {
    const n1 = Math.floor(Math.random() * 8) + 2;
    const n2 = Math.floor(Math.random() * 8) + 2;
    return { n1, n2, answer: n1 + n2 };
  });
  const [captchaInput, setCaptchaInput] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);

  // Modal / Success State
  const [showModal, setShowModal] = useState(false);
  const [paymentTab, setPaymentTab] = useState('upi'); // 'upi' | 'bank' | 'receipt'
  const [copiedKey, setCopiedKey] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const refreshCaptcha = () => {
    const n1 = Math.floor(Math.random() * 8) + 2;
    const n2 = Math.floor(Math.random() * 8) + 2;
    setCaptcha({ n1, n2, answer: n1 + n2 });
    setCaptchaInput('');
  };

  const handleCategorySelect = (id) => {
    setSelectedCategory(id);
  };

  const handlePresetSelect = (val) => {
    setAmount(val);
    setCustomInput(val.toString());
  };

  const handleCustomAmountChange = (e) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    setCustomInput(raw);
    const num = parseInt(raw, 10);
    setAmount(isNaN(num) ? 0 : num);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCopy = (key, text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  // Calculations for dynamic impact
  const impactStats = useMemo(() => {
    const safeAmount = amount > 0 ? amount : 0;
    // Estimated cost per complete free dialysis session is ₹2,000
    const sessions = Math.max(1, Math.floor(safeAmount / 2000));
    const patientsSupported = Math.max(1, Math.floor(sessions / 3));
    const mealsOrCare = sessions * 2;
    return {
      sessions,
      patientsSupported,
      mealsOrCare,
    };
  }, [amount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.email.trim()) errors.email = 'Valid Email is required';
    if (!formData.mobile.trim() || formData.mobile.length < 10) {
      errors.mobile = '10-digit mobile number is required';
    }
    if (formData.request80G && !formData.panNumber.trim()) {
      errors.panNumber = 'PAN Card is required for 80G Tax Exemption';
    }
    if (!agreeTerms) {
      errors.terms = 'Please accept Terms & Conditions';
    }
    if (parseInt(captchaInput, 10) !== captcha.answer) {
      errors.captcha = 'Incorrect security answer. Please try again.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      // scroll to first error
      const firstErr = document.querySelector('.dn-error-msg');
      if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setFormErrors({});
    setShowModal(true);
  };

  return (
    <div className="dn-page-wrapper">
      {/* Top Header */}
      <div className="dn-header-container">
        <div className="dn-breadcrumbs">
          <a href="#/">← Home</a>
          <span className="dn-crumb-sep">/</span>
          <span className="dn-crumb-active">Donate</span>
        </div>
        <h1 className="dn-main-title">Make a Difference Today</h1>
        <p className="dn-main-subtitle">
          Your donation helps provide free life-saving dialysis, medicines, and hope to underprivileged patients in Rajasthan.
        </p>
      </div>

      {/* Main 2-Column Donation Grid */}
      <div className="dn-layout-container">
        {/* Left Main Form Column */}
        <div className="dn-form-column">
          {/* Card 1: How Would You Like to Donate? */}
          <div className="dn-card">
            <div className="dn-card-header">
              <div className="dn-card-icon-pill">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                </svg>
              </div>
              <h2 className="dn-card-title">How Would You Like to Donate?</h2>
            </div>

            <div className="dn-categories-grid">
              {DONATION_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    className={`dn-category-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => handleCategorySelect(cat.id)}
                  >
                    <div className="dn-cat-icon">{cat.icon}</div>
                    <div className="dn-cat-text">
                      <span className="dn-cat-title">{cat.title}</span>
                    </div>
                    {isSelected && (
                      <span className="dn-cat-check">
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card 2: Select Donation Amount */}
          <div className="dn-card">
            <div className="dn-card-header-flex">
              <div className="dn-card-header-left">
                <h2 className="dn-card-title">Select Donation Amount</h2>
              </div>
              <div className="dn-impact-badge">
                <span className="dn-impact-badge-dot"></span>
                <strong>{impactStats.sessions}</strong> dialysis sessions will be sponsored
              </div>
            </div>

            <div className="dn-amounts-grid">
              {PRESET_AMOUNTS.map((val) => {
                const isSelected = amount === val;
                return (
                  <button
                    key={val}
                    type="button"
                    className={`dn-amount-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => handlePresetSelect(val)}
                  >
                    <span>₹ {formatINR(val)}</span>
                    {isSelected && (
                      <span className="dn-amount-check">
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="dn-custom-amount-box">
              <label htmlFor="custom-amount-input" className="dn-custom-label">
                Or enter custom amount
              </label>
              <div className="dn-custom-input-wrap">
                <span className="dn-currency-symbol">₹</span>
                <input
                  id="custom-amount-input"
                  type="text"
                  className="dn-custom-input"
                  placeholder="Enter amount"
                  value={customInput ? formatINR(customInput) : ''}
                  onChange={handleCustomAmountChange}
                />
              </div>
            </div>
          </div>

          {/* Card 3: Personal Information */}
          <div className="dn-card">
            <div className="dn-card-header">
              <div className="dn-card-icon-pill">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                </svg>
              </div>
              <h2 className="dn-card-title">Personal Information</h2>
            </div>

            <form onSubmit={handleSubmit} className="dn-personal-form">
              {/* Row 1: Title + Full Name */}
              <div className="dn-form-row dn-row-title-name">
                <div className="dn-input-group dn-group-title">
                  <label>Title</label>
                  <div className="dn-field-icon-wrap">
                    <span className="dn-field-icon">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                      </svg>
                    </span>
                    <select
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="dn-select"
                    >
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Ms">Ms</option>
                      <option value="Dr">Dr</option>
                      <option value="Shri">Shri</option>
                      <option value="Smt">Smt</option>
                    </select>
                  </div>
                </div>

                <div className="dn-input-group dn-group-name">
                  <label>Full Name *</label>
                  <div className="dn-field-icon-wrap">
                    <span className="dn-field-icon">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`dn-input ${formErrors.fullName ? 'error' : ''}`}
                    />
                  </div>
                  {formErrors.fullName && <span className="dn-error-msg">{formErrors.fullName}</span>}
                </div>
              </div>

              {/* Row 2: Email + Date of Birth */}
              <div className="dn-form-row dn-row-two-col">
                <div className="dn-input-group">
                  <label>Email *</label>
                  <div className="dn-field-icon-wrap">
                    <span className="dn-field-icon">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                      </svg>
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`dn-input ${formErrors.email ? 'error' : ''}`}
                    />
                  </div>
                  {formErrors.email && <span className="dn-error-msg">{formErrors.email}</span>}
                </div>

                <div className="dn-input-group">
                  <label>Date of Birth</label>
                  <div className="dn-field-icon-wrap">
                    <span className="dn-field-icon">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      className="dn-input"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Mobile Number + Alternate Mobile */}
              <div className="dn-form-row dn-row-two-col">
                <div className="dn-input-group">
                  <label>Mobile Number *</label>
                  <div className="dn-mobile-combine">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="dn-code-select"
                    >
                      <option value="+91">+91 (IN)</option>
                      <option value="+1">+1 (US)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+971">+971 (UAE)</option>
                    </select>
                    <div className="dn-field-icon-wrap flex-1">
                      <span className="dn-field-icon">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                        </svg>
                      </span>
                      <input
                        type="tel"
                        name="mobile"
                        maxLength="10"
                        placeholder="10-digit number"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className={`dn-input ${formErrors.mobile ? 'error' : ''}`}
                      />
                    </div>
                  </div>
                  {formErrors.mobile && <span className="dn-error-msg">{formErrors.mobile}</span>}
                </div>

                <div className="dn-input-group">
                  <label>Alternate Mobile (Optional)</label>
                  <div className="dn-field-icon-wrap">
                    <span className="dn-field-icon">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                      </svg>
                    </span>
                    <input
                      type="tel"
                      name="altMobile"
                      placeholder="Alternate number"
                      value={formData.altMobile}
                      onChange={handleInputChange}
                      className="dn-input"
                    />
                  </div>
                </div>
              </div>

              {/* Dedication Note if Occasion / Memory */}
              {(selectedCategory === 'memory' || selectedCategory === 'occasion') && (
                <div className="dn-input-group dn-mt-16">
                  <label>
                    {selectedCategory === 'memory' ? 'In Memory of (Name)' : 'Special Occasion Note / Name'}
                  </label>
                  <input
                    type="text"
                    name="dedicationNote"
                    placeholder="e.g. In loving memory of Late Shri Ram Sharma"
                    value={formData.dedicationNote}
                    onChange={handleInputChange}
                    className="dn-input"
                  />
                </div>
              )}

              {/* 80G Tax Exemption Certificate Option */}
              <div className="dn-tax-checkbox-card">
                <label className="dn-checkbox-label">
                  <input
                    type="checkbox"
                    name="request80G"
                    checked={formData.request80G}
                    onChange={handleInputChange}
                    className="dn-checkbox"
                  />
                  <div className="dn-checkbox-text">
                    <div className="dn-tax-title">
                      <strong>Request 80G Tax Exemption Certificate</strong>
                      <span className="dn-badge-in">IN</span>
                    </div>
                    <span className="dn-tax-sub">
                      Available for Indian donors - helps you save tax on your income!
                    </span>
                  </div>
                </label>

                {formData.request80G && (
                  <div className="dn-pan-expand-box">
                    <div className="dn-form-row dn-row-two-col">
                      <div className="dn-input-group">
                        <label>PAN Card Number *</label>
                        <input
                          type="text"
                          name="panNumber"
                          maxLength="10"
                          placeholder="ABCDE1234F"
                          value={formData.panNumber.toUpperCase()}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, panNumber: e.target.value.toUpperCase() }))
                          }
                          className={`dn-input dn-pan-input ${formErrors.panNumber ? 'error' : ''}`}
                        />
                        {formErrors.panNumber && (
                          <span className="dn-error-msg">{formErrors.panNumber}</span>
                        )}
                      </div>

                      <div className="dn-input-group">
                        <label>City / State</label>
                        <input
                          type="text"
                          name="city"
                          placeholder="e.g. Jaipur, Rajasthan"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="dn-input"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Right Sticky Sidebar: Donation Summary & Impact */}
        <div className="dn-sidebar-column">
          <div className="dn-sidebar-card">
            <h3 className="dn-summary-title">Donation Summary</h3>

            <div className="dn-summary-row">
              <span>Donation Amount</span>
              <span className="dn-summary-val">₹ {formatINR(amount)}</span>
            </div>

            <div className="dn-summary-total-row">
              <span>Total Amount</span>
              <span className="dn-total-highlight">₹ {formatINR(amount)}</span>
            </div>

            {/* Your Impact Box */}
            <div className="dn-impact-box">
              <h4 className="dn-impact-title">Your Impact</h4>
              <div className="dn-impact-stat-row">
                <span>Dialysis Sessions:</span>
                <strong>{impactStats.sessions}</strong>
              </div>
              <div className="dn-impact-stat-row">
                <span>Patients Supported:</span>
                <strong>{impactStats.patientsSupported}+</strong>
              </div>
              <div className="dn-impact-stat-row">
                <span>Cost Per Session:</span>
                <strong className="dn-free-badge">₹ 2,000 (100% Free)</strong>
              </div>
            </div>

            {/* Citizenship Selector */}
            <div className="dn-citizenship-section">
              <label className="dn-field-label">Citizenship</label>
              <div className="dn-toggle-group">
                <button
                  type="button"
                  className={`dn-toggle-btn ${citizenship === 'indian' ? 'active' : ''}`}
                  onClick={() => setCitizenship('indian')}
                >
                  Indian Citizen
                </button>
                <button
                  type="button"
                  className={`dn-toggle-btn ${citizenship === 'foreign' ? 'active' : ''}`}
                  onClick={() => setCitizenship('foreign')}
                >
                  Foreign National
                </button>
              </div>
            </div>

            {/* Security Check Captcha */}
            <div className="dn-security-box">
              <div className="dn-security-header">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
                </svg>
                <span>Security Check</span>
              </div>
              <div className="dn-captcha-row">
                <span className="dn-captcha-question">
                  Solve: <strong>{captcha.n1} + {captcha.n2} =</strong>
                </span>
                <input
                  type="number"
                  placeholder="?"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  className={`dn-captcha-input ${formErrors.captcha ? 'error' : ''}`}
                />
                <button
                  type="button"
                  className="dn-captcha-refresh"
                  title="Refresh captcha"
                  onClick={refreshCaptcha}
                >
                  <svg stroke="currentColor" fill="none" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <polyline points="1 20 1 14 7 14"></polyline>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                  </svg>
                </button>
              </div>
              {formErrors.captcha && (
                <span className="dn-error-msg dn-error-center">{formErrors.captcha}</span>
              )}
            </div>

            {/* Terms Agreement */}
            <div className="dn-terms-row">
              <label className="dn-terms-label">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="dn-terms-checkbox"
                />
                <span>
                  I agree to the <a href="#/contact">Terms &amp; Conditions</a> and <a href="#/contact">Privacy Policy</a>
                </span>
              </label>
              {formErrors.terms && (
                <span className="dn-error-msg">{formErrors.terms}</span>
              )}
            </div>

            {/* Big Submit Button */}
            <button
              type="button"
              className="dn-donate-cta-btn"
              onClick={handleSubmit}
            >
              Donate ₹ {formatINR(amount)}
            </button>

            {/* Trust Badges */}
            <div className="dn-trust-badges">
              <div className="dn-trust-item">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256 462.8V51.7l175.9 73.3c-3.3 152.3-81.8 261.5-175.9 337.8z"></path>
                </svg>
                <span>100% Tax Exemption 80G</span>
              </div>
              <div className="dn-trust-item">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
                </svg>
                <span>Safe &amp; Verified Trust</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment / Receipt Modal */}
      {showModal && (
        <div className="dn-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="dn-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="dn-modal-close"
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>

            <div className="dn-modal-header">
              <div className="dn-modal-badge">Direct Trust Donation</div>
              <h3>Complete Your Donation of ₹ {formatINR(amount)}</h3>
              <p>
                Shri Krishan Kanchan Sewa Trust • Unit: Shri Kanchan Dialysis Centre
              </p>
            </div>

            {/* Payment Method Tabs */}
            <div className="dn-modal-tabs">
              <button
                type="button"
                className={`dn-tab-btn ${paymentTab === 'upi' ? 'active' : ''}`}
                onClick={() => setPaymentTab('upi')}
              >
                Scan &amp; Pay via UPI
              </button>
              <button
                type="button"
                className={`dn-tab-btn ${paymentTab === 'bank' ? 'active' : ''}`}
                onClick={() => setPaymentTab('bank')}
              >
                Bank NEFT / RTGS
              </button>
              <button
                type="button"
                className={`dn-tab-btn ${paymentTab === 'receipt' ? 'active' : ''}`}
                onClick={() => setPaymentTab('receipt')}
              >
                Receipt &amp; Acknowledgment
              </button>
            </div>

            {/* Tab 1: UPI QR Code */}
            {paymentTab === 'upi' && (
              <div className="dn-tab-content">
                <div className="dn-upi-container">
                  <div className="dn-qr-wrapper">
                    <img
                      src={upiQrImage}
                      alt="UPI QR Code - Shri Krishan Kanchan Sewa Trust"
                      className="dn-qr-img"
                    />
                  </div>
                  <div className="dn-upi-details">
                    <p className="dn-upi-instruct">
                      Scan with any UPI App (Google Pay, PhonePe, Paytm, BHIM, CRED)
                    </p>
                    <div className="dn-upi-copy-row">
                      <span className="dn-upi-id-label">UPI ID:</span>
                      <strong className="dn-upi-id-value">shrikanchantrust@hdfcbank</strong>
                      <button
                        type="button"
                        className="dn-mini-copy-btn"
                        onClick={() => handleCopy('upi', 'shrikanchantrust@hdfcbank')}
                      >
                        {copiedKey === 'upi' ? (
                          <>
                            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: '3px' }}><path d="M20 6L9 17l-5-5"/></svg>
                            Copied
                          </>
                        ) : 'Copy'}
                      </button>
                    </div>
                    <div className="dn-upi-mobile-actions">
                      <a
                        href={`upi://pay?pa=shrikanchantrust@hdfcbank&pn=Shri%20Krishan%20Kanchan%20Sewa%20Trust&am=${amount}&cu=INR`}
                        className="dn-btn-open-upi"
                      >
                        Pay ₹ {formatINR(amount)} with UPI App
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Bank Details */}
            {paymentTab === 'bank' && (
              <div className="dn-tab-content">
                <div className="dn-bank-table">
                  {BANK_INFO.map((item) => (
                    <div className="dn-bank-table-row" key={item.label}>
                      <span className="dn-bt-label">{item.label}</span>
                      <strong className="dn-bt-value">{item.value}</strong>
                      {(item.isAccount || item.isIfsc) && (
                        <button
                          type="button"
                          className="dn-mini-copy-btn"
                          onClick={() => handleCopy(item.label, item.value)}
                        >
                          {copiedKey === item.label ? (
                            <>
                              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: '3px' }}><path d="M20 6L9 17l-5-5"/></svg>
                              Copied
                            </>
                          ) : 'Copy'}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <p className="dn-modal-note">
                  * Please mention your Mobile/PAN in transfer remarks for instant 80G tax receipt matching.
                </p>
              </div>
            )}

            {/* Tab 3: Receipt / Acknowledgment */}
            {paymentTab === 'receipt' && (
              <div className="dn-tab-content dn-receipt-view">
                <div className="dn-receipt-box">
                  <div className="dn-receipt-header">
                    <h4>Donation Pledge Acknowledgment</h4>
                    <span className="dn-receipt-tag">80G Eligible</span>
                  </div>
                  <div className="dn-receipt-lines">
                    <div className="dn-r-line">
                      <span>Donor Name:</span>
                      <strong>{formData.title} {formData.fullName || 'Valued Donor'}</strong>
                    </div>
                    <div className="dn-r-line">
                      <span>Pledge Amount:</span>
                      <strong className="dn-highlight-text">₹ {formatINR(amount)}</strong>
                    </div>
                    <div className="dn-r-line">
                      <span>Cause:</span>
                      <strong>{DONATION_CATEGORIES.find((c) => c.id === selectedCategory)?.title}</strong>
                    </div>
                    <div className="dn-r-line">
                      <span>Impact:</span>
                      <strong>{impactStats.sessions} Free Dialysis Sessions</strong>
                    </div>
                    {formData.request80G && formData.panNumber && (
                      <div className="dn-r-line">
                        <span>PAN Number:</span>
                        <strong>{formData.panNumber}</strong>
                      </div>
                    )}
                    <div className="dn-r-line">
                      <span>Email / Phone:</span>
                      <strong>{formData.email || '—'} / {formData.mobile || '—'}</strong>
                    </div>
                  </div>
                  <p className="dn-receipt-footer-text">
                    Thank you for your generous seva! After making the transfer via UPI or Net Banking, our trust team will verify and send the official Section 80G tax exemption receipt to your registered email and WhatsApp within 24 hours.
                  </p>
                </div>
              </div>
            )}

            <div className="dn-modal-actions">
              <button
                type="button"
                className="dn-modal-done-btn"
                onClick={() => {
                  alert('Thank you for supporting Shri Kanchan Dialysis Centre! Our team has recorded your pledge.');
                  setShowModal(false);
                }}
              >
                I Have Completed the Donation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonateSection;
