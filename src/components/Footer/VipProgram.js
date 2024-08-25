import React from 'react';
import { Link } from 'react-router-dom';
import './VipProgram.scss';

const VipProgram = () => {
  return (
    <div className="vip-program-container">
      <div className="vip-program-content">
        <div className="vip-program-left">
          <img 
            src="2people.png" 
            alt="VIP Program"
            className="vip-program-image"
          />
        </div>
        <div className="vip-program-right">
          <h2>PROGRAMME VIP BLACKSTORE</h2>
          <p><strong>10€ DE BIENVENUE</strong> à utiliser directement</p>
          <p><strong>1€ = 1 POINT</strong> 10 points à chaque passage en caisse</p>
          <p><strong>300 POINTS = 10%</strong> de réduction*</p>
          <a href="/login"><button lineWeight="600" className="vip-program-button">J'adhère gratuitement</button></a>
          <p className="vip-program-footer">
            *Voir les conditions du programme de fidélité BLACKSTORE <a href="">ici</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VipProgram;
