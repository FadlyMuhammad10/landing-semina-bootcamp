import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { type, title, name, placeholder, className } = props;
  return (
    <div className="flex flex-col gap-2 w-1/2">
      <Label htmlFor={name}>{title}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        classname={className}
      />
    </div>
  );
};

export default InputForm;
