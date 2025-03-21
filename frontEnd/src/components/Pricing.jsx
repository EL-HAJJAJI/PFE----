import React, { useState } from 'react';
import '../styles/Pricing.css';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 9,
      annualPrice: 99,
      description: "Parfait pour les freelances et petites équipes",
      features: [
        "Jusqu'à 10 projets",
        "1 000 tâches",
        "5 membres d'équipe",
        "Intégration de base",
        "Support par email"
      ]
    },
    {
      name: "Professional",
      monthlyPrice: 29,
      annualPrice: 299,
      description: "Idéal pour les équipes en croissance",
      features: [
        "Projets illimités",
        "Tâches illimitées",
        "20 membres d'équipe",
        "Toutes les intégrations",
        "Support prioritaire",
        "Tableaux de bord avancés",
        "Contrôles d'accès"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      monthlyPrice: 79,
      annualPrice: 799,
      description: "Pour les grandes organisations",
      features: [
        "Tout dans Professional",
        "Utilisateurs illimités",
        "Support dédié 24/7",
        "Conformité et sécurité avancées",
        "API personnalisée",
        "Formations sur mesure",
        "SLA garantie"
      ]
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Des tarifs transparents</h2>
          <p>Choisissez le plan qui correspond à vos besoins</p>
        </div>

        <div className="pricing-toggle">
          <span className={!isAnnual ? 'active' : ''}>Mensuel</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={isAnnual}
              onChange={() => setIsAnnual(!isAnnual)}
            />
            <span className="slider round"></span>
          </label>
          <span className={isAnnual ? 'active' : ''}>Annuel <span className="save-badge">Économisez 16%</span></span>
        </div>

        <div className="pricing-plans">
          {plans.map((plan, index) => (
            <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={index}>
              {plan.popular && <div className="popular-badge">Le plus choisi</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="currency">€</span>
                <span className="amount">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                <span className="period">/{isAnnual ? 'an' : 'mois'}</span>
              </div>
              <p className="plan-description">{plan.description}</p>
              <button className={`plan-btn ${plan.popular ? 'popular-btn' : ''}`}>
                Commencer maintenant
              </button>
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <i className="fas fa-check"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="enterprise-cta">
          <h3>Besoin d'une solution sur mesure ?</h3>
          <p>Contactez notre équipe commerciale pour une démonstration personnalisée.</p>
          <button className="tertiary-btn">Contacter les ventes</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
