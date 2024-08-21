import EventCard from "../components/cards/EventCard";
import { thisMonthEvents } from "../constants";
import { Carousel } from "../components/ui/apple-cards-carousel";

const ThisMonth = () => {
  const cards = thisMonthEvents.map((event, index) => (
    <EventCard
      key={index}
      ImgLink={event.imgLink}
      EventName={event.eventName}
      EventDate={event.date}
      EventTime={event.time}
      EventLocation={event.location}
      TicketLowestPrice={event.ticketLowestPrice}
      BuyLink={event.buyLink}
    />
  ));
  return (
    <div className="flex flex-col   w-full">
      <div className="mt-10 justify-between flex ">
        <Carousel
          items={cards}
          titleType="type1"
          title={
            <>
              What’s Happening <span className="text-main-500">This Month</span>
            </>
          }
        />
      </div>
    </div>
  );
};

export default ThisMonth;
