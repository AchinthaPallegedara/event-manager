import { LogOut } from "lucide-react";
import { leftNav } from "../../constants";
import { Button } from "../ui/button";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const LeftMenuBar = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex w-72 bg-white h-screen border-r border-sky-100 shadow py-5 flex-col justify-between max-sm:hidden   max-lg:w-[60px] z-10 fixed">
      <div>
        <Link to={"/"}>
          <img
            src={"/wildflowerslogo.svg"}
            alt="logo"
            className="w-64 flex justify-center mx-auto max-lg:hidden"
          />
          <img
            src="/wildflowersmoblogo.svg"
            alt="mobile-logo"
            className="hidden max-lg:flex justify-center mx-auto"
          />
        </Link>

        <div className="mt-16">
          {leftNav.map((item, index) => {
            const isActive =
              (pathname === "/" && item.href === "/") || pathname === item.href;
            return (
              <Link to={item.href} key={index}>
                <div className="w-full flex ">
                  <div
                    className={`h-16 w-full flex items-center justify-start   text-xl font-semibold  pl-16  max-lg:pl-2 ${
                      isActive ? "text-white bg-main-300" : "text-main-800"
                    }`}
                  >
                    <item.icon
                      className={`size-6 mx-2  ${
                        isActive ? "text-sky-100" : "text-main-500"
                      }`}
                    />
                    <p className="max-lg:hidden">{item.title}</p>
                  </div>
                  <div
                    className={`w-2.5 h-16 bg-main-800 ml-auto  ${
                      isActive ? "" : "opacity-0"
                    }`}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mx-2 ">
        <Link to={"/"}>
          <Button className="w-full bg-main-800 text-xl h-[50px] max-lg:p-0">
            <p className="max-lg:hidden">Logout</p>
            <LogOut className="mx-2 size-5 max-lg:mx-0" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LeftMenuBar;
