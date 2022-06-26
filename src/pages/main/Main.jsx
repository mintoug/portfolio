import React from 'react'
import './Main.css'
import photo from '../../assets/images/images/photo.png'

function Main() {
  return (
    <section className ="main">
    <div className="info">
        <h2>Je suis Anissa Mandhouj<br/>
        <span>développeuse front-end</span></h2>
        <h3>applications javascript - React</h3>
      <p><span className='bold'>‟</span> Ma Passion pour le Web me domine malgré ma première expérience dans le domaine de la santé puis biologie de la santé, je me suis lancée dans la quête d'écouter mes envies , en effet mes débuts remontaient à l'ère de Pascal et premier HTML, au lycée, depuis le regret me poursuit jusqu'au jour ou j'ai décidé de faire ma conversion ; 
        Je suis Développeuse Front-end et fière de l'être ! <br /><span className='bold'> A Travers mon Portfolio Je présente mes principaux projets réalisés, Ma passion est sans limite, je suis autonome, curieuse, rigoureuse et je souhaite intégrer une équipe de travail avec laquelle on avance vers de nouveaux défis.</span> ❞</p>

    </div>
    <div className="image">
        <img src={photo} alt="profil" />
    </div>
</section>
  )
}

export default Main