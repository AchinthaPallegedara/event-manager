import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface EventCardProps {
  ImgLink: string;
  EventName: string;
  EventDate: string;
  EventTime: string;
  EventLocation: string;
  TicketLowestPrice: number;
  BuyLink: string;
}

const EventCard = ({
  ImgLink,
  EventName,
  EventDate,
  EventTime,
  EventLocation,
  TicketLowestPrice,
  BuyLink,
}: EventCardProps) => {
  return (
    <div className="relative flex flex-col w-[300px] h-[470px]  rounded-2xl shadow border   overflow-hidden hover:shadow-xl mb-10">
      <div className="p-3">
        <div className="h-[270px] rounded-2xl bg-green-500">
          <img
            src={ImgLink}
            alt={EventName}
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />
        </div>
        <h3 className="font-semibold  text-lg text-main-800 w-full line-clamp-1 mt-2">
          {EventName}
        </h3>
        <div className="flex items-center justify-start text-main-300 space-x-1 mt-2 ">
          <Calendar className="size-5 pb-0.5 text-main-500 " />
          <p className="text-main-300">
            <span>{EventDate}</span> • <span>{EventTime}</span>
          </p>
        </div>
        <div className="flex items-center justify-start text-main-300 space-x-1 ">
          <MapPin className="size-5 pb-0.5 text-main-500 " />
          <p className="text-main-300 line-clamp-1">{EventLocation}</p>
        </div>
        <p className="mt-2">
          <span className="text-main-500 text-xl font-bold ">
            {TicketLowestPrice}
            {" LKR"}
          </span>
          <span className="text-main-300 text-base font-bold"> upwards</span>
        </p>
      </div>
      <Link to={BuyLink}>
        <div className="bg-main-500 w-full h-12 absolute bottom-0 flex items-center justify-center hover:bg-main-800">
          <p className="text-white text-base font-semibold">Buy Tickets</p>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
