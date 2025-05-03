import React from 'react'
import Dropdown from '../../components/Dropdown'
import BannerModel from '../../components/BannerModel'
import bannerImage from '../../assets/img/montagnes.jpg'
import '../../styles/css/banner.css'

const items = [
   {
      title: 'Fiabilité',
      content:
         'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
   },
   {
      title: 'Respect',
      content:
         'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
   },
   {
      title: 'Service',
      content:
         'La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.',
   },
   {
      title: 'Sécurité',
      content:
         "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
   },
]

function Apropos() {
   return (
      <div
         className="kasa__banner"
         style={{
            maxWidth: '1280px',
            margin: '5%',
         }}
      >
         <BannerModel image={bannerImage} />

         <div
            className="lgt__dropdown"
            style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               gap: 40,
               width: '100%',
               height: 'auto',
            }}
         >
            {items.map(({ title, content }) => (
               <Dropdown
                  key={title}
                  title={title}
                  content={content}
                  direction="column"
                  fullWidth={true}
               />
            ))}
         </div>
      </div>
   )
}

export default Apropos
