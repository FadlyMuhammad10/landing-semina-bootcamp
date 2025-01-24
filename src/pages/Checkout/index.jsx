import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoTimerOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import Navbar from "../../components/Navbar";
import FormCheckout from "../../components/FormCheckout";

const Checkout = () => {
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
                src="/images/banner-1.png"
                alt="checkout"
                width={400}
                height={260}
                className="rounded-3xl"
              />

              <div className="flex flex-col gap-3 ">
                <p className="text-lg text-white font-semibold w-3/4">
                  Start Your Design Career With Design Sprint
                </p>
                <div className="inline-flex items-center ">
                  <div className="bg-soft_navy rounded-full p-1">
                    <HiOutlineLocationMarker className="text-white  w-5 h-5" />
                  </div>
                  <p className="text-white ml-2">Gowork, Bandung</p>
                </div>
                <div className="inline-flex items-center ">
                  <div className="bg-soft_navy rounded-full p-1">
                    <IoTimerOutline className="text-white  w-5 h-5" />
                  </div>
                  <p className="text-white ml-2">15.00 PM WIB</p>
                </div>
                <div className="inline-flex items-center ">
                  <div className="bg-soft_navy rounded-full p-1">
                    <MdOutlineDateRange className="text-white  w-5 h-5" />
                  </div>
                  <p className="text-white ml-2">22 Agustus 2022</p>
                </div>
              </div>
              <div className="text-4xl text-white font-bold flex flex-col gap-1 ">
                $2,980
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
