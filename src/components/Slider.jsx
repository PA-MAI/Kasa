import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Error from '../pages/Error'


function Slider() {
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

   const {pictures} = logement
   const images = [...pictures]

   const handlePrevImage = () => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
   }

   const handleNextImage = () => {
      setCurrentImage((prev) => (prev + 1) % images.length)
   }

    return (
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
    )
}

export default Slider