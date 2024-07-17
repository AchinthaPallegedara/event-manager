import { ChevronLeft, ChevronRight } from "lucide-react";

import EventCard from "../components/cards/EventCard";

const ThisMonth = () => {
  return (
    <div className="flex flex-col  my-20 w-full">
      <div className="flex w-full justify-between items-center">
        <h3 className="text-7xl font-semibold text-main-800">
          What’s Happening <span className="text-main-500">This Month</span>
        </h3>
        <div className="space-x-5 flex">
          <div className="rounded-full  font-bold text-lg p-3 bg-main-800 text-white  hover:bg-main-500 cursor-pointer">
            <ChevronLeft />
          </div>
          <div className="rounded-full  font-bold text-lg p-3 bg-main-800 text-white  hover:bg-main-500 cursor-pointer">
            <ChevronRight />
          </div>
        </div>
      </div>
      <div className="mt-10 justify-between flex ">
        <EventCard
          ImgLink="/hero1.svg"
          EventName="GOLDEN LEGENDS WITH SARIT ggg"
          EventDate="2022-10-10"
          EventTime="10:00 AM"
          EventLocation="Nelum Pokuna indoor Theater"
          TicketLowestPrice={1000}
          BuyLink="/buy/1"
        />
        <EventCard
          ImgLink="/hero2.svg"
          EventName="Event 2"
          EventDate="2022-10-11"
          EventTime="11:00 AM"
          EventLocation="Location 2"
          TicketLowestPrice={2000}
          BuyLink="/buy/2"
        />
        <EventCard
          ImgLink="/hero3.svg"
          EventName="Event 3"
          EventDate="2022-10-12"
          EventTime="12:00 PM"
          EventLocation="Location 3"
          TicketLowestPrice={3000}
          BuyLink="/buy/3"
        />
        <EventCard
          ImgLink="/hero4.svg"
          EventName="Event 4"
          EventDate="2022-10-13"
          EventTime="01:00 PM"
          EventLocation="Location 4"
          TicketLowestPrice={4000}
          BuyLink="/buy/4"
        />
      </div>
    </div>
  );
};

export default ThisMonth;
