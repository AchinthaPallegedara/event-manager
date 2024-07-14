import React from "react";
import LeftMenuBar from "../components/org-dashboard/LeftMenuBar";
import TopBar from "../components/org-dashboard/TopBar";
import { ThemeProvider } from "../components/theme-provider";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex  min-h-screen">
        <LeftMenuBar />
        <div className="flex flex-col w-full ml-72 max-lg:ml-[60px] max-sm:ml-0 bg-main-50">
          <TopBar />
          <div className="flex-grow mx-10 ">{children}</div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
