import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
return (
    <section className="hero">
        <div className="container">
            <div className="hero-content">
                <h1>Trouvez votre voiture idéale</h1>
                <p>
                Découvrez notre sélection de véhicules haut de gamme, alliant confort, performance et design.
                Chaque modèle est choisi pour vous offrir une expérience de conduite inégalée.
                </p>
                <div className="cta-buttons">
                    <button className="primary-btn">Commencez gratuitement</button>
                    <button className="secondary-btn">Voir une démo</button>
                </div>
                <div className="hero-stats">
                    <div className="stat">
                        <span className="stat-number">10K+</span>
                        <span className="stat-label">Entreprises</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">99.9%</span>
                        <span className="stat-label">Disponibilité</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">24/7</span>
                        <span className="stat-label">Support</span>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="../../public/landing-picture.jpg" alt="TaskFlow Dashboard Preview" />
                <div className="hero-gradient"></div>
            </div>
        </div>
    </section>
);
};

export default Hero;
