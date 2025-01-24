import Button from "../Button";
import InputForm from "../Input";

const FormCheckout = () => {
  return (
    <div className="w-[90%] mx-auto">
      <form action="">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-gray">01</p>
            <h3 className="text-white font-medium">Personal Details</h3>
          </div>
          <div className="inline-flex gap-10 ">
            <InputForm
              type="text"
              title="First Name"
              name="name"
              placeholder="Jack"
              className="bg-navy text-white  placeholder:text-white border"
            />
            <InputForm
              type="text"
              title="Last Name"
              name="name"
              placeholder="Bauer"
              className="bg-navy text-white  placeholder:text-white border"
            />
          </div>
          <div className="inline-flex gap-10 ">
            <InputForm
              type="email"
              title="Email Address"
              name="email"
              placeholder="bGhQk@example.com"
              className="bg-navy text-white  placeholder:text-white border"
            />
            <InputForm
              type="text"
              title="Role"
              name="role"
              placeholder="Designer"
              className="bg-navy text-white  placeholder:text-white border"
            />
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <p className="text-gray">02</p>
            <h3 className="text-white font-medium">Payment Method</h3>
          </div>
          <div className="inline-flex gap-10 ">
            <div className=" w-1/2 border border-white rounded-lg inline-flex justify-between px-4 py-2 items-center">
              <div className="flex flex-row gap-4 items-center">
                <img src="/images/mastercard.svg" alt="mastercard" />
                <p className="text-white text-lg">Mastercard</p>
              </div>
              <input
                id="card"
                type="radio"
                name="card"
                className="appearance-none w-4 h-4  border border-white rounded-full bg-navy checked:bg-green checked:border-white "
              />
            </div>
            <div className=" w-1/2 border border-white rounded-lg inline-flex justify-between px-4 py-2 items-center">
              <div className="flex flex-row gap-4 items-center">
                <img src="/images/wallet.svg" alt="wallet" />
                <div className="flex flex-col">
                  <p className="text-white text-lg">Sewallet</p>
                  <p className="text-white text-sm">Balance: $50,000</p>
                </div>
              </div>
              <input
                id="card"
                type="radio"
                name="card"
                className="appearance-none w-4 h-4  border border-white rounded-full bg-navy checked:bg-green checked:border-white "
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Button classname="bg-green text-navy font-semibold w-auto ">
            Pay Now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormCheckout;
