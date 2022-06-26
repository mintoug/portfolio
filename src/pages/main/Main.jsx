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
      

    </div>
    <div className="image">
        <img src={photo} alt="profil" />
    </div>
</section>
  )
}

export default Main