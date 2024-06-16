import './ButtonGrid.scss';
import { FilterLogoSVG } from '../../assets/FilterLogoSVG';

export const ButtonGrid = ({ buttonList=["Default"], onClickHandler }) => {
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
      <div className='filter'>
        <button >FILTRAR </button>
        <FilterLogoSVG/>
      </div>
    </div>
    
  );
};