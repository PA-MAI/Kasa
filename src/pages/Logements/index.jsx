import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../styles/css/logements.css'
import Error from '../Error'
import Dropdown from '../../components/Dropdown'
import Rating from '../../components/Rating'
function Logements() {
   const { id } = useParams()
   const [logement, setLogement] = useState(null)
   const [isLoading, setIsLoading] = useState(true)
   const [currentImage, setCurrentImage] = useState(0)

   useEffect(() => {
      setIsLoading(true) // début du chargement
      fetch('/data/logements.json')
         .then((res) => res.json())
         .then((data) => {
            const selected = data.find((item) => item.id === id)
            setLogement(selected)
            setCurrentImage(0) // reset image index
            setIsLoading(false) // chargement terminé
         })
         .catch((err) => console.error('Erreur chargement JSON:', err))
         setIsLoading(false)
   }, [id])

   if (isLoading) return <div>Chargement...</div>
   if (!logement) return <Error />

   const {
      title,
      location,
      description,
      rating,
      tags,
      pictures,
      equipments,
      host,
   } = logement
   const images = [...pictures]

   const handlePrevImage = () => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
   }

   const handleNextImage = () => {
      setCurrentImage((prev) => (prev + 1) % images.length)
   }

   return (
      <div className="lgt__area">
         <div className="lgt__area--slider">
            {/* Affiche les chevrons seulement s'il y a plus d'une image */}
            {images.length > 1 && (
               <button className="lgt__chevron left" onClick={handlePrevImage}>
                  ‹
               </button>
            )}
            <img
               src={images[currentImage]}
               alt={`${currentImage + 1}`}
               className="lgt__slider--image"
            />
            {/* Affiche le compteur uniquement s'il y a plus d'une image */}
            {images.length > 1 && (
               <div className="lgt__counter">
                  {currentImage + 1} / {images.length}
               </div>
            )}

            {/* Affiche le chevron droit seulement s'il y a plus d'une image */}
            {images.length > 1 && (
               <button className="lgt__chevron right" onClick={handleNextImage}>
                  ›
               </button>
            )}
         </div>
         <div className="lgt__area--title">
            <div>
               <h2>{title}</h2>
               <h3>{location}</h3>
            </div>
            <div className="lgt__host">
               <span>{host.name}</span>
               <span>
                  <img src={host.picture} alt={'Photo de ' + host.name} />
               </span>
            </div>
         </div>
         <div className="lgt__area--details">
            <span className="lgt__details--tags">
            {tags.map((tag, index) => (
               
               <span key={index} className="tag">
                  {tag}
                  </span>
                 
            ))}
            </span>
            {/* Reprend le composant rating */}
            <div className="lgt__details--rating">
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
