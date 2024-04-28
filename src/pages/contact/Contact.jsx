import React from 'react';
import './Contact.css';
import contact from '../../assets/images/images/contact.jpg'

function Contact() {
  return (
      <div className='content'>
      <div className="img">
    <img src={contact} alt="" />
    </div>
    <div className='contact'>
        
        <h2><a href="tel:+33783710662">0783710662</a> </h2>
        <h2><a href="mailto:anissa.mandhouj.pro@gmail.com"> anissa.mandhouj.pro@gmail.com</a> </h2>
        <h3>Paris et périphérie</h3>
          
        <div className="social-icons">
            <a href="https://github.com/mintoug" ><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/anissa-mandhouj-b562481a6/"  ><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://twitter.com/AnissaMandhouj" ><i className="fa-brands fa-twitter"></i></a>
        </div>

    </div>
    </div>
  )
}

export default Contact