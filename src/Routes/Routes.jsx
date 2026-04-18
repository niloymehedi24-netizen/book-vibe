import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import Books from "../Pages/Homepage/Books";
import Homepage from "../Pages/Homepage/Homepage";
import ErrorPage from "../Pages/ErrorPage//ErrorPage";

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
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
