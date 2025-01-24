import CardEvent from "../CardEvent";
import Footer from "../Footer";
import StoryBanner from "../StoryBanner";
import TitleSection from "../TitleSection";

const EventDataContainer = (props) => {
  const { type } = props;
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
            <CardEvent />
          </div>
        </div>
      </div>
      <StoryBanner />
      <Footer />
    </>
  );
};

export default EventDataContainer;
