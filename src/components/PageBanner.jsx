import React from 'react';
import './PageBanner.css';

const PageBanner = ({ label, title, subtitle }) => {
  return (
    <section className="page-banner">
      <div className="page-banner-bg"></div>
      <div className="page-banner-overlay"></div>
      <div className="page-banner-container">
        {label && <span className="page-banner-label">{label}</span>}
        <h1 className="page-banner-title">{title}</h1>
        {subtitle && <p className="page-banner-subtitle">{subtitle}</p>}
        <div className="page-banner-crumbs">
          <a href="#/">Home</a>
          <span className="crumb-sep">/</span>
          <span className="crumb-current">{label || title}</span>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
