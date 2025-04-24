import { HiOutlineLocationMarker } from "react-icons/hi";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import { IoTimerOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { PiCheckLight } from "react-icons/pi";
import EventDataContainer from "../../components/EventDataContainer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../../utils/fetch";
import { useSelector } from "react-redux";

const Detail = () => {
  const auth = useSelector((state) => state.auth);
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("event", event);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await getData(`/events/${id}`);
        if (res.error) {
          setError(res.error);
        } else {
          setEvent(res.data); // sesuaikan struktur respons API-mu
        }
      } catch (error) {
        setError("Terjadi kesalahan saat memuat data event.");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const navigate = useNavigate();

  const handleJoin = () => {
    if (!auth.token) return navigate("/login");
    const payload = {
      event: id,
      tickets: [
        {
          ticketCategories: {
            type: event?.tickets[0].type,
            price: event?.tickets[0].price,
          },
          sumTicket: 1,
        },
      ],
    };
    localStorage.setItem("payload1", JSON.stringify(payload));
    navigate("/checkout");
  };

  if (loading) return <p>Loading detail event...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <div className="bg-navy h-screen">
        <Navbar />
        <div className="container flex flex-col justify-center max-w-4xl ">
          <img
            src={`${import.meta.env.VITE_HOST_IMAGE_DEV}/${event.image.name}`}
            alt="hero"
            className=" w-full mt-16 pb-16 max-h-[550px] object-cover"
          />
          <div className="relative flex flex-row justify-between">
            <h2 className="text-3xl text-white max-w-sm capitalize">
              {event.tagline}
            </h2>
            <div className="w-[350px]  bg-white rounded-lg shadow p-5">
              <p className="text-navy font-medium">Your Speaker</p>

              <div className="flex flex-row items-center my-5">
                <div className="w-12 h-12 rounded-full shadow-md shadow-black">
                  <img
                    src={`${import.meta.env.VITE_HOST_IMAGE_DEV}/${
                      event.talent.image.name
                    }`}
                    alt="story"
                    className=" rounded-full object-cover"
                  />
                </div>

                <div className="ml-5">
                  <p className="text-navy font-medium">{event.talent.name}</p>
                  <p className="text-gray">{event.talent.role}</p>
                </div>
              </div>

              <div className=" border-b border-soft_gray" />

              <div className="flex flex-col gap-5 mt-5">
                <p className="text-navy font-medium">Get Ticket</p>
                <div className="text-3xl text-navy font-bold inline-flex items-end gap-1">
                  {event?.tickets[0].price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  })}{" "}
                  <p className="text-gray text-sm mb-2 font-normal">/ person</p>
                </div>
                <div className="inline-flex items-center ">
                  <div className="bg-navy rounded-full p-1">
                    <HiOutlineLocationMarker className="text-green  w-5 h-5" />
                  </div>
                  <p className="text-navy ml-2">{event.venueName}</p>
                </div>
                <div className="inline-flex items-center ">
                  <div className="bg-navy rounded-full p-1">
                    <IoTimerOutline className="text-green  w-5 h-5" />
                  </div>
                  <p className="text-navy ml-2">
                    {new Date(event.date).toLocaleString("id-ID", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                      timeZone: "Asia/Jakarta",
                      timeZoneName: "short",
                    })}
                  </p>
                </div>
                <div className="inline-flex items-center ">
                  <div className="bg-navy rounded-full p-1">
                    <MdOutlineDateRange className="text-green  w-5 h-5" />
                  </div>
                  <p className="text-navy ml-2">
                    {new Date(event.date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <Button
                  classname="bg-green text-navy font-semibold w-full"
                  onClick={handleJoin}
                >
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
            <p className="  text-soft_navy">{event.about}</p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-xl text-navy font-semibold">Keypoints</h3>

            {event.keyPoint.map((item, index) => (
              <div key={index} className="inline-flex items-start">
                <div className="bg-navy rounded-full p-1">
                  <PiCheckLight className="text-green  w-5 h-5" />
                </div>
                <p className="text-navy ml-4 text-sm">{item}</p>
              </div>
            ))}
          </div>
          {/* <div className="flex flex-col gap-5">
            <h3 className="text-xl text-navy font-semibold">Maps Location</h3>
            <div className="w-[85%] h-[300px] border rounded-lg"></div>
          </div> */}
        </div>
      </div>
      <EventDataContainer type="detail" />
    </>
  );
};

export default Detail;
