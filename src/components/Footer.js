import React from 'react'
import '../CSS/Footer.css';

function Footer() {
  return (
    <div className='Footer'>
        <div className='footer__icon__bar'>
            <div className='footer__icon__card'>
                <img src={require('../images/logofusée2.png')} width='75' height='75' alt='logo livraison rapide'></img>
                <h3>Livraison express</h3>
                <p> Livraison entre 2 et 4 jours en France métropolitaine</p>
            </div>
            <div className='footer__icon__card'>
            <img src={require('../images/logoplanet2.png')} width='75' height='75' alt='logo livraison rapide'></img>
                <h3>Livraison dans plus de 180 pays</h3>
            </div>
            <div className='footer__icon__card'>
            <img src={require('../images/logogem2.png')} width='75' height='75' alt='logo livraison rapide'></img>
                <h3>Qualité certifiée</h3>
            </div>
            <div className='footer__icon__card'>
            <img src={require('../images/logoflower2.png')} width='75' height='75' alt='logo livraison rapide'></img>
                <h3>Marque de confiance</h3>
                <p> Déja plus de 7000 ventes certifiées sur Cardmarket</p>
            </div>
            <div className='footer__icon__card'>
            <img src={require('../images/logoshield2.png')} width='75' height='75' alt='logo livraison rapide'></img>
                <h3>Vente & paiement sécurisé</h3>
                <div className='buybutton'>En savoir +</div>
            </div>
        </div>
    </div>
  )
}

export default Footer