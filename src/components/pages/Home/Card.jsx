//import { useState, useEffect } from 'react'
import '../../../styles/css/card.css'
import React from 'react';
import { Link } from 'react-router-dom'


function Card({ logement }) {
  const { cover, title, location,  rating} = logement;

return (
  <Link to={`/Logements/${logement.id}`}><div className="card">
    <img src={cover} alt={title} className="card__cover" />
    <div className="card__details">
        <h2>{title}</h2>
        <p>{location}</p>
        <div className="card__details--rating">
          <div className="rating">
            {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`fas fa-star ${index < parseInt(rating) ? 'fas red' : 'fas grey'}`}
            ></i>
              ))}
          </div>
        </div>
    </div>
    </div></Link>
);
}

export default Card