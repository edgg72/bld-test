import { useEffect, useState } from "react";

import "./ButtonGrid.scss";
import { FilterLogoSVG } from "../../assets/FilterLogoSVG";
import { RadioButton } from "../RadioButton/RadioButton";
import strings from '../../strings/strings.json'

export const ButtonGrid = ({
  buttonList = ["Default"],
  onClickHandler,
  currentRangeSelection,
  selectedOption,
  setSelectedOption,
  handleApply
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }

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
        {isOpen &&
          <Modal
            isOpen={isOpen}
            onClose={closeModal}
            selectedOption={selectedOption}
            handleChange={handleChange}
            handleApply={handleApply}
          />
        }
    </div>
  );
};

export const Modal = ({ isOpen, onClose, selectedOption, handleChange, handleApply }) => {
  if (!isOpen) return null;

  return (
      <div className="modal">
        <div className='modal__close-section'>
          <p>FILTRAR</p> 
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="modal__options">
          <form action="">
          {Object.values(strings[0]).map((el, index) => (
            <RadioButton
              key={index}
              label={el}
              value={el}
              name={"options"}
              selectedOption={selectedOption}
              handleChange={handleChange}
            />
          ))}
          </form>

          <button onClick={handleApply} >Aplicar</button>
        </div>
      </div>
  );
};

