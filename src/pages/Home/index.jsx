import { useState, useEffect } from 'react'
import '../../styles/css/index.css'
import Banner from './Banner'
import Gallery from './Gallery'
import Error from '../Error'

function Home() {
   // L'état pour stocker les logements
   const [logements, setLogements] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   // Charge les cards depuis le fichier JSON
   useEffect(() => {
      setIsLoading(true) // début du chargement
      fetch('/data/logements.json')
         .then((res) => res.json())
         .then((data) => {
            setLogements(data)
            setIsLoading(false) //Chargement terminé
         })
         .catch((error) => {
            console.error('Erreur lors du chargement des logements', error)
            setIsLoading(false)
         })
   }, [])
// si le réseau est lent , l'application affiche Chargement.. si pas de logement affiche 404
   if (isLoading) return <div>Chargement...</div>
   if (logements.length === 0) return <Error />

   return (
      <div className="kasa__parent">
         <div className="kasa__top">
            <Banner />
         </div>
         <div className="kasa__gallery">
            {/* Passage des logements à la galerie */}
            <Gallery logements={logements} />
         </div>
      </div>
   )
}

export default Home
