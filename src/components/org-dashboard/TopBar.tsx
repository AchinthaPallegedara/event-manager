import { MoonStar, Sun, User } from "lucide-react";
import { useTheme } from "../theme-provider";

const TopBar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex  h-[10vh] w-full items-center justify-end">
      <div className="flex space-x-2 mx-10">
        <div
          className=" flex w-12 h-12  rounded-full border-2 border-main-800 dark:border-white hover:border-main-500 items-center justify-center"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun className="size-6 mx-2 text-main-800 dark:text-white" />
          ) : (
            <MoonStar className="size-6 mx-2 text-main-800" />
          )}
        </div>

        <div className=" flex w-12 h-12 bg-main-800 rounded-full border-2 border-main-800 hover:border-main-500  items-center justify-center ">
          <User className="size-6 mx-2 text-white" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
