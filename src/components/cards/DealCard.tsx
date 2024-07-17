import { ArrowRightToLine, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface DealCardProps {
  ImgLink: string;
  EventName: string;
  EventDate: string;
  EventTime: string;
  EventLocation: string;
  BuyLink: string;
  BeforePrice?: string;
  DiscountedPrice: string;
}

const DealCard = ({
  ImgLink,
  EventName,
  EventDate,
  EventTime,
  EventLocation,
  BuyLink,
  BeforePrice,
  DiscountedPrice,
}: DealCardProps) => {
  return (
    <div className=" flex-none w-[760px] h-[580px] bg-main-500 rounded-2xl relative ">
      <img
        src={ImgLink}
        alt="hero1"
        className="w-full h-full object-cover rounded-2xl brightness-50 hover:brightness-75 transition-all"
        loading="lazy"
      />
      <div className="flex flex-col w-96 h-24 bg-white/10 hover:bg-white/30 rounded-2xl absolute top-10 left-8 items-start justify-center p-5 transition-all ">
        <div className="flex items-center justify-start text-main-300 space-x-1 mt-2 ">
          <Calendar className="size-5 pb-0.5 text-main-200" />
          <p className="text-main-50 text-xl">
            <span>{EventDate}</span> • <span>{EventTime}</span>
          </p>
        </div>
        <div className="flex items-center justify-start text-main-300 space-x-1 ">
          <MapPin className="size-5 pb-0.5 text-main-200 " />
          <p className="text-main-50 line-clamp-1 text-xl">{EventLocation}</p>
        </div>
      </div>
      <h3 className="absolute  bottom-12 left-8 text-3xl font-bold w-[470px] line-clamp-2 text-main-50 transition-all">
        {EventName}
      </h3>
      <h5 className="absolute text-white bottom-32 left-8 text-5xl font-bold   transition-all">
        <span className="text-4xl text-main-200">LKR.</span> {DiscountedPrice}
        {"  "}
        <span className="text-3xl line-through mx-2">{BeforePrice}</span>
      </h5>
      <Link to={BuyLink}>
        <ArrowRightToLine className="text-white absolute bottom-12 right-8 size-12" />
      </Link>
    </div>
  );
};

export default DealCard;
