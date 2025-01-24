import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import { useState } from "react";
import { postData } from "../../utils/fetch";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/auth/actions";

const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await postData("/auth/signin", state);
      dispatch(userLogin(res.data.data.token));
      navigate("/");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="w-full bg-white rounded-3xl my-10 p-5">
          <div className="flex flex-col gap-5">
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
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="block text-navy text-sm">
                Password
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
            </div>
            <Button
              type="submit"
              classname="bg-green text-navy font-semibold w-auto"
            >
              Sign In
            </Button>
            <Button classname="bg-navy text-white font-medium w-auto">
              <Link to="/register">Create New Account</Link>
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormLogin;
