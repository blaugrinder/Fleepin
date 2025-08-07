import React from 'react';
import '../styles/StatsPage.css';

function StatsPage() {
  return (
    <section className="stats-page">
      <div className="stats-grid">
        <div className="stat-block top-left"></div>
        <div className="stat-block top-right"></div>
        <div className="stat-block bottom-left"></div>
        <div className="stat-block bottom-right"></div>

        <div className="line horizontal"></div>
        <div className="line vertical"></div>
      </div>
    </section>
  );
}

export default StatsPage;
