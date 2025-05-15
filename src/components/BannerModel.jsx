//import React from 'react';
import '../styles/css/banner.css';

function BannerModel({ image, text }) {
    return (
        
            <div className='kasa__banner--banner'>
                <img src={image} alt={text} className='kasa__banner--img' />
                {text && <h1>{text}</h1>} {/* Affiche le texte seulement s'il est fourni */}
            </div>
        
    );
}

export default BannerModel;