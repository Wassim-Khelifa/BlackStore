import React, { useState } from 'react';
import './AccordionMenu.scss';

const AccordionMenu = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => toggleSection(0)}
        >
          <h3>Besoin d'aide ?</h3>
          <span>{openSection === 0 ? <img className="arrow-icon" src="up-arrow.svg"></img> : <img className="arrow-icon" src="down-arrow.svg"></img>}</span>
        </div>
        {openSection === 0 && (
          <div className="accordion-content">
            <ul>
              <li>La carte de fidélité</li>
              <li>La carte cadeau</li>
              <li>La Foire aux questions</li>
              <li>Guide des tailles</li>
            </ul>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => toggleSection(1)}
        >
          <h3>À propos de Blackstore</h3>
          <span>{openSection === 1 ? <img className="arrow-icon" src="up-arrow.svg"></img> : <img className="arrow-icon" src="down-arrow.svg"></img>}</span>
        </div>
        {openSection === 1 && (
          <div className="accordion-content">
            <ul>
              <li>Notre enseigne</li>
              <li>Rejoindre l'équipe</li>
            </ul>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => toggleSection(2)}
        >
          <h3>Offres produits BLACKSTORE</h3>
          <span>{openSection === 2 ? <img className="arrow-icon" src="up-arrow.svg"></img> : <img className="arrow-icon" src="down-arrow.svg"></img>}</span>
        </div>
        {openSection === 2 && (
          <div className="accordion-content">
            <ul>
              <li>Offres exclusives</li>
              <li>Nouveaux produits</li>
            </ul>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => toggleSection(3)}
        >
          <h3>Informations légales</h3>
          <span>{openSection === 3 ? <img className="arrow-icon" src="up-arrow.svg"></img> : <img className="arrow-icon" src="down-arrow.svg"></img>}</span>
        </div>
        {openSection === 3 && (
          <div className="accordion-content">
            <ul>
              <li>Conditions Générales de Vente</li>
              <li>Mentions légales</li>
              <li>Contact</li>
              <li>Confidentialité</li>
              <li>Cookies</li>
              <li>Paramétrer les cookies</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionMenu;