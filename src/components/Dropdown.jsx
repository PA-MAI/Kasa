import React, { useState } from 'react';

const Dropdown = ({ title, content, direction = 'column', isList = false, fullWidth = false }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => setShowContent(prev => !prev);

  return (
    <div
      className={`lgt__dropdown--button ${direction}`}
      style={{ width: fullWidth ? '80%' : '40%' }}  // Applique 80% de largeur si fullWidth est true
    >
      <button onClick={toggleContent}>
        {title} <span>{showContent ? '˅' : '˄'}</span>
      </button>
      <div className={`lgt__dropdown--content ${showContent ? 'open' : ''}`}>
        {isList ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default Dropdown;