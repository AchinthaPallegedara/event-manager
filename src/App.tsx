import { Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./Home/Hero";
import ThisMonth from "./Home/ThisMonth";
import TodayDeals from "./Home/TodayDeals";
import { Button } from "./components/ui/button";
import AllEvents from "./Home/AllEvents";
import Others from "./Home/Others";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <div className="mx-[5vw]">
        <Navbar />
        <Hero />
        <ThisMonth />
        <TodayDeals />
        <div className="flex w-full h-[310px] bg-main-800 rounded-2xl my-10 justify-between">
          <div className="flex flex-col space-y-5 px-10 justify-center ">
            <h3 className="text-white text-4xl font-bold">
              Transfer & Resend Tickets
            </h3>
            <p className="w-[560px] text-white text-base font-normal">
              Get registered with Wild Flowers to transfer and receive
              E-Ticket(s). pread the joy by seamlessly transferring tickets to
              friends and family
            </p>
            <div className="space-x-4">
              <Link to={"/dashboard/123"}>
                <Button className="rounded-2xl px-7 font-bold text-lg h-[45px] bg-main-500 hover:bg-main-300 hover:text-main-800">
                  Resend e-Ticket
                </Button>
              </Link>
              <Link to={"/dashboard/123"}>
                <Button className="rounded-2xl px-7 font-bold text-lg h-[45px] bg-white hover:bg-main-300 text-main-800">
                  Transfer Ticket
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/transfer.svg"
              alt="transfer"
              className="w-[450px] h-[300px]"
            />
          </div>
        </div>
        <AllEvents />
        <Others />
      </div>
      <Footer />
    </>
  );
};

export default App;
