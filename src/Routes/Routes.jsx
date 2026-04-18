import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import Books from "../Pages/Homepage/Books";
import Homepage from "../Pages/Homepage/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        index: "true",
        element: <Homepage></Homepage>,
      },
      {
        path: "/books",
        element: <Books></Books>,
      },
    ],
  },
]);
