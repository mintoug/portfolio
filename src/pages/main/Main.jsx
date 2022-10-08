import React from 'react'
import './Main.css'
import photo from '../../assets/images/images/photo.jpg'

function Main() {
  return (
    <section className ="main">
    <div className="info">
        <h2>Je suis Anissa Mandhouj<br/>
        <span>développeuse front-end</span></h2>
      <p><span className='bold'>«</span>Je suis passionnée par les technologies du web, ce qui m'a amené à faire une reconversion professionnelle, j'ai réussi mon titre professionnel de développeuse d'applications front-end. J'aspire intégrer une entreprise pour avançer mon expérience professionnelle par des nouveaux défis et par l'apprentissage du back-end. 
        
      <br /><span className='bold'> A travers mon portfolio je présente mes principaux projets réalisés avec Openclassrooms . Je suis autonome, curieuse, rigoureuse et je souhaite intégrer une équipe de travail avec laquelle on avance vers de nouveaux défis.</span> »</p>

    </div>
    <div className="image">
        <img src={photo} alt="profil" />
    </div>
</section>
  )
}

export default Main