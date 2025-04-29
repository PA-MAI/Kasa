import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../../styles/css/logements.css'
import Error from '../Error/';
import Dropdown from '../../Dropdown';

// const [showDescription, setShowDescription] = useState(false);
// const [showEquipments, setShowEquipments] = useState(false);
function Logements() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
 

  useEffect(() => {
    fetch('/data/logements.json')
      .then(res => res.json())
      .then(data => {
        const selected = data.find(item => item.id === id);
        setLogement(selected);
        setCurrentImage(0); // reset image index
      })
      .catch(err => console.error('Erreur chargement JSON:', err));
  }, [id]);

 if (!logement) return <div><Error /></div>;

  const {  title, location, description, rating, tags, pictures, equipments, host } = logement;
  const images = [ ...pictures];

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="lgt__area">
        <div className="lgt__area--slider">
            <button className="lgt__chevron left" onClick={handlePrevImage}>‹</button>
            <img src={images[currentImage]} alt={`${currentImage + 1}`} className="lgt__slider--image" />
            <div className="lgt__counter">{currentImage + 1} / {images.length} </div>
            <button className="lgt__chevron right" onClick={handleNextImage}>›</button>
        </div>
        <div className="lgt__area--title">
          <div>
            <h2>{title}</h2>
            <h3>{location}</h3>
          </div>
          <div className="lgt__host">
              <span>{host.name}</span><span><img src={host.picture} alt={'Photo de ' + host.name} /></span>
          </div>
        </div>
            <div className="lgt__details--tags">
            {tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
            ))}
            </div>

        <div className="lgt__details--rating">
          {[...Array(5)].map((_, index) => (
            <i key={index} className={`fas fa-star ${index < parseInt(rating) ? 'fas red' : 'fas grey'}`}></i>
          ))}
        </div>

        <div className="lgt__dropdown" style={{ flexDirection: 'row' }}>
          <Dropdown 
            title="Description"
            content={description}
            direction="row" // Ici on spécifie que c'est en ligne
          />
          <Dropdown 
            title="Équipements"
            content={equipments}
            direction="column" // En ligne
            isList={true} // On indique que c'est une liste
          />
        </div>
    </div>
  );
}

export default Logements;









