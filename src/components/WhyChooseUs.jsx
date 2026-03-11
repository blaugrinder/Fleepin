import '../styles/WhyChooseUs.css';
import ULTRA from '../assets/ULTRA.png';
import RUBY from '../assets/RUBY.png';
import DLSS from '../assets/DLSS.png';
import features from '../data/features.json';

const logoMap = {
  ULTRA,
  RUBY,
  DLSS,
};

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <h2 className="why-title">Why choose us?</h2>
      <div className="title-divider" data-aos="zoom-in"></div>

      <div className="values-container">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="value-card"
            data-aos="fade-up"
            data-aos-delay={feature.aosDelay}
          >
            <h3 className="value-title">{feature.title}</h3>
            <div className={feature.underlineClass} />
            <ul className="value-list">
              {feature.items.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.title}</strong> — {item.description}
                </li>
              ))}
            </ul>
            <img
              src={logoMap[feature.logo]}
              alt={`${feature.logo} logo`}
              className={`value-logo ${feature.className}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
