import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import '../styles/TestimonialsPage.css';
import testimonials from '../data/testimonials.json';

export default function TestimonialsCarousel() {
  return (
    <section className="testimonials-carousel">
      <h1 className="title">Ils nous font confiance</h1>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        speed={800}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 18,
          stretch: 0,
          depth: 220,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
      >
        {testimonials.map((t, i) => (
          // on passe la variable CSS --i pour décaler l'animation de bordure
          <SwiperSlide key={i} className="testimonial-slide" style={{ ['--i']: i }}>
            <div className="card-inner">
              <p className="comment">“{t.comment}”</p>
              <p className="author">— {t.name}</p>
              <div className="chip">Client vérifié</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
