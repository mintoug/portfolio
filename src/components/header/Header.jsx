import React from 'react';
import  { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
        <div className="home"><NavLink to="/portfolio" >Acceuil</NavLink></div>
         <div className='navigation'>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/experience">Parcours</NavLink>
              <NavLink to="/Projets">Projets</NavLink>
              
         </div>
    </header>
  )
}

export default Header;