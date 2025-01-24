function Button(props) {
  const { children, classname, onClick } = props;
  return (
    <button
      className={`${classname}  py-2 rounded-full font-sans min-w-[140px]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
