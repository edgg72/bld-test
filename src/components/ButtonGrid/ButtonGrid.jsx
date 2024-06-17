import { useEffect, useState } from 'react';

import './ButtonGrid.scss';
import { FilterLogoSVG } from '../../assets/FilterLogoSVG';

export const ButtonGrid = ({ buttonList=["Default"], onClickHandler }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <div className='button-grid-container'>
      <div className='button-grid-container__range'>
        {buttonList.length > 0 && buttonList.map((el, index) => (
          <button
            key={index}
            className='button-grid-container__button'
            onClick={() => onClickHandler(el)}
          >{el}</button>
        ))}
      </div>
      <div className='filter' onClick={() => setIsOpen(!isOpen)}>
        <button>FILTRAR </button>
         <Modal isOpen={isOpen} onClose={closeModal}/>
        <FilterLogoSVG/>
      </div>
    </div>
    
  );
};

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>Close</button>
        <div className="modal-content">
          {/* Add your modal content here */}
          <h2>Popup Modal Content</h2>
          <p>This is a simple popup modal.</p>
        </div>
      </div>
    </div>
  );
};