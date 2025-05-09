import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { type, title, name, placeholder, className, value, onChange, error } =
    props;

  return (
    <div className="flex flex-col gap-2 w-1/2">
      <Label htmlFor={name}>{title}</Label>
      <Input
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        classname={className}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputForm;
