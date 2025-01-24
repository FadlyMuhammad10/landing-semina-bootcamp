import { Link } from "react-router-dom";
import Button from "../Button";

const Navbar = (props) => {
  const { type } = props;
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
            ""
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
