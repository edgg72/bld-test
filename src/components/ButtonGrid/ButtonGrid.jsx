import './ButtonGrid.scss';

export const ButtonGrid = ({ buttonList=["Default"], onClickHandler }) => {
  return (
    <div className='button-grid-container'>
      {buttonList.length > 0 && buttonList.map((el, index) => (
        <button
          key={index}
          className='button-grid-container__button'
          onClick={() => onClickHandler(el)}
        >{el}</button>
      ))}
    </div>
    
  );
};