import '../../styles/css/card.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../../components/Rating'

function Card({ logement }) {
   const { cover, title, location, rating } = logement

   return (
      <Link to={`/Logements/${logement.id}`}>
         <article className="card">
            <img src={cover} alt={title} className="card__cover" />
            <div className="card__details">
               <h2>{title}</h2>
               <p>{location}</p>
               <div className="card__details--rating">
                  <Rating rating={rating} />
               </div>
            </div>
         </article>
      </Link>
   )
}

export default Card
