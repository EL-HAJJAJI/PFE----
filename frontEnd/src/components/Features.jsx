import React from 'react';
import '../styles/Features.css';

const Features = () => {
  const featuresList = [
    {
      icon: 'fa-tasks',
      title: 'Gestion de tâches simplifiée',
      description: 'Créez, organisez et suivez vos tâches avec une interface intuitive et personnalisable.'
    },
    {
      icon: 'fa-chart-line',
      title: 'Analyses en temps réel',
      description: 'Suivez la productivité de votre équipe avec des tableaux de bord et des rapports détaillés.'
    },
    {
      icon: 'fa-users',
      title: 'Collaboration d\'équipe',
      description: 'Partagez des projets, assignez des tâches et communiquez efficacement avec votre équipe.'
    },
    {
      icon: 'fa-calendar-alt',
      title: 'Planification avancée',
      description: 'Visualisez et organisez votre travail avec des calendriers et des diagrammes de Gantt.'
    },
    {
      icon: 'fa-mobile-alt',
      title: 'Application mobile',
      description: 'Accédez à vos tâches et projets où que vous soyez, même hors connexion.'
    },
    {
      icon: 'fa-plug',
      title: 'Intégrations',
      description: 'Connectez TaskFlow aux outils que vous utilisez déjà pour un flux de travail sans friction.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2>Nos Véhicules à Votre Disposition</h2>
          <p>Découvrez notre sélection exclusive de véhicules de luxe</p>
        </div>

        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="features-showcase">
          <img src="/features-showcase.svg" alt="TaskFlow en action" />
          <div className="features-showcase-content">
            <h3>Tout ce dont votre équipe a besoin</h3>
            <p>TaskFlow s'adapte à la taille et aux besoins de votre entreprise, de la startup à la multinationale.</p>
            <button className="tertiary-btn">En savoir plus</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
