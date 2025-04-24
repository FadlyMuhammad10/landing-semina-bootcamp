import { useState } from "react";
import Button from "../Button";
import { z } from "zod";
import { otpSchema, signUpSchema } from "../../utils/zodSchema";
import { useNavigate, useSearchParams } from "react-router-dom";
import { postData, putData } from "../../utils/fetch";

const FormRegister = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  const [otp, setOtp] = useState("");
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
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

    if (keyword === "otp") {
      try {
        const validatedData = otpSchema.parse({ otp });
        setErrors({});

        putData("/active", {
          otp: validatedData.otp,
          email: state.email,
        }).then((res) => {
          if (res.data) {
            navigate("/login");
          }
        });
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
    } else {
      try {
        const validatedData = signUpSchema.parse(state);
        setErrors({});
        postData("/auth/signup", {
          firstName: validatedData.first_name,
          lastName: validatedData.last_name,
          email: validatedData.email,
          password: validatedData.password,
        }).then((res) => {
          if (res.data) {
            navigate("/register?keyword=otp");
          }
        });
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
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="w-full bg-white rounded-3xl my-10 p-5">
          <div className="flex flex-col gap-5">
            {keyword === "otp" ? (
              <>
                <div className="flex flex-col gap-2">
                  <label htmlFor="otp" className="block text-navy text-sm">
                    OTP
                  </label>

                  <input
                    onChange={(e) => setOtp(e.target.value)}
                    value={otp}
                    type="text"
                    id="otp"
                    name="otp"
                    className="text-sm rounded-lg w-full py-2 px-2 outline-none text-navy  placeholder:text-navy placeholder:opacity-50 border border-navy  focus:border-green "
                    placeholder="123456"
                  />
                  {errors.otp && (
                    <p className="text-red-500 text-sm">{errors.otp}</p>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="first_name"
                    className="block text-navy text-sm"
                  >
                    First Name
                  </label>

                  <input
                    onChange={inputHandler}
                    value={state.first_name}
                    type="text"
                    id="first_name"
                    name="first_name"
                    className="text-sm rounded-lg w-full py-2 px-2 outline-none text-navy  placeholder:text-navy placeholder:opacity-50 border border-navy  focus:border-green "
                    placeholder="John"
                  />
                  {errors.first_name && (
                    <p className="text-red-500 text-sm">{errors.first_name}</p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="last_name"
                    className="block text-navy text-sm"
                  >
                    Last Name
                  </label>

                  <input
                    onChange={inputHandler}
                    value={state.last_name}
                    type="text"
                    name="last_name"
                    id="last_name"
                    className="text-sm rounded-lg w-full py-2 px-2 outline-none text-navy  placeholder:text-navy placeholder:opacity-50 border border-navy  focus:border-green "
                    placeholder="Doe"
                  />
                  {errors.last_name && (
                    <p className="text-red-500 text-sm">{errors.last_name}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="block text-navy text-sm">
                    Email Address
                  </label>

                  <input
                    onChange={inputHandler}
                    value={state.email}
                    type="email"
                    name="email"
                    id="email"
                    className="text-sm rounded-lg w-full py-2 px-2 outline-none text-navy  placeholder:text-navy placeholder:opacity-50 border border-navy  focus:border-green "
                    placeholder="jE8H3@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="block text-navy text-sm">
                    Password (6 characters)
                  </label>

                  <input
                    onChange={inputHandler}
                    value={state.password}
                    type="password"
                    name="password"
                    id="password"
                    className="text-sm rounded-lg w-full py-2 px-2 outline-none text-navy  placeholder:text-navy placeholder:opacity-50 border border-navy focus:border-green "
                    placeholder="******"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>
              </>
            )}

            <Button
              type="submit"
              classname="bg-green text-navy font-semibold w-auto "
              // onClick={submitHandler}
            >
              {keyword === "otp" ? "Verify" : "Sign Up"}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormRegister;
