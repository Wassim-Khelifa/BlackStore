import React from "react";
import "./Footer.scss";
import AccordionMenu from './AccordionMenu';
import VipProgram from './VipProgram';

function Footer() {
    return (
     <div>
        <header className="header">
            <div className="header-item">
                <img src="truck.png" alt="Delivery" />
                <p className="titre_footer">Livraison à domicile offerte<br />Dès 69,99€*<br />Membres VIP dès 49,99€</p>
            </div>
            <div className="header-item">
                <img src="kochk.png" alt="Store Pickup" />
                <p className="titre_footer">Retrait offert à partir de 2 heures<br />En magasin BLACKSTORE<br />en Click & Collect</p>
            </div>
            <div className="header-item">
                <img src="3g.png" alt="Free Exchange" />
                <p className="titre_footer">Échange & retour gratuits<br />Sous 15 jours<br />Membres VIP sous 100 jours</p>
            </div>
            <div className="header-item">
                <img src="casque.png" alt="Support" />
                <p className="titre_footer">Aide & contact<br />Vous renseigner et répondre<br />à vos questions</p>
            </div>
        </header>



        <VipProgram />

        {/*<section className="vip-program">
            <div className="people">
                <div>
                <img className="peopleimg" src="2people.png" alt="" />
                </div>
            </div>
            <div className="vip-info">
                <div className="containerimg">
                    <img className="vip" src="vipcard.png" alt="" />
                </div>
                <div>
                    <h2>PROGRAMME VIP BLACKSTORE</h2>
                    <span>
                        <h4 className="inline">10€ DE BIENVENUE</h4><p className="inline"> - à utiliser directement</p>
                    </span>
                    <span>
                        <h4 className="inline">1€ = 1 POINT</h4><p className="inline"> + 10 points à chaque passage en caisse</p>
                    </span>
                    <span><h4 className="inline">300 POINTS</h4><p className="inline"> = 10% de réduction*</p></span>
                    <button className="vip-button">J'adhère gratuitement</button>
                    <p>* Voir les conditions du programme de fidélité BLACKSTORE <a href=""><b>ici</b></a></p>
            
                </div>
            </div>
        </section>

        */}








        <footer className="footer">
            <div className="footer-section">
                <div className="footer-sub-section">
                    <h3>Nos magasins</h3>
                    <button className="footer-button">Voir la carte</button>
                </div>
                <div className="footer-sub-section">
                    <h3>Suivez-nous</h3>
                    <div className="social-icons">
                        <img className="fb" src="facebook.png" alt="Facebook" />
                        <img src="instagram.png" alt="Instagram" />
                        <img src="tiktok.png" alt="TikTok" />
                        <img src="youtube.png" alt="YouTube" />
                    </div>
                </div>
                <div className="footer-sub-section">
                    <h4>L'avis de nos clients</h4>
                    <span><h4 className='stars'>★★★★★  </h4> <h4>  5.0</h4> <h6>  sur 80380 avis</h6></span>
                </div>
            </div>
            <div className="footer-responsive-section">
                <div className="footer-sub-section">
                    <h3>Besoin d'aide?</h3>
                    <ul>
                        <li><a href="">Foire aux questions</a></li>
                        <li><a href="">Livraison</a></li>
                        <li><a href="">Échange et retour</a></li>
                        <li><a href="">Mon compte</a></li>
                        <li><a href="">Guide des tailles</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-responsive-section">
                <div className="footer-sub-section">
                    <h3>À propos de BLACKSTORE</h3>
                    <ul>
                        <li><a href="">Nous rejoindre</a></li>
                        <li><a href="">Notre enseigne</a></li>
                        <li><a href="">DPEF</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-responsive-section">
                <div className="footer-sub-section">
                    <h3>Services & carte BLACKSTORE</h3>
                    <ul>
                        <li><a href="">Le programme de fidélité</a></li>
                        <li><a href="">La carte cadeau</a></li>
                    </ul>
                </div>
            </div>
            <AccordionMenu />
        </footer>
        <nav className="footer-nav">
            <ul>
                <li>Conditions Générales de Vente</li>
                <li>Mentions légales</li>
                <li>Contact</li>
                <li>Confidentialité</li>
                <li>Cookies</li>
            </ul>
            <a href="#" class="back-to-top">
		        <span class="material-icons">arrow_upward</span>
	        </a>
        </nav>
     </div>
    );
  }
  
  export default Footer;
  