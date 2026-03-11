import { useState, useEffect } from 'react';
import '../styles/Home.css';

import ASUS from '../assets/ASUS.png';
import CORSAIR from '../assets/CORSAIR.png';
import DELL from '../assets/DELL.png';
import LENOVO from '../assets/LENOVO.png';

import logoASUS from '../assets/logoASUS.png';
import logoCORSAIR from '../assets/logoCORSAIR.png';
import logoDELL from '../assets/logoDELL.png';
import logoLENOVO from '../assets/logoLENOVO.png';

const ANIMATION_CYCLE = 3000; // ms
const FADE_TRANSITION = 500; // ms
const BRAND_NAMES = ['ASUS', 'CORSAIR', 'DELL', 'LENOVO'];
const images = [ASUS, CORSAIR, DELL, LENOVO];
const logos = [logoASUS, logoCORSAIR, logoDELL, logoLENOVO];

function RotatingPC() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // start fade-out
      setFade(false);

      // after FADE_TRANSITION, the logo change and fade-in
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, FADE_TRANSITION);
    }, ANIMATION_CYCLE);

    return () => clearInterval(interval);
  }, []);

  const getPositionClass = (index) => {
    const relative = (index - activeIndex + images.length) % images.length;
    switch (relative) {
      case 0:
        return 'pc-front';
      case 1:
        return 'pc-top-left';
      case 2:
        return 'pc-top-back';
      case 3:
        return 'pc-top-right';
      default:
        return '';
    }
  };

  return (
    <div className="pc-showcase">
      <div className="pc-diagonal-carousel">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${BRAND_NAMES[index]} gaming PC`}
            className={`pc-img ${getPositionClass(index)}`}
          />
        ))}
      </div>

      <div className="pc-logo-placeholder">
        <img
          src={logos[activeIndex]}
          alt={`${BRAND_NAMES[activeIndex]} brand logo`}
          className={`brand-img ${fade ? 'fade-in' : 'fade-out'}`}
        />
      </div>
    </div>
  );
}

export default RotatingPC;
