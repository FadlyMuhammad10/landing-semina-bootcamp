import { HiOutlineLocationMarker } from "react-icons/hi";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import { IoTimerOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { PiCheckLight } from "react-icons/pi";
import EventDataContainer from "../../components/EventDataContainer";

const Detail = () => {
  return (
    <>
      <div className="bg-navy h-screen">
        <Navbar />
        <div className="container flex flex-col justify-center max-w-4xl ">
          <img
            src="/images/banner-1.png"
            alt="hero"
            className=" w-full mt-16 pb-16"
          />
          <div className="relative flex flex-row justify-between">
            <h2 className="text-3xl text-white max-w-sm">
              Start Your Design Career With Design Sprint
            </h2>
            <div className="w-[350px]  bg-white rounded-lg shadow p-5">
              <p className="text-navy font-medium">Your Speaker</p>

              <div className="flex flex-row items-center my-5">
                <img
                  src="/images/speaker.png"
                  alt="story"
                  className="w-15 h-15 rounded-full"
                />

                <div className="ml-5">
                  <p className="text-navy font-medium">Figma</p>
                  <p className="text-gray">UI Designer</p>
                </div>
              </div>

              <div className=" border-b border-soft_gray" />

              <div className="flex flex-col gap-5 mt-5">
                <p className="text-navy font-medium">Get Ticket</p>
                <div className="text-4xl text-navy font-bold inline-flex items-end gap-1">
                  $2,980{" "}
                  <p className="text-gray text-sm mb-2 font-normal">/ person</p>
                </div>
                <div className="inline-flex items-center ">
                  <div className="bg-navy rounded-full p-1">
                    <HiOutlineLocationMarker className="text-green  w-5 h-5" />
                  </div>
                  <p className="text-navy ml-2">Gowork, Bandung</p>
                </div>
                <div className="inline-flex items-center ">
                  <div className="bg-navy rounded-full p-1">
                    <IoTimerOutline className="text-green  w-5 h-5" />
                  </div>
                  <p className="text-navy ml-2">15.00 PM WIB</p>
                </div>
                <div className="inline-flex items-center ">
                  <div className="bg-navy rounded-full p-1">
                    <MdOutlineDateRange className="text-green  w-5 h-5" />
                  </div>
                  <p className="text-navy ml-2">22 Agustus 2022</p>
                </div>
                <Button classname="bg-green text-navy font-semibold w-full">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-4xl ">
        <div className="w-full max-w-md my-20 flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <h3 className="text-xl text-navy font-semibold">Event Details</h3>
            <p className="  text-soft_navy">
              Most realtors and investors are using Social Media (Facebook and
              Google) <span className="font-bold">ineffectively because</span>{" "}
              they don{"'"}t know what they{"'"}re doing or to start. They spend
              hours and hours trying different things and getting nowhere. This
              makes them feel like giving up on marketing altogether. <br />
            </p>
            <p className="text-soft_navy">
              We are a group of professionals who have decided to help people
              making travel experiences{" "}
              <span className="font-bold">whenever they want</span> and wherever
              they are. Our virtual tours have as their topic the beauties of
              the ancient world, such as Ancient Egypt or Ancient Rome, Art and
              History.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-xl text-navy font-semibold">Keypoints</h3>

            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="inline-flex items-start">
                <div className="bg-navy rounded-full p-1">
                  <PiCheckLight className="text-green  w-5 h-5" />
                </div>
                <p className="text-navy ml-4 text-sm">
                  Hours trying different things and getting nowhere makes them
                  feel like giving up on marketing altogether.
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-xl text-navy font-semibold">Maps Location</h3>
            <div className="w-[85%] h-[300px] border rounded-lg"></div>
          </div>
        </div>
      </div>
      <EventDataContainer type="detail" />
    </>
  );
};

export default Detail;
