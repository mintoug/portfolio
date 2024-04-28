import React from 'react'
import './Main.css'
import photo from '../../assets/images/images/photo.jpg'

function Main() {
  return (
    <section className ="main">
    <div className="info">
        <h2>Anissa Mandhouj<br/>
        <span>développeuse front-end</span></h2>
      <p><span className='bold'>«</span>Passionnée par les technologies du web et du digital j'ai fait une reconversion professionnelle de la médeçine vers le numérique, j'ai obtenu un titre rncp de développeuse d'applications front-end 
      et developpé plusieurs experiences dans le numérique et le marketing.
      distingué par ma motivation, organisation, bon relationnel.
      
      <br /><span className='bold'> A travers mon portfolio je présente mes principaux projets réalisés avec Openclassrooms . 
      </span> »</p>

    </div>
    <div className="image">
        <img src={photo} alt="profil" />
    </div>
</section>
  )
}

export default Main