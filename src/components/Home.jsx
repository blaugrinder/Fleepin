import React from 'react'
import '../styles/Home.css'
import RotatingPC from './RotatingPC'

function Home() {
  return (
    <section className="home">
      <div className="home-left">
  <h1 className="home-title">Your Next PC, Without Compromise</h1>
  <p className="home-story">
    At Fleepin, we believe that every computer should be more than just a machine — it should be an extension of your ambition.  
    Whether you're a gamer pushing the limits, a designer chasing perfection, or a student reaching for your future,  
    our PCs are built to keep up, stand out, and last long.  
    Each system is crafted with precision, powered by high-performance components, and tested with care.  
    We're not just selling computers — we're fueling journeys.
  </p>
</div>
      <div className="home-right">
        <RotatingPC />
      </div>
    </section>
  )
}

export default Home
