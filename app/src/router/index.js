import {
    createBrowserRouter,
  } from "react-router-dom";
import { Home, Login, Auth } from "../ui/screens";
  

export const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path:"/",
      element: <Login/>
    },
    {
      path:"/callback",
      element:<Auth />
    }
  ]);
  