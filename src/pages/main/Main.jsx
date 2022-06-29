import React from 'react'
import './Main.css'
import photo from '../../assets/images/images/photo.png'

function Main() {
  return (
    <section className ="main">
    <div className="info">
        <h2>Je suis Anissa Mandhouj<br/>
        <span>développeuse front-end</span></h2>
      <p><span className='bold'>«</span>Après une première expérience dans le domaine de la santé, je suis passionnée par les technologies du web . Mes débuts remontaient à l'ère de la programmation en Pascal et aux premiers HTML et css, au lycée.
        
      <br /><span className='bold'> A travers mon portfolio je présente mes principaux projets réalisés avec Openclassrooms . Je suis autonome, curieuse, rigoureuse et je souhaite intégrer une équipe de travail avec laquelle on avance vers de nouveaux défis.</span> »</p>

    </div>
    <div className="image">
        <img src={photo} alt="profil" />
    </div>
</section>
  )
}

export default Main