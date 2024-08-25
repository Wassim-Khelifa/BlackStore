import React from "react";
import "./Landing.scss";

function Landing({isOpen}) {
    return (
            <div>
                <img className="landingimg" src="img2.png" alt="image"></img>
                <div className="container">
                    <h2>AVIS CLIENT</h2>
                    <p>Chez Blackstore, votre avis est important pour nous, mais pas que, il est aussi important pour les autres clients ! C’est pourquoi nous avons mis en place un système de recueil des avis avec Trustville.</p>
                    
                    <img className="avisimg" src="avis.png" alt="avis"></img>
                    <h2>QUI EST TRUSTVILLE?</h2>
                    <p>Trustville est un tiers de confiance de diffusion d'avis clients vérifiés dédié aux établissements et professionnels de proximité suivant les recommandations de la Norme ISO "Avis de consommateurs en ligne" (ISO 20488), favorisant l’authenticité des avis de consommateurs en ligne.</p>
                    
                    <h2>COMMENT ÇA MARCHE?</h2>
                    <ol>
                        <li>Je passe commande sur le site Blackstore.fr</li>
                        <li>Je récupère ma commande et reçois un email 5 jours après</li>
                        <li>Je donne mon avis via le formulaire</li>
                        <li>L’avis est partagé sur l’espace magasin de mon Blackstore</li>
                    </ol>
                
                    <h5>OU</h5>

                    <ol>
                        <li>Je suis sur le site Blackstore.fr</li>
                        <li>Je décide de donner mon avis</li>
                        <li>Je remplis le formulaire sur le site</li>
                        <li>L’avis est partagé sur la page tous les avis</li>
                    </ol>
                
                
                    <h2>CONDITIONS ET MODÉRATIONS :</h2>

                    <p>TrustVille publie vos avis en ligne en respectant les recommandations de la norme ISO 20488 :</p>
                    <ul>
                        <li>Seuls les avis du questionnaire envoyé par email sont concernés par cette option (clients vérifiés)</li>
                        <li>Tous les avis des clients ayant donné leur accord et validé leur questionnaire dans son intégralité seront publiés </li>
                        <li>Diffusion anonyme des avis : seuls le prénom et la première lettre du nom de famille sont affichés ainsi que la date de l’achat</li>
                        <li>Diffusion de la note de recommandation et du commentaire à la question ouverte associée </li>
                        <li>Les avis sont publiés dans un délai de 5 jours après la collecte et restent en ligne pendant 12 mois</li>
                        <li>Modération automatique des avis en cas de termes inappropriés (insultes, grossièretés, caractères inintelligibles)</li>
                        <li>Possibilité pour INTERSPORT de signaler manuellement un avis jugé inapproprié*. Cet avis sera ainsi relu et modéré le cas échéant par notre équipe de modérateurs</li>
                    </ul>
                    <p>* Voici la liste des motifs de signalements possibles en conformité avec la norme ISO :
            [Médiation - Renotation] Le client est d’accord pour mettre à jour son avis, promeut un autre service, appel à action en justice, Injures et grossièretés / comporte des injures et grossièretés
            conflit d’intérêt, diffamation, usurpation d’identité, note & commentaire pas cohérents, responsabilité civile / pénale, contenu malicieux, avis sans expérience, comporte des éléments non appropriés sur un autre contenu ou son auteur, infos personnelles, l’auteur demande le rejet, cherche à biaiser les résultats, spam, confus ou incompréhensible, sans rapport avec le sujet</p>
                </div>
            </div>
    );
  }
  
  export default Landing;
  