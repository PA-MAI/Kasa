import React from 'react';
import Card from './Card';

// Galerie qui reçoit les logements en props et passe chaque logement à Card
function Gallery({ logements }) {
    return (
      <div className="gallery">
        {logements.length === 0 ? (
          <p>Chargement des logements...</p> // Si aucun logement n'est chargé
        ) : (
          logements.map((logement) => (
            <Card key={logement.id} logement={logement} />
          ))
        )}
      </div>
    );
  }
  
  export default Gallery