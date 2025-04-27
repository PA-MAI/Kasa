import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../../styles/css/logements.css'


function Logements() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);

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

  if (!logement) return <p>Chargement...</p>;

  const { cover, title, location, description, rating, tags, pictures, equipments, host } = logement;
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
            <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="lgt__slider--image" />
            <div className="lgt__counter">{currentImage + 1} / {images.length} </div>
            <button className="lgt__chevron right" onClick={handleNextImage}>›</button>
        </div>

        <h2>{title}</h2>
        <h3>{location}</h3>
        <div className="lgt__host">
            <p>{host.name}<img src={host.picture} alt={host.name} /></p>
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

        <div className="lgt__dropdown">
            <div className="lgt__dropdown--button">
                <button onClick={() => setShowDescription(prev => !prev)}>
                Description <span>{showDescription ? '˅' : '˄'}</span>
                </button>
                <div className={`lgt__dropdown--content ${showDescription ? 'open' : ''}`}>
                <p>{description}</p>
                </div>
            </div>

            <div className="lgt__dropdown--button">
                <button onClick={() => setShowEquipments(prev => !prev)}>
                Équipements <span>{showEquipments ? '˅' : '˄'}</span>
                </button>
                <div className={`lgt__dropdown--content ${showEquipments ? 'open' : ''}`}>
                <ul>
                    {equipments.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Logements;









