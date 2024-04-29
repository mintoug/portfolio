import React from 'react'
import './Projets.css';
import reservia from '../../assets/images/images/reservia.png';
import bills from '../../assets/images/images/bills.png';
import dashboard from '../../assets/images/images/dashbord.png';
import algorithme from '../../assets/images/images/algorithmes.png';
import gameon from '../../assets/images/images/gameon.png';
import Kasa from '../../assets/images/images/casa.png';
import fisheye from '../../assets/images/images/fisheye.png';
import ohmyfood from '../../assets/images/images/ohmyfood.png';
import argent from '../../assets/images/images/argent.png';
import hrnet from '../../assets/images/images/hrnet.png';
import learn from '../../assets/images/images/learn.png';
import portfolio from '../../assets/images/images/portfolio.png'


function Projets() {
  return (
   
    <section className="projets" >
    
    <div className="title">Projets sites web</div>
    <div className="content-">
        <div className="project-card">
            <div className="project-img">
                <img src={reservia} alt="" />
            </div>
            <div className="project-info">
                <p className="project-category">reservia</p>
                <strong className="project-title">
                <span >html-css-grid</span>
            
                <a href ="https://github.com/mintoug/anissaMandhouj_2_11032021.git"  className="more-details">plus de détails</a>
            
            </strong>

            </div>
        </div>
        <div className="project-card">
            <div className="project-img">
                <img src={gameon} alt="" />
            </div>
            <div className="project-info">
                <p className="project-category">Landing Page</p>
                <strong className="project-title">
                <span >JS-formulaire</span>
            
                <a href="https://github.com/mintoug/GameOn-website-FR"  className="more-details" >plus de détails</a>
            </strong>
            </div>
        </div>
        <div className="project-card">
            <div className="project-img">
                <img src={algorithme} alt="" />
            </div>
            <div className="project-info">
                <p className="project-category">algorithmes</p>
                <strong className="project-title">
                <span >javascript</span>
            
                <a href="https://github.com/mintoug/anissamandhouj-7-11032021"  className="more-details" >plus de détails</a>
            </strong>
            </div>
        </div>
        <div className="project-card">
            <div className="project-img">
                <img src={bills} alt="" />
            </div>
            <div className="project-info">
                <p className="project-category">facturation</p>
                <strong className="project-title">
                <span >test avec Jest</span>
            
                <a href="https://github.com/mintoug/anissamandhouj-9-11032021"  className="more-details"  >plus de détails</a>
            </strong>
            </div>
        </div>
        <div className="project-card">
            <div className="project-img">
                <img src= {dashboard} alt="" />
            </div>
            <div className="project-info">
                <p className="project-category">Dashbord</p>
                <strong className="project-title">
                <span > react rechart js</span>
            
                <a href="https://github.com/mintoug/AnissaMandhouj_12_11032021"  className="more-details" >plus de détails</a>
            </strong>
            </div>
        </div>
        <div className="project-card">
            <div className="project-img">
                <img src= {Kasa} alt="" />
            </div>
            <div className="project-info">
                <p className="project-category">kasa</p>
                <strong className="project-title">
                <span >React</span>
                <a href="https://github.com/mintoug/anissaMandhouj_11_23112021"  className="more-details" >plus de détails</a>
            </strong>
            </div>
        </div>
        <div className="project-card">
            <div className="project-img">
                <img src={ohmyfood} alt="" />
            </div>
            <div className="project-info">
                <p className="project-category">Ohmyfood</p>
                <strong className="project-title">
                <span >sass-animation</span>
                <a href="https://github.com/mintoug/anissamandhouj_3_11032021"  className="more-details" >plus de détails</a>
            </strong>
            </div>
        </div>
        <div className="project-card">
            <div className="project-img">
                <img src= {fisheye} alt="" />
            </div>
            <div className="project-info">
                <p className="project-category">Fisheye</p>
                <strong className="project-title">
                <span >JS Vanilla</span>
                <a href="https://github.com/mintoug/anissamandhouj_p6_11032021"  className="more-details">plus de détails</a>
            </strong>
            </div>
        </div>
        <div className="project-card">
            <div className="project-img">
                <img src={learn} alt="" />
            </div>
            <div className="project-info">
                <p className="project-category">learn@home</p>
                <strong className="project-title">
                <span >userstories figma...</span>
                <a href="https://github.com/mintoug/anissamandhouj-10-11032021"  className="more-details" >plus de détails</a>
            </strong>
            </div>
        </div>
        <div className="project-card">
            <div className="project-img">
                <img src={hrnet} alt="" />
            </div>
            <div className="project-info">
                <p className="project-category">HRnet</p>
                <strong className="project-title">
                <span >react npm</span>
                <a href="https://github.com/mintoug/anissa_mandhouj_14_08052022"  className="more-details">plus de détails</a>
            </strong>
            </div>
        </div>
        <div className="project-card">
            <div className="project-img">
                <img src={argent} alt="" />
            </div>
            <div className="project-info">
                <p className="project-category">argent-bank</p>
                <strong className="project-title">
                <span >Api Redux-Toolkit</span>
                <a href="https://github.com/mintoug/anissa-mandhouj-13-front-12032022"  className="more-details">plus de détails</a>
            </strong>
            </div>
        </div>
        <div className="project-card">
            <div className="project-img">
                <img src={portfolio} alt="" />
            </div>
            <div className="project-info">
                <p className="project-category">Portfolio</p>
                <strong className="project-title">
                <span >react</span>
                <a href="https://github.com/mintoug/portfolio"  className="more-details" >plus de détails</a>
            </strong>
            </div>
        </div>
    </div>
    
</section>


  )
}

export default Projets