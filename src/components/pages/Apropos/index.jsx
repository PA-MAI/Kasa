import React from 'react';
import Dropdown from '../../Dropdown';
import '../../../styles/css/apropos.css'

const fiabiliteContent = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
const respectContent = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
const serviceContent = "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.";
const securiteContent = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

function Apropos() {
    
    return (

        <div className="lgt__dropdown" style={{ flexDirection: 'column',
                                                alignItems:'center',
                                                alignContent:'center',
                                                width:'100%',
                                                height: 'auto',
                                                gap: 40 }}>


          <Dropdown 
            title="Fiabilité" 
            content={fiabiliteContent} 
            direction="column"
            fullWidth={true} // Applique la largeur à 80% pour la page "À propos"
          />
          <Dropdown 
            title="Respect" 
            content={respectContent} 
            direction="column"
            fullWidth={true} 
          />
          <Dropdown 
            title="Service" 
            content={serviceContent} 
            direction="column"
            fullWidth={true} 
          />
          <Dropdown 
            title="Sécurité" 
            content={securiteContent} 
            direction="column"
            fullWidth={true} 
          />
        </div>
        
      );
    };
    

export default Apropos