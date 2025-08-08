import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "../styles/TestimonialsPage.css";

const testimonials = [
  { name: "Sarah M.", comment: "Excellent service, j'ai reçu mon PC en 3 jours. Très performant et conforme à mes attentes." },
  { name: "Alex R.", comment: "Equipe très réactive. J’ai eu une assistance même après l’achat. Je recommande fortement !" },
  { name: "Yves K.", comment: "Configuration sur-mesure parfaite pour mon travail de graphiste. Merci beaucoup !" },
  { name: "Linda D.", comment: "Service client au top, commande facile, livraison rapide. Rien à redire." },
];

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
          slideShadows: false
        }}
        modules={[EffectCoverflow, Autoplay]}
      >
        {testimonials.map((t, i) => (
          // on passe la variable CSS --i pour décaler l'animation de bordure
          <SwiperSlide key={i} className="testimonial-slide" style={{ ["--i"]: i }}>
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
