import React from 'react';
import '../styles/WhyChooseUs.css';

import ULTRA from '../assets/ULTRA.png';
import RUBY from '../assets/RUBY.png';
import DLSS from '../assets/DLSS.png';

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <h2 className="why-title">Why choose us?</h2>
      <div className="title-divider" data-aos="zoom-in"></div>

      <div className="values-container">
        {/* PERFORMANCE */}
        <div className="value-card" data-aos="fade-up">
          <h3 className="value-title">PERFORMANCE</h3>
          <div className="underline-ultra" />
          <ul className="value-list">
            <li><strong>Speed as a priority</strong> — We ensure every machine delivers lightning-fast boot times, application responsiveness, and multitasking capabilities.</li>
            <li><strong>Consistency under pressure</strong> — Systems are tested under heavy load to guarantee stable performance even in the most demanding tasks.</li>
            <li><strong>Tailored power</strong> — Our builds are optimized for your specific needs, whether it's gaming, video editing, or development.</li>
            <li><strong>Silent and cool</strong> — High-efficiency cooling keeps components running at peak performance without overheating or noise.</li>
          </ul>
          <img src={ULTRA} alt="Ultra logo" className="value-logo ultra-logo" />
        </div>

        {/* RELIABILITY */}
        <div className="value-card" data-aos="fade-up" data-aos-delay="100">
          <h3 className="value-title">RELIABILITY</h3>
          <div className="underline-ruby" />
          <ul className="value-list">
            <li><strong>Built to last</strong> — We use high-end components designed for long-term durability and performance over time.</li>
            <li><strong>Strict quality control</strong> — Every product goes through a thorough testing protocol before delivery.</li>
            <li><strong>Minimal downtime</strong> — We aim for zero failure by assembling systems with only proven, industry-grade parts.</li>
            <li><strong>Peace of mind</strong> — Backed by comprehensive warranty and expert support ready to assist when needed.</li>
          </ul>
          <img src={RUBY} alt="Ruby logo" className="value-logo" />
        </div>

        {/* INNOVATION */}
        <div className="value-card" data-aos="fade-up" data-aos-delay="200">
          <h3 className="value-title">INNOVATION</h3>
          <div className="underline-dlss" />
          <ul className="value-list">
            <li><strong>Always ahead</strong> — We constantly integrate the latest technologies into our builds, keeping your setup future-ready.</li>
            <li><strong>Smart optimization</strong> — Our configurations leverage AI-driven tools for faster processing and smarter performance.</li>
            <li><strong>Inspired design</strong> — Beyond specs, our PCs bring visual sophistication and clean design aesthetics.</li>
            <li><strong>Immersive experience</strong> — Support for AR/VR, DLSS, and real-time rendering ensures a new level of realism.</li>
          </ul>
          <img src={DLSS} alt="DLSS logo" className="value-logo dlss-logo" />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
