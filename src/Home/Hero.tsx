import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Play, Ticket } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex w-full h-screen  justify-between  mt-10 ">
      <div className=" flex  flex-col  justify-center ">
        <Ticket className="size-12 -rotate-12 text-main-300" />
        <h1 className="text-8xl leading-[5.5rem] font-black text-main-800 ">
          Let’s Book Your Ticket Today
        </h1>
        <p className="w-[500px] font-light text-xl mt-5 text-slate-600">
          Your all in one event planning solution. From seamless scheduling to
          real-time updates, we ensure your events are organised and memorable.
        </p>
        <div className="flex space-x-5 mt-5">
          <Link to={"/dashboard/123"}>
            <Button className="rounded-2xl px-7 font-bold text-lg h-[45px] bg-main-800 hover:bg-main-500">
              View events
            </Button>
          </Link>
          <Link to={"#"} className="">
            <div className="rounded-full  font-bold text-lg p-3 bg-main-800 text-white  hover:bg-main-500">
              <Play />
            </div>
          </Link>
        </div>
      </div>
      <div className=" h-full flex space-x-5 ">
        <div className="space-y-5">
          <div className="flex bg-green-500 w-[315px] h-[300px] rounded-2xl">
            <img
              src="/hero1.svg"
              alt="hero1"
              className="w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
          <div className="flex bg-green-200 w-[315px] h-[480px] rounded-2xl">
            <img
              src="/hero2.svg"
              alt="hero2"
              className="w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
        <div className="space-y-5">
          <div className="flex bg-green-800 w-[400px] h-[480px] rounded-2xl">
            <img
              src="/hero3.svg"
              alt="hero3"
              className="w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
          <div className="flex bg-green-400 w-[400px] h-[300px] rounded-2xl">
            <img
              src="/hero4.svg"
              alt="hero4"
              className="w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
