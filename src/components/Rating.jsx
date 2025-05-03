import React from 'react'
 

function Rating({rating}) {
    //const {rating} = logement
    return (

        
            <div className="rating">
                {[...Array(5)].map((_, index) => (
                    <i
                        key={index}
                        className={`fas fa-star ${index < parseInt(rating) ? 'fas red' : 'fas grey'}`}
                    ></i>
                ))}
            </div>
        
    )
}
export default Rating