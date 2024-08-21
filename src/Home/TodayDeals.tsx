import DealCard from "../components/cards/DealCard";
import { todaysDeals } from "../constants";
import { Carousel } from "../components/ui/apple-cards-carousel";

const TodayDeals = () => {
  const dealCards = todaysDeals.map((deal, index) => (
    <DealCard
      key={index}
      ImgLink={deal.imgLink}
      EventName={deal.EventName}
      EventDate={deal.EventDate}
      EventTime={deal.EventTime}
      EventLocation={deal.EventLocation}
      BuyLink={deal.BuyLink}
      BeforePrice={deal.BeforePrice}
      DiscountedPrice={deal.DiscountedPrice}
    />
  ));
  return (
    <div className="flex flex-col w-full">
      <div className="mt-20  flex  ">
        <Carousel
          items={dealCards}
          titleType="type2"
          title={
            <>
              <span className="text-main-500">Today's </span>Deals
            </>
          }
        />
      </div>
    </div>
  );
};

export default TodayDeals;
