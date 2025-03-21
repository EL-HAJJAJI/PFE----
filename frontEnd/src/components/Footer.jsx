import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo">TaskFlow</div>
                        <p>
                            Des voitures idéales pour répondre à vos besoins et
                            optimiser votre conduite.
                        </p>
                        <div className="social-links">
                            <a href="#">
                                <img
                                    src="/SocialLogos/twitter.svg"
                                    alt="Twitter"
                                    className="social-icon"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="/SocialLogos/facebook.svg"
                                    alt="Facebook"
                                    className="social-icon"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="/SocialLogos/linkedin.svg"
                                    alt="LinkedIn"
                                    className="social-icon"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="/SocialLogos/instagram.svg"
                                    alt="Instagram"
                                    className="social-icon"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="/SocialLogos/whatsapp.svg"
                                    alt="WhatsApp"
                                    className="social-icon"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Produit</h4>
                            <ul>
                                <li>
                                    <a href="#">Fonctionnalités</a>
                                </li>
                                <li>
                                    <a href="#">Tarifs</a>
                                </li>
                                <li>
                                    <a href="#">Témoignages</a>
                                </li>
                                <li>
                                    <a href="#">Intégrations</a>
                                </li>
                                <li>
                                    <a href="#">Nouveautés</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Ressources</h4>
                            <ul>
                                <li>
                                    <a href="#">Documentation</a>
                                </li>
                                <li>
                                    <a href="#">Guides</a>
                                </li>
                                <li>
                                    <a href="#">API</a>
                                </li>
                                <li>
                                    <a href="#">Tutoriels</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Entreprise</h4>
                            <ul>
                                <li>
                                    <a href="#">À propos</a>
                                </li>
                                <li>
                                    <a href="#">Équipe</a>
                                </li>
                                <li>
                                    <a href="#">Carrières</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">Partenaires</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Support</h4>
                            <ul>
                                <li>
                                    <a href="#">Centre d'aide</a>
                                </li>
                                <li>
                                    <a href="#">Statut</a>
                                </li>
                                <li>
                                    <a href="#">Communauté</a>
                                </li>
                                <li>
                                    <a href="#">Webinaires</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-legal">
                        <p>
                            &copy; {currentYear} TaskFlow. Tous droits réservés.
                        </p>
                        <div className="legal-links">
                            <a href="#">Conditions générales</a>
                            <a href="#">Politique de confidentialité</a>
                            <a href="#">Politique de cookies</a>
                        </div>
                    </div>
                    <div className="footer-language">
                        <select>
                            <option value="fr">Français</option>
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="de">Deutsch</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
