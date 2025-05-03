import { useState, useEffect } from 'react'
import '../../styles/css/index.css'
import Banner from './Banner'
import Gallery from './Gallery'

function Home() {
   // L'état pour stocker les logements
   const [logements, setLogements] = useState([])

   // Charge les logements depuis le fichier JSON
   useEffect(() => {
      fetch('/data/logements.json')
         .then((res) => res.json())
         .then((data) => setLogements(data))
         .catch((error) =>
            console.error('Erreur lors du chargement des logements', error),
         )
   }, [])

   return (
      <div className="kasa__parent">
         <div className="kasa__top">
            <Banner />
         </div>
         <div className="kasa__gallery">
            {/* passage des logements à la galerie */}
            <Gallery logements={logements} />
         </div>
      </div>
   )
}

export default Home
