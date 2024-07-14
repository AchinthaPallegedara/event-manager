import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Org-Dashboard/Dashboard.tsx";
import Settings from "./Org-Dashboard/Settings.tsx";
import Customers from "./Org-Dashboard/Customers.tsx";
import Events from "./Org-Dashboard/Events.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404</div>,
  },
  {
    path: "/dashboard/:orgId",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/:orgId/settings",
    element: <Settings />,
  },
  {
    path: "/dashboard/:orgId/customers",
    element: <Customers />,
  },
  {
    path: "/dashboard/:orgId/events",
    element: <Events />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
