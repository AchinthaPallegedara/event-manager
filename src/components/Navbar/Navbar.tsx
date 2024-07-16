import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between bg-white h-20 px-10 mt-5">
      <div className="">
        <img
          src="/wildflowerslogo.svg"
          alt="Wildflowers Logo"
          className="w-[260px] "
        />
      </div>
      <div className="flex space-x-[32px] font-bold text-main-800 text-xl">
        <Link to={"#"}>
          <p>All Events</p>
        </Link>
        <Link to={"#"}>
          <p>Contact us</p>
        </Link>
        <Link to={"#"}>
          <p>About us</p>
        </Link>
      </div>
      <div className="space-x-5">
        <Link to={"#"}>
          <Button
            variant="ghost"
            className="rounded-2xl px-7 font-bold text-lg h-[45px] text-main-800"
          >
            Sign in
          </Button>
        </Link>
        <Link to={"/dashboard/123"}>
          <Button className="rounded-2xl px-7 font-bold text-lg h-[45px] bg-main-800 ">
            Sign up
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
