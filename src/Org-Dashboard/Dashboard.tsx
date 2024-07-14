import { AreaChartComponent } from "../components/org-dashboard/AreaChart";
import Layout from "./layout";
import DashCard from "../components/org-dashboard/DashCard";
import { HandCoins, Ticket } from "lucide-react";

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex justify-between my-5">
        <DashCard
          title="Total Revenue"
          desc=" form last month"
          percentage={20.5}
          subValue="LKR"
          Icon={HandCoins}
          value="250,436.00"
        />
        <DashCard
          title="Sold Tickets"
          desc=" form total tickets"
          percentage={65}
          subValue="+"
          Icon={Ticket}
          value="23,436"
        />
        <DashCard
          title="Sold Tickets"
          desc=" form total tickets"
          percentage={65}
          subValue="+"
          Icon={Ticket}
          value="23,436"
        />
      </div>
      <AreaChartComponent />
      <div className="flex my-5 space-x-5">
        <div className="w-[650px] h-96 bg-white rounded-lg shadow border border-main-800/opacity-20"></div>
        <div className="grow h-96 bg-white rounded-lg shadow border border-main-800/opacity-20"></div>
      </div>
    </Layout>
  );
};

export default Dashboard;
