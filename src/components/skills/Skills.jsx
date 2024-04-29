import React from "react";
import './Skills.css'


function Skills() {
    return (<>
        <div className="content--">
            <div className="competences">Compétences</div>
        </div>
        <div className="contenant-items">
            <div className="contenant-item">
                <h3 className="categorie">soft-skills</h3>
                <p className="categorie-p">
                    * Motivation<br/>
                    * Autonomie<br/>
                    * sens d'organisation<br/>*bon relationnel<br/>
                </p>

            </div>
            <div className="contenant-item">
            <h3 className="categorie">Numériques</h3>
                <p className="caterorie-p">
                    * Développeuse web<br/>
                    * maitrise de plusieurs logiciels et outils bureautiques<br/>
                    * veille informatonnelle continue<br/>

                </p>
            </div>
            <div className="contenant-item">
            <h3 className="categorie">marketing</h3>
                <p className="caterorie-p">
                    * premières expériences des méthodes de marketing.<br/>
                    * première expérience dans la gestion de projet marketing :<br/> négocation, vente , achat...<br/>
                </p>
            </div>
            <div className="contenant-item">
            <h3 className="categorie">Médicales</h3>
                <p className="caterorie-p">
                    * études en médeçine<br/>
                    * stages internes en médeçine<br/>
                    * compétences transvdedrsales et spécifiques du domaine de la santé<br/>
                </p>
                </div>
        </div>
        </>
    )
  }
  
  export default Skills