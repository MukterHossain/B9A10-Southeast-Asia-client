import {createBrowserRouter} from "react-router-dom";
import MainRoot from "./MainRoot";
import Home from "../componen/Home";
import AllTouristSpot from "../componen/AllTouristSpot";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";





export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainRoot></MainRoot>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/allTourist',
          element: <AllTouristSpot></AllTouristSpot>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },

      ]
    },
  ]);