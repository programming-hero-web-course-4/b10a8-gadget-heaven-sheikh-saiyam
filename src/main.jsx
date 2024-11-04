import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Statistics from "./components/Statistics/Statistics";
import Dashboard from "./components/Dashboard/Dashboard";
import AboutUs from "./components/AboutUs/AboutUs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./components/HomePage/HomePage";
import Gadgets from "./Gadgets/Gadgets";
import GadgetDetails from "./Gadgets/GadgetDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("../category.json"),
        children: [
          {
            path: "/",
            element: <Gadgets></Gadgets>,
            loader: () => fetch("../gadgets.json"),
          },
          {
            path: "/:category",
            element: <Gadgets></Gadgets>,
            loader: () => fetch("../gadgets.json"),
          },
        ],
      },
      {
        path: "/gadgets/:product_id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("../gadgets.json"),
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
