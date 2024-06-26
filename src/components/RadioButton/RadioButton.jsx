export const RadioButton = ({ name, value, handleChange, label, selectedOption }) => {
  return (
    <div>
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={selectedOption === value}
        onChange={handleChange}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
};
