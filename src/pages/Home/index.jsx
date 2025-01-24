import EventDataContainer from "../../components/EventDataContainer";
import HeroBanner from "../../components/HeroBanner";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <>
      <section className="bg-navy">
        <Navbar />
        <HeroBanner />
      </section>
      <section className="h-[30vh] translate-y-[90%]  mt-20">
        <div className="container text-center max-w-4xl">
          <div className="flex flex-col gap-10">
            <p className="text-gray text-center">
              Events held by top & biggest global companies
            </p>
            <div className="inline-flex justify-between">
              <img src="/images/apple.svg" alt="apple" />
              <img src="/images/adobe.svg" alt="adobe" />
              <img src="/images/slack.svg" alt="slack" />
              <img src="/images/spotify.svg" alt="spotify" />
              <img src="/images/google.svg" alt="google" />
            </div>
          </div>
        </div>
        <EventDataContainer type="landing" />
      </section>
    </>
  );
};

export default Home;
