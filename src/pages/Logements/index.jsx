import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../styles/css/logements.css'
import Error from '../Error'
import Dropdown from '../../components/Dropdown'
import Rating from '../../components/Rating'
import Slider from '../../components/Slider'

function Logements() {
   const { id } = useParams()
   const [logement, setLogement] = useState(null)
   const [isLoading, setIsLoading] = useState(true)
   

   useEffect(() => {
      setIsLoading(true) // début du chargement
      fetch('/data/logements.json')
         .then((res) => res.json())
         .then((data) => {
            const selected = data.find((item) => item.id === id)
            setLogement(selected)
            setIsLoading(false) // chargement terminé
         })
         .catch((err) => console.error('Erreur chargement JSON:', err))
         setIsLoading(false)
   }, [id])
// si le réseau est lent , l'application affiche Chargement.. si pas de logement affiche 404
   if (isLoading) return <div>Chargement...</div>
   if (!logement) return <Error />

   const {
      title,
      location,
      description,
      rating,
      tags,
      equipments,
      host,
   } = logement


   return (
      <div className="lgt__area">
         {/* Reprend le composant Slider */}
         <Slider slider={Slider} />

         <div className="lgt__area--details">
            <div className="lgt__area--h3tag">
               <div className="lgt__area--title">
                  <h2>{title}</h2>
                  <h3>{location}</h3>
               </div>
               <span className="lgt__details--tags">
               {tags.map((tag, index) => (
                  <span key={index} className="tag">
                     {tag}
                  </span>
               ))}
               </span>
            </div>

            {/* Reprend le composant rating */}
            <div className="lgt__details--rating">
               <div className="lgt__host">
               <span>{host.name}</span>
                  <span>
                     <img src={host.picture} alt={'Photo de ' + host.name} />
                  </span>
                  </div>
                     <Rating rating={rating} />
                  </div>
            </div>

         {/* Reprend le composant dropdown et personalisation du texte*/}
         <div className="lgt__dropdown" style={{ flexDirection: 'row' }}>
            <Dropdown
               title="Description"
               content={description}
               direction="row"
            />
            <Dropdown
               title="Équipements"
               content={equipments}
               direction="column"
               isList={true} // On indique que c'est une liste
            />
         </div>
      </div>
   )
}

export default Logements
