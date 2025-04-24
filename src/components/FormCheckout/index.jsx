import { useState } from "react";
import { useSelector } from "react-redux";
import { z } from "zod";
import { postData } from "../../utils/fetch";
import { checkoutSchema } from "../../utils/zodSchema";
import Button from "../Button";
import InputForm from "../Input";

const FormCheckout = () => {
  const auth = useSelector((state) => state.auth);

  const [state, setState] = useState({
    first_name: auth.user.firstName || "",
    last_name: auth.user.lastName || "",
    email: auth.user.email || "",
  });
  const [errors, setErrors] = useState({});

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const validatedData = checkoutSchema.parse(state);
      setErrors({});

      const payloadCheckout = {
        personalDetail: {
          firstName: validatedData.first_name,
          lastName: validatedData.last_name,
          email: validatedData.email,
        },
        ...JSON.parse(localStorage.getItem("payload1")),
        payment: "666e98b57778f562fbee5e7a",
      };

      const res = await postData("/checkout", payloadCheckout);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = {};
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
        setErrors(fieldErrors); // simpan error per field
      } else {
        console.log("Error lainnya:", error);
      }
    }
  };
  return (
    <div className="w-[90%] mx-auto">
      <form onSubmit={submitHandler}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-gray">01</p>
            <h3 className="text-white font-medium">Personal Details</h3>
          </div>
          <div className="inline-flex gap-10 ">
            <InputForm
              onChange={inputHandler}
              value={state.first_name}
              type="text"
              title="First Name"
              name="first_name"
              placeholder="Jack"
              className="bg-navy text-white  placeholder:text-white border"
              error={errors.first_name}
            />

            <InputForm
              onChange={inputHandler}
              value={state.last_name}
              type="text"
              title="Last Name"
              name="last_name"
              placeholder="Bauer"
              className="bg-navy text-white  placeholder:text-white border"
              error={errors.last_name}
            />
          </div>

          <div className="inline-flex gap-10 ">
            <InputForm
              onChange={inputHandler}
              value={state.email}
              type="email"
              title="Email Address"
              name="email"
              placeholder="bGhQk@example.com"
              className="bg-navy text-white  placeholder:text-white border"
              error={errors.email}
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
