import React, { useState, useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import './Gallery.css';

// Center and Seva Images
import centreEntranceImg from '../assets/centre-entrance.jpg';
import dialysisGuideImg from '../assets/dialysis-care-guide.jpg';
import sponsoredDialysisImg from '../assets/sponsored-dialysis-treatment.jpg';
import janmashtamiSevaImg from '../assets/janmashtami-seva.jpg';

// KAN Series Photos
import kan1 from '../assets/KAN1.jpeg';
import kan2 from '../assets/KAN2.jpeg';
import kan3 from '../assets/KAN3.jpeg';
import kan4 from '../assets/KAN4.jpeg';
import kan5 from '../assets/KAN5.jpeg';
import kan6 from '../assets/KAN6.jpeg';
import kan7 from '../assets/KAN7.jpeg';
import kan8 from '../assets/KAN8.jpeg';
import kan9 from '../assets/KAN9.jpeg';
import kan10 from '../assets/KAN10.jpeg';
import kan11 from '../assets/KAN11.jpeg';
import kan12 from '../assets/KAN12.jpeg';
import kan13 from '../assets/KAN13.jpeg';
import kan14 from '../assets/KAN14.jpeg';
import kan15 from '../assets/KAN15.jpeg';
import kan16 from '../assets/KAN 16.jpeg';
import kan17 from '../assets/KAN17.jpeg';
import kan18 from '../assets/KAN18.jpeg';
import kan19 from '../assets/KAN19.jpeg';
import kan20 from '../assets/KAN20.jpeg';

const CATEGORIES = ['All', 'Facility', 'Patient Care', 'Events & Seva'];

const IMAGES = [
  { id: 1, src: centreEntranceImg, cat: 'Facility', title: 'Shri Kanchan Centre Entrance & Reception', desc: 'Main entry point welcoming patients with warmth and care' },
  { id: 2, src: kan2, cat: 'Facility', title: 'Shri Kanchan Dialysis Centre Main Building', desc: 'State-of-the-art charitable dialysis facility in Jaipur' },
  { id: 3, src: kan1, cat: 'Facility', title: 'Modern Hemodialysis Machine Station', desc: 'High-end hemodialysis units for accurate clinical therapy' },
  { id: 4, src: dialysisGuideImg, cat: 'Patient Care', title: 'Dialysis Patient Health & Care Guidelines', desc: 'Comprehensive protocols followed for every patient session' },
  { id: 5, src: sponsoredDialysisImg, cat: 'Patient Care', title: 'Sponsored Free Dialysis Treatment', desc: '100% free life-saving dialysis sessions for patients in need' },
  { id: 6, src: kan3, cat: 'Patient Care', title: 'Clinical Dialysis Procedure & Monitoring', desc: 'Continuous vital tracking during each dialysis cycle' },
  { id: 7, src: kan4, cat: 'Facility', title: 'Sanitised Dialysis Treatment Ward', desc: 'Clean, hygienic, and temperature-controlled patient recovery rooms' },
  { id: 8, src: kan5, cat: 'Facility', title: 'Medical Equipment & Advanced Water Plant', desc: 'Ultra-pure RO water filtration system dedicated for dialysis' },
  { id: 9, src: kan6, cat: 'Patient Care', title: 'Dedicated Nursing & Patient Assistance', desc: 'Compassionate medical nurses providing attentive care' },
  { id: 10, src: kan7, cat: 'Facility', title: 'Patient Beds & Ergonomic Station Setup', desc: 'Designed for comfort and patient relaxation during therapy' },
  { id: 11, src: kan8, cat: 'Patient Care', title: 'Dialysis Session in Continuous Progress', desc: 'Providing consistent and reliable treatment rounds daily' },
  { id: 12, src: kan9, cat: 'Facility', title: 'Hygienic Dialyzer Sterilisation Ward', desc: 'High medical cleanliness standards maintained throughout' },
  { id: 13, src: kan10, cat: 'Patient Care', title: 'Nephrology Supervision & Consultation', desc: 'Doctor reviews ensuring optimal patient treatment outcomes' },
  { id: 14, src: janmashtamiSevaImg, cat: 'Events & Seva', title: 'Janmashtami Seva & Patient Blessing Drive', desc: 'Spiritual celebrations and community welfare drives' },
  { id: 15, src: kan11, cat: 'Events & Seva', title: 'Trust Seva Activities & Community Service', desc: 'Selfless volunteers and patrons coming together' },
  { id: 16, src: kan12, cat: 'Patient Care', title: 'Compassionate Healthcare Support', desc: 'Friendly and supportive environment for patient morale' },
  { id: 17, src: kan13, cat: 'Facility', title: 'Treatment Infrastructure & Support Tech', desc: 'Modern medical machines operating with backup power' },
  { id: 18, src: kan14, cat: 'Patient Care', title: 'Safe & Hygienic Hemodialysis Operation', desc: 'Adhering strictly to clinical protocols' },
  { id: 19, src: kan15, cat: 'Events & Seva', title: 'Community Outreach & Seva Program', desc: 'Raising awareness for kidney health and free treatment access' },
  { id: 20, src: kan16, cat: 'Facility', title: 'Dedicated Dialysis Units & Emergency Setup', desc: 'Fully equipped for patient safety and emergency response' },
  { id: 21, src: kan17, cat: 'Events & Seva', title: 'Trust Gathering for Patient Welfare', desc: 'Leadership and patrons working to expand healthcare access' },
  { id: 22, src: kan18, cat: 'Patient Care', title: 'Dignified Healthcare for Every Soul', desc: 'Treating each patient like family with respect and devotion' },
  { id: 23, src: kan19, cat: 'Events & Seva', title: 'Health Seva Gathering & Volunteer Meet', desc: 'Strengthening community bonds through service' },
  { id: 24, src: kan20, cat: 'Events & Seva', title: 'Seva Trust Patrons & Well-Wishers', desc: 'Gratitude to all patrons supporting free dialysis treatments' },
];

const Gallery = () => {
  const [active, setActive] = useState('All');
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);

  const filtered = active === 'All' ? IMAGES : IMAGES.filter((img) => img.cat === active);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImgIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedImgIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedImgIndex((prev) => (prev + 1) % filtered.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedImgIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImgIndex, filtered.length]);

  const openLightbox = (index) => {
    setSelectedImgIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImgIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImgIndex((prev) => (prev + 1) % filtered.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImgIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  return (
    <>
      <PageBanner
        label="Gallery"
        title="Moments From Our Centre"
        subtitle="A glimpse into our state-of-the-art facility, compassionate patient care, and community seva drives."
      />

      <section className="ga-section">
        <div className="ga-container">
          <div className="ga-header-meta">
            <div className="ga-filters">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`ga-filter-btn ${active === cat ? 'active' : ''}`}
                  onClick={() => {
                    setActive(cat);
                    setSelectedImgIndex(null);
                  }}
                >
                  {cat}
                  <span className="ga-count-badge">
                    {cat === 'All' ? IMAGES.length : IMAGES.filter((i) => i.cat === cat).length}
                  </span>
                </button>
              ))}
            </div>
            <p className="ga-total-note">
              Showing <strong>{filtered.length}</strong> photos {active !== 'All' && `in ${active}`}
            </p>
          </div>

          <div className="ga-grid">
            {filtered.map((img, idx) => (
              <div
                className="ga-item"
                key={img.id || img.title}
                onClick={() => openLightbox(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
              >
                <div className="ga-img-wrapper">
                  <img src={img.src} alt={img.title} loading="lazy" />
                  <div className="ga-zoom-indicator">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                </div>
                <div className="ga-overlay">
                  <span className="ga-cat">{img.cat}</span>
                  <h4>{img.title}</h4>
                  {img.desc && <p className="ga-desc">{img.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImgIndex !== null && filtered[selectedImgIndex] && (
        <div className="ga-lightbox" onClick={closeLightbox}>
          <div className="ga-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="ga-lightbox-close" onClick={closeLightbox} aria-label="Close image">
              &times;
            </button>
            <button className="ga-lightbox-nav ga-prev" onClick={prevImage} aria-label="Previous image">
              &#10094;
            </button>
            <div className="ga-lightbox-img-box">
              <img
                src={filtered[selectedImgIndex].src}
                alt={filtered[selectedImgIndex].title}
                className="ga-lightbox-img"
              />
            </div>
            <button className="ga-lightbox-nav ga-next" onClick={nextImage} aria-label="Next image">
              &#10095;
            </button>
            <div className="ga-lightbox-caption">
              <div className="ga-lightbox-cat">{filtered[selectedImgIndex].cat}</div>
              <h3>{filtered[selectedImgIndex].title}</h3>
              {filtered[selectedImgIndex].desc && <p>{filtered[selectedImgIndex].desc}</p>}
              <div className="ga-lightbox-counter">
                {selectedImgIndex + 1} / {filtered.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
