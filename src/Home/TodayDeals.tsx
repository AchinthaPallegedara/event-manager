import { ChevronLeft, ChevronRight } from "lucide-react";
import DealCard from "../components/cards/DealCard";

const TodayDeals = () => {
  return (
    <div className="flex flex-col  my-20 w-full">
      <div className="flex w-full justify-between items-center">
        <div className="space-x-5 flex">
          <div className="rounded-full  font-bold text-lg p-3 bg-main-800 text-white  hover:bg-main-500 cursor-pointer">
            <ChevronLeft />
          </div>
          <div className="rounded-full  font-bold text-lg p-3 bg-main-800 text-white  hover:bg-main-500 cursor-pointer">
            <ChevronRight />
          </div>
        </div>
        <h3 className="text-7xl font-semibold text-main-800">
          <span className="text-main-500">Today's </span>Deals
        </h3>
      </div>
      <div className="mt-20  flex space-x-10 ">
        <DealCard
          ImgLink="/hero1.svg"
          EventName="GOLDEN LEGENDS WITH BAPPALA    "
          EventDate="Jul 13, 2024"
          EventTime="06.30 PM"
          EventLocation="Nelum Pokuna indoor Theater"
          BuyLink="/"
          BeforePrice="5000.00"
          DiscountedPrice="4000.00"
        />
        <DealCard
          ImgLink="/hero2.svg"
          EventName="GOLDEN LEGENDS WITH BAPPALA    "
          EventDate="Jul 13, 2024"
          EventTime="06.30 PM"
          EventLocation="Nelum Pokuna indoor Theater"
          BuyLink="/"
          BeforePrice="2300.00"
          DiscountedPrice="1000.00"
        />
      </div>
    </div>
  );
};

export default TodayDeals;
