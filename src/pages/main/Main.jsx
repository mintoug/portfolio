import React from 'react'
import './Main.css'
import photo from '../../assets/images/images/photo.jpg'

function Main() {
  return (
    <section className ="main">
       <div className="image">
      
      <div className='name'>Anissa Mandhouj</div>
      <img src={photo} alt="profil" />
  </div>
    <div className="info">
        <h2>développeuse front-end </h2>
      <p><span className='bold'>«</span>Passionnée par les technologies du web et du digital j'ai fait une reconversion professionnelle de la médeçine vers le numérique, j'ai obtenu un titre rncp de développeuse d'applications front-end 
      et developpé plusieurs experiences dans le numérique et le marketing.
      <br/>
      distingué par ma motivation, organisation, bon relationnel.
      
      <br /><span className='bold'> A travers mon portfolio je présente mes principaux projets réalisés avec Openclassrooms . 
      </span> »</p>
      </div>
</section>
    
    
   

  )
}

export default Main