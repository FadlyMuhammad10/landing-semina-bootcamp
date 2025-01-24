const TitleSection = (props) => {
  const { text, title } = props;
  return (
    <div className="flex flex-col gap-4">
      <span className="bg-gradient-to-r from-[#F32FB8] to-[#FDD7BE] text-transparent bg-clip-text font-semibold">
        {text}
      </span>
      <h3 className="text-2xl font-medium text-navy">{title}</h3>
    </div>
  );
};

export default TitleSection;
