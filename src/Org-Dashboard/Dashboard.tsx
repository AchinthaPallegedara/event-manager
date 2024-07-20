import { AreaChartComponent } from "../components/org-dashboard/AreaChart";
import Layout from "./layout";
import DashCard from "../components/org-dashboard/DashCard";
import {
  CornerRightUp,
  HandCoins,
  MapPin,
  PhoneCall,
  Ticket,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { recentEvents, recentSales } from "../constants";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const userId = "123";
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
        <Card className="w-[600px] h-grow bg-white">
          <CardHeader className="flex flex-row justify-between">
            <div className="">
              <CardTitle className=" text-main-800">Your Events</CardTitle>
              <CardDescription className="text-main-300">
                Recent events you were add
              </CardDescription>
            </div>
            <Link to={`/dashboard/${userId}/events`}>
              <Button className="bg-main-800 hover:bg-main-500">
                View All <CornerRightUp className="size-4 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>A list of your recent events.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] text-base text-main-300">
                    Event
                  </TableHead>

                  <TableHead className="text-right text-base text-main-300">
                    Date
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentEvents.map((event, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      <div className="flex flex-col">
                        <span className="text-main-800 text-lg font-semibold">
                          {event.eventName}
                        </span>
                        <span className="text-main-300 text-sm flex items-center">
                          <MapPin className="size-3.5 mr-1" />
                          {event.location}
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className="text-right text-lg text-main-800 font-semibold">
                      {event.date}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="grow">
          <CardHeader className="flex flex-row justify-between">
            <div className="">
              <CardTitle className=" text-main-800">Recent Sale</CardTitle>
              <CardDescription className="text-main-300">
                Recent tickets you were sold
              </CardDescription>
            </div>
            <Link to={`/dashboard/${userId}/sales`}>
              <Button className="bg-main-800 hover:bg-main-500">
                All Sales <CornerRightUp className="size-4 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <Table>
              {/* <TableCaption>A list of your recent sales.</TableCaption> */}

              <TableBody>
                {recentSales.map((sale, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      <div className="flex">
                        <img
                          src={sale.customerImg}
                          alt="user"
                          loading="lazy"
                          className="w-12 h-12 rounded-full mr-3"
                        />
                        <div className="flex flex-col">
                          <span className="text-main-800 text-base font-semibold line-clamp-1">
                            {sale.customername}
                          </span>
                          <span className="text-main-300 text-sm flex items-center ">
                            <PhoneCall className="size-3.5 mr-1" />
                            {sale.phone}
                          </span>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell className="text-right text-lg text-main-800 font-semibold">
                      <span className="text-main-500 text-sm">LKR. </span>
                      {sale.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
