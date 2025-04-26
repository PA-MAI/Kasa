import { useState, useEffect } from 'react'
import '../../../styles/css/card.css'
import React from 'react';


function Card({ logement }) {
const { cover, title, location, description, rating, tags, pictures } = logement;

// Fonction pour gérer les clics sur les miniatures (dans la console pour l'instant)
const handlePictureClick = (picture) => {
    console.log('Image cliquée:', picture); // Ici tu pourrais ajouter de la logique pour afficher l'image en grand
};

return (
    <a className="card">
    <img src={cover} alt={title} className="card__cover" />
    <div className="card__details">
        <h2>{title}</h2>
        <p>{location}</p>
        <div className="card__details--rating">
        <span>{'⭐'.repeat(parseInt(rating))}</span> {/* Affiche les étoiles */}
        </div>
       
        
    </div>
    </a>
);
}
//<p>{description}</p>
//* <div className="card__details--tags">
// {tags.map((tag, index) => (
//     <span key={index} className="tag">{tag}</span> // Affiche les tags
// ))}
// </div> */}
//* <div className="card__details--pictures">
        // {pictures.map((picture, index) => (
        //     <img
        //     key={index}
        //     src={picture}
        //     alt={`Picture ${index + 1}`}
        //     onClick={() => handlePictureClick(picture)} // Appel de la fonction au clic
        //     className="card__details--thumbnail"
        //     />
        // ))}
        // </div> */}
export default Card