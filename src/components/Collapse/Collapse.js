import React, { useState } from 'react';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false); // Gérer l'état ouvert/fermé

  return (
    <div className="collapse-container">
      {/* Bouton pour ouvrir/fermer la section */}
      <button onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3> <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
      </button>

      {/* Contenu de la section avec animation */}
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}style={{ maxHeight: isOpen ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
        {isOpen && children}
      </div>
    </div>
  );
};

export default Collapse;
