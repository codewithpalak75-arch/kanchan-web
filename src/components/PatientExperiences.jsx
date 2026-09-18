import React, { useState, useEffect, useRef } from 'react';
import './PatientExperiences.css';

const REVIEWS_DATA = [
  {
    id: 1,
    name: 'Smt. Anjali Devi',
    city: 'Jaipur, Rajasthan',
    role: 'Dialysis Patient',
    category: 'Patients',
    badge: '100% Free Treatment',
    rating: 5,
    quote:
      'Har visit par staff itni izzat aur apnepan ke sath care karta hai ki bimari ka dar bilkul nikal gaya. Yahan ek bhi rupya nahi liya jata, equipment naya aur clean hai aur doctors hamesha samay par hote hain.',
    initials: 'AD',
    gradient: 'from-orange',
  },
  {
    id: 2,
    name: 'Mr. Subrata Moitra',
    city: 'Jaipur',
    role: 'Chronic Renal Patient',
    category: 'Patients',
    badge: 'Clinical Excellence',
    rating: 5,
    quote:
      'The level of clinical hygiene, advanced hemodialysis machines, and genuine human compassion here rivals the best private hospitals. The doctors review our blood work regularly without charging a single rupee.',
    initials: 'SM',
    gradient: 'from-blue',
  },
  {
    id: 3,
    name: 'Shri Rameshwar Lal',
    city: 'Dausa, Rajasthan',
    role: 'Senior Citizen Patient',
    category: 'Senior Citizens',
    badge: 'Life-Saving Seva',
    rating: 5,
    quote:
      'Main pichle 18 mahine se yahan regular dialysis karwa raha hoon. Meri aarthik sthiti aisi nahi thi ki private hospital ka mehenga kharcha utha sakoon. Shri Kanchan Trust ne mujhe naya jeevan diya hai.',
    initials: 'RL',
    gradient: 'from-emerald',
  },
  {
    id: 4,
    name: 'Mrs. Sunita Verma',
    city: 'Jaipur',
    role: 'Daughter of Patient',
    category: 'Family Caregivers',
    badge: 'Compassionate Care',
    rating: 5,
    quote:
      'When my father was diagnosed with renal failure, the monthly costs seemed impossible. Shri Kanchan centre became a blessing for our family. No billing counters, just pure selfless seva from every doctor.',
    initials: 'SV',
    gradient: 'from-purple',
  },
  {
    id: 5,
    name: 'Shri Bhagwan Das',
    city: 'Sanganer, Jaipur',
    role: 'Dialysis Patient (1+ Year)',
    category: 'Patients',
    badge: 'Zero Hidden Fees',
    rating: 5,
    quote:
      'Pehle har dialysis session par ₹2,500 se ₹3,000 lagte the jisse ghar ka budget bigad gaya tha. Yahan aane ke baad sab kuch 100% muft mil raha hai. Bhagwan is trust ko khoob tarakki de.',
    initials: 'BD',
    gradient: 'from-orange',
  },
  {
    id: 6,
    name: 'Dr. Neeraj Mathur',
    city: 'Jaipur',
    role: 'Family Member',
    category: 'Family Caregivers',
    badge: 'Medical Quality',
    rating: 5,
    quote:
      'As a medical professional, I closely inspected the sterilization and water treatment RO plant here. The quality standards are top-notch and patient safety is prioritised above everything else.',
    initials: 'NM',
    gradient: 'from-blue',
  },
];

const CATEGORIES = ['All Stories', 'Patients', 'Family Caregivers', 'Senior Citizens'];

const STATS_RIBBON = [
  { value: '10,000+', label: 'Free Sessions Delivered' },
  { value: '4.9 / 5.0', label: 'Patient Trust Rating' },
  { value: '₹0 Charged', label: '100% Cashless & Free' },
  { value: '200+ / mo', label: 'Active Regular Patients' },
];

const AUTO_ROTATE_MS = 5000;

const PatientExperiences = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Stories');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const timerRef = useRef(null);

  // Filter reviews
  const filteredReviews = selectedCategory === 'All Stories'
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter((r) => r.category === selectedCategory);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 680) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, filteredReviews.length - cardsPerView);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Reset index on category change
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
  };

  // Auto rotation
  useEffect(() => {
    if (isPaused || maxIndex === 0) return undefined;
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, AUTO_ROTATE_MS);
    return () => clearInterval(timerRef.current);
  }, [isPaused, maxIndex]);

  return (
    <section
      className="pe-premium-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient glows */}
      <div className="pe-ambient-glow pe-glow-orange"></div>
      <div className="pe-ambient-glow pe-glow-blue"></div>

      <div className="pe-premium-container">
        {/* Header */}
        <div className="pe-header">
          <div className="pe-pill-badge">
            <span className="pe-heart-icon">
              <svg stroke="currentColor" fill="none" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </span>
            <span>Voices of Hope &amp; Healing</span>
          </div>
          <h2 className="pe-main-title">
            Heartfelt Stories from <span className="pe-title-highlight">Our Patients</span>
          </h2>
          <p className="pe-main-subtitle">
            Real experiences from patients and families who receive free, dignified dialysis care at Shri Kanchan every single day.
          </p>
        </div>

        {/* Category Filter Chips & Carousel Nav Buttons */}
        <div className="pe-filter-nav-bar">
          <div className="pe-category-chips">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`pe-cat-chip ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="pe-nav-arrows-group">
            <button
              type="button"
              className="pe-nav-arrow-btn"
              onClick={goPrev}
              aria-label="Previous reviews"
            >
              <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.1em" width="1.1em">
                <path d="M15 18l-6-6 6-6"></path>
              </svg>
            </button>
            <button
              type="button"
              className="pe-nav-arrow-btn"
              onClick={goNext}
              aria-label="Next reviews"
            >
              <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.1em" width="1.1em">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Scalable Multi-Card Carousel Grid Track */}
        <div className="pe-carousel-viewport">
          <div
            className="pe-carousel-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {filteredReviews.map((item) => (
              <div
                key={item.id}
                className="pe-slide-card"
                style={{ flex: `0 0 ${100 / cardsPerView}%` }}
              >
                <div className="pe-card-inner">
                  {/* Card Header: Stars & Badge */}
                  <div className="pe-card-top-row">
                    <div className="pe-stars-row">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg key={i} className="pe-star" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="pe-badge-tag">{item.badge}</span>
                  </div>

                  {/* Quote Paragraph */}
                  <p className="pe-quote-text">“{item.quote}”</p>

                  {/* Author Profile */}
                  <div className="pe-card-author-row">
                    <div className={`pe-avatar-circle ${item.gradient}`}>
                      {item.initials}
                    </div>
                    <div className="pe-author-info">
                      <h4 className="pe-author-name">{item.name}</h4>
                      <span className="pe-author-role">{item.role}</span>
                      <span className="pe-author-city">{item.city}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots Pagination */}
        {maxIndex > 0 && (
          <div className="pe-pagination-dots">
            {[...Array(maxIndex + 1)].map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`pe-p-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Bottom Trust & Impact Stats Ribbon */}
        <div className="pe-stats-ribbon">
          {STATS_RIBBON.map((s) => (
            <div className="pe-stat-item" key={s.label}>
              <span className="pe-stat-number">{s.value}</span>
              <span className="pe-stat-desc">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientExperiences;