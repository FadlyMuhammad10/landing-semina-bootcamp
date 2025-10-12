import { Link } from "react-router-dom";

const CardEvent = ({ event }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg flex flex-col justify-between">
      <img
        src={`${import.meta.env.VITE_HOST_IMAGE_DEV}/${event.image.name}`}
        alt="event"
        className="rounded-t-lg pb-5 w-full h-auto object-cover max-h-[200px]"
      />
      <div className="px-5 pb-5 h-full w-3/4">
        <Link to={`/details/${event._id}`}>
          <h5 className="text-lg font-medium  text-navy ">{event.title}</h5>
          <p className="text-sm text-gray my-3">{event.category.name}</p>
          <p className="text-sm text-navy mt-5 font-medium">
            {event.venueName},{" "}
            {new Date(event.date).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CardEvent;
