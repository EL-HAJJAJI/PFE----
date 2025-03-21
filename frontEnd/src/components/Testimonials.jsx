import React, { useState } from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "TaskFlow a transformé notre façon de travailler. Notre productivité a augmenté de 35% en seulement trois mois.",
      author: "Marie Dubois",
      position: "Directrice des opérations, TechCorp",
      avatar: "/avatars/testimonial-1.jpg"
    },
    {
      quote: "L'interface intuitive de TaskFlow a permis à notre équipe de s'adapter rapidement. Le support client est également exceptionnel.",
      author: "Thomas Martin",
      position: "Chef de projet, Innovate Studio",
      avatar: "/avatars/testimonial-2.jpg"
    },
    {
      quote: "Depuis que nous utilisons TaskFlow, les délais de nos projets sont respectés à 99%. Une solution indispensable.",
      author: "Sophie Lefèvre",
      position: "PDG, StartupNext",
      avatar: "/avatars/testimonial-3.jpg"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Ce que nos clients disent</h2>
          <p>Des entreprises de toutes tailles font confiance à TaskFlow</p>
        </div>

        <div className="client-logos">
          <img src="../../public/CarsLogos/bmw.svg" alt="Client Logo" />
          <img src="../../public/CarsLogos/audi.svg" alt="Client Logo" />
          <img src="../../public/CarsLogos/ferrari.svg" alt="Client Logo" />
          <img src="../../public/CarsLogos/jeep.svg" alt="Client Logo" />
          <img src="../../public/CarsLogos/mercedes.svg" alt="Client Logo" />
          <img src="../../public/CarsLogos/porsche.svg" alt="Client Logo" />
          <img src="../../public/CarsLogos/volkswagen.svg" alt="Client Logo" />
        </div>

        <div className="testimonial-slider">
          <div className="testimonial-content">
            <div className="quote-icon">
              <i className="fas fa-quote-left"></i>
            </div>
            <p className="quote">{testimonials[activeIndex].quote}</p>
            <div className="testimonial-author">
              <img src={testimonials[activeIndex].avatar} alt={testimonials[activeIndex].author} />
              <div>
                <h4>{testimonials[activeIndex].author}</h4>
                <p>{testimonials[activeIndex].position}</p>
              </div>
            </div>
          </div>

          <div className="testimonial-controls">
            <button onClick={prevTestimonial} className="control-btn">
              <i className="fas fa-arrow-left"></i>
            </button>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                ></span>
              ))}
            </div>
            <button onClick={nextTestimonial} className="control-btn">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
