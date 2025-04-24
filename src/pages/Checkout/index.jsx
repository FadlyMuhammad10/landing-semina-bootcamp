import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoTimerOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import FormCheckout from "../../components/FormCheckout";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { getData } from "../../utils/fetch";

const Checkout = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const { event } = JSON.parse(localStorage.getItem("payload1"));

    const fetchEvent = async () => {
      try {
        const res = await getData(`/events/${event}`);
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
  }, []);
  return (
    <>
      <div className="bg-navy ">
        <Navbar />
        <div className="container py-20 ">
          <h2 className="text-2xl font-medium text-white text-center">
            Invest In Yourself
          </h2>
          <div className="w-3/4 mx-auto">
            <div className=" flex flex-row justify-between items-center py-10">
              <img
                src={`${import.meta.env.VITE_HOST_IMAGE_DEV}/${
                  event?.image.name
                }`}
                alt="checkout"
                width={400}
                height={260}
                className="rounded-3xl"
              />

              <div className="flex flex-col gap-3 ">
                <p className="text-lg text-white font-semibold w-3/4">
                  {event?.tagline}
                </p>
                <div className="inline-flex items-center ">
                  <div className="bg-soft_navy rounded-full p-1">
                    <HiOutlineLocationMarker className="text-white  w-5 h-5" />
                  </div>
                  <p className="text-white ml-2">{event?.venueName}</p>
                </div>
                <div className="inline-flex items-center ">
                  <div className="bg-soft_navy rounded-full p-1">
                    <IoTimerOutline className="text-white  w-5 h-5" />
                  </div>
                  <p className="text-white ml-2">
                    {new Date(event?.date).toLocaleString("id-ID", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                      timeZone: "Asia/Jakarta",
                      timeZoneName: "short",
                    })}
                  </p>
                </div>
                <div className="inline-flex items-center ">
                  <div className="bg-soft_navy rounded-full p-1">
                    <MdOutlineDateRange className="text-white  w-5 h-5" />
                  </div>
                  <p className="text-white ml-2">
                    {new Date(event?.date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <div className="text-4xl text-white font-bold flex flex-col gap-1 ">
                {event?.tickets[0].price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                })}
                <div className=" border-b border-soft_gray" />
                <div className=" border-b border-soft_gray" />
              </div>
            </div>
            <FormCheckout />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
