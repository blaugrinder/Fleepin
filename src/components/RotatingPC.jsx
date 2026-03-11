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

const ANIMATION_CYCLE = 4000; // ms
const BRAND_NAMES = ['ASUS', 'CORSAIR', 'DELL', 'LENOVO'];
const images = [ASUS, CORSAIR, DELL, LENOVO];
const logos = [logoASUS, logoCORSAIR, logoDELL, logoLENOVO];

function RotatingPC() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, ANIMATION_CYCLE);

    return () => clearInterval(interval);
  }, []);

  const getPositionClass = (index) => {
    const relative = (index - activeIndex + images.length) % images.length;
    switch (relative) {
      case 0:
        return 'pc-center';
      case 1:
        return 'pc-right';
      case 2:
        return 'pc-back';
      case 3:
        return 'pc-left';
      default:
        return '';
    }
  };

  return (
    <div className="pc-showcase">
      <div className="pc-carousel">
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
          className="brand-img"
        />
      </div>
    </div>
  );
}

export default RotatingPC;
