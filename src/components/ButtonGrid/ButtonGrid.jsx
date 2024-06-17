import { useEffect, useState } from "react";

import "./ButtonGrid.scss";
import { FilterLogoSVG } from "../../assets/FilterLogoSVG";

export const ButtonGrid = ({ buttonList = ["Default"], onClickHandler, currentRangeSelection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(null)

  const closeModal = () => setIsOpen(false);

  return (
    <div className="button-grid-container">
      <div className="button-grid-container__range">
        {buttonList.length > 0 &&
          buttonList.map((el, index) => (
            <button
              key={index}
              className={`button-grid-container__range--button ${currentRangeSelection === el ? "active" : ""}`}
              onClick={() => onClickHandler(el)}
            >
              {el}
            </button>
          ))}
      </div>
      <div className="filter" onClick={() => setIsOpen(true)}>
        <button>FILTRAR </button>
        <FilterLogoSVG />
      </div>
        {isOpen && <Modal isOpen={isOpen} onClose={closeModal} />}
    </div>
  );
};

export const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
      <div className="modal">
        <div className='modal__close-section'>
          <p>FILTRAR</p> 
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <p>Cobros con datafono</p>
        <p>Cobros con link de pago</p>
        <p>Ver todos</p>
        <button>Aplicar</button>
      </div>
  );
};
