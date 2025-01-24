const Input = (props) => {
  const { type, placeholder, name, classname } = props;

  return (
    <input
      id={name}
      type={type}
      name={name}
      className={`text-sm rounded-lg w-full py-2 px-2 ${classname}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
