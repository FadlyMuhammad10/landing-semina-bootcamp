const CardEvent = () => {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg flex flex-col justify-between">
      <img
        src="/images/event-1.png"
        alt="event"
        className="rounded-t-lg pb-5"
      />
      <div className="px-5 pb-5 h-full w-3/4">
        <a href="/details">
          <h5 className="text-lg font-medium  text-navy ">
            Learn Jira for Sprint Design Venture
          </h5>
          <p className="text-sm text-gray my-3">Product Design</p>
          <p className="text-sm text-navy mt-5 font-medium">
            Bandung, 22 Jan 2022
          </p>
        </a>
      </div>
    </div>
  );
};

export default CardEvent;
