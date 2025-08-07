import React from 'react';
import '../styles/TestimonialsPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function TestimonialsPage() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const testimonials = [
    {
      name: "Sarah M.",
      comment: "Excellent service, j'ai reçu mon PC en 3 jours. Très performant et conforme à mes attentes.",
    },
    {
      name: "Alex R.",
      comment: "Equipe très réactive. J’ai eu une assistance même après l’achat. Je recommande fortement !",
    },
    {
      name: "Yves K.",
      comment: "Configuration sur-mesure parfaite pour mon travail de graphiste. Merci beaucoup !",
    },
    {
      name: "Linda D.",
      comment: "Service client au top, commande facile, livraison rapide. Rien à redire.",
    }
  ];

  return (
    <section className="testimonials-page">
      <h1 className="title" data-aos="fade-down">Ils nous font confiance</h1>
      <div className="testimonials-container">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index} data-aos="fade-up">
            <p className="comment">“{t.comment}”</p>
            <p className="author">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsPage;
