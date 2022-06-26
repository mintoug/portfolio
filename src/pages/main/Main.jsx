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
        {/* <link to="#projets" class="main-btn">Voir mes projets</link>
        <div class="social-icons">
            <link to="https://github.com/mintoug" target="_blank"><i class="fa-brands fa-github"></i></link>
            <link to="https://www.linkedin.com/in/anissa-mandhouj-b562481a6/"target="_blank" ><i class="fa-brands fa-linkedin"></i></link>
            <link to="#"><i class="fa-brands fa-facebook" target="_blank"></i></link>
            <link to="https://twitter.com/AnissaMandhouj" target="_blank" ><i class="fa-brands fa-twitter"></i></link>
        </div> */}

    </div>
    <div className="image">
        <img src={photo} alt="profil" />
    </div>
</section>
  )
}

export default Main