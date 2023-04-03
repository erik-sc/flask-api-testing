import {
    createBrowserRouter,
  } from "react-router-dom";
import { Home } from "../ui/screens/home/home.screen";
  

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  