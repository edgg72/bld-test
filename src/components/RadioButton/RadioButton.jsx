export const RadioButton = ({ name, value, handleChange, label, selectedOption }) => {
  console.log(value)
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
