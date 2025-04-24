import { useDispatch, useSelector } from "react-redux";
import CardEvent from "../CardEvent";
import Footer from "../Footer";
import StoryBanner from "../StoryBanner";
import TitleSection from "../TitleSection";
import { useEffect } from "react";
import { fetchEvents } from "../../redux/events/actions";

const EventDataContainer = (props) => {
  const { type } = props;

  const dispatch = useDispatch();
  const { events, loading, error } = useSelector((state) => state.event);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  if (loading) {
    return <div className="loading-spinner">Loading events...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }
  return (
    <>
      <div className=" bg-[#F5F7F9] relative mt-20">
        <div className="container py-20">
          {type === "landing" ? (
            <>
              <TitleSection text="Grow Today" title="Featured Events" />
            </>
          ) : (
            <>
              <TitleSection text="Next One" title="Similar Events" />
            </>
          )}

          <div className="flex flex-row gap-4 mt-10">
            {events.map((event, index) => (
              <CardEvent event={event} key={index} />
            ))}
          </div>
        </div>
      </div>
      <StoryBanner />
      <Footer />
    </>
  );
};

export default EventDataContainer;
