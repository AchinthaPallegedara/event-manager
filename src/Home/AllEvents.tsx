import EventCard from "../components/cards/EventCard";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const AllEvents = () => {
  return (
    <div className="flex flex-col  my-20 w-full">
      <div className="flex w-full justify-between items-center">
        <h3 className="text-7xl font-semibold text-main-800">
          All<span className="text-main-500"> Events</span>
        </h3>
        <Link to={"/dashboard/123"}>
          <Button className="rounded-2xl px-7 font-bold text-lg h-[45px] bg-main-800 hover:bg-main-300 text-white hover:text-main-800">
            View More
          </Button>
        </Link>
      </div>
      <div className="mt-10 justify-between flex flex-wrap">
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
        <EventCard
          ImgLink="/hero4.svg"
          EventName="Event 4"
          EventDate="2022-10-13"
          EventTime="01:00 PM"
          EventLocation="Location 4"
          TicketLowestPrice={4000}
          BuyLink="/buy/4"
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
        <EventCard
          ImgLink="/hero4.svg"
          EventName="Event 4"
          EventDate="2022-10-13"
          EventTime="01:00 PM"
          EventLocation="Location 4"
          TicketLowestPrice={4000}
          BuyLink="/buy/4"
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

export default AllEvents;
