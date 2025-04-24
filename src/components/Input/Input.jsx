const Input = (props) => {
  const { type, placeholder, name, classname, value, onChange } = props;

  return (
    <input
      id={name}
      value={value}
      onChange={onChange}
      type={type}
      name={name}
      className={`text-sm rounded-lg w-full py-2 px-2 ${classname}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
