import { Link } from "react-router-dom";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { userLogout } from "../../redux/auth/actions";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const type = auth.token ? "login" : "default";
  const handleLogout = () => {
    dispatch(userLogout());
    setDropdownOpen(false);
  };

  return (
    <>
      <header className="py-6">
        <div className="container flex justify-between items-center">
          <img src="/images/logo.svg" alt="logo" className="cursor-pointer" />
          <ul className="hidden md:flex gap-6 text-gray">
            <Link
              to="/"
              className="cursor-pointer gap-[6px] flex items-center hover:text-white hover:border-b hover:border-green"
            >
              <p>Home</p>
            </Link>
            <Link
              href={"/"}
              className="cursor-pointer gap-[6px] flex items-center hover:text-white hover:border-b hover:border-green"
            >
              <p>Browse</p>
            </Link>
            <Link
              href={"/"}
              className="cursor-pointer gap-[6px] flex items-center hover:text-white hover:border-b hover:border-green"
            >
              <p>Stories</p>
            </Link>
            <Link
              href={"/"}
              className="cursor-pointer gap-[6px] flex items-center hover:text-white hover:border-b hover:border-green"
            >
              <p>About</p>
            </Link>
          </ul>
          {type === "login" ? (
            <div className="relative">
              <p
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="text-white capitalize cursor-pointer"
              >
                Hi, {auth.user?.firstName}
              </p>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md py-2 w-32 z-50">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Button classname="bg-soft_navy text-white">
              <Link to="/login">Sign In</Link>
            </Button>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
