const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="block text-white text-sm">
      {children}
    </label>
  );
};
export default Label;
