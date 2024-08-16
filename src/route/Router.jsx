import { createBrowserRouter } from "react-router-dom";
import MainRoot from "./MainRoot";
import Home from "../componen/Home";
import AllTouristSpot from "../componen/AllTouristSpot";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import PrivateRoute from "./PrivateRoute";
import MyList from "../componen/MyList";
import UpdateSpot from "../pages/UpdateSpot";
import SportViewDetails from "../pages/SportViewDetails";
import AllSportDetails from "../pages/AllSportDetails"
import CountriesShowDetails from "../pages/CountriesShowDetails";
import AllCountries from "../componen/AllCountries";
import GalleryAll from "../pages/GalleryAll";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://b9-a10-southeast-asia-server.vercel.app/country')
      },
      {
        path: '/allTourist',
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch('https://b9-a10-southeast-asia-server.vercel.app/country')
      },

      {
        path: '/allDetails/:id',
        element: <AllSportDetails></AllSportDetails>,
        loader: ({ params }) => fetch(`https://b9-a10-southeast-asia-server.vercel.app/country/${params.id}`)
      },
      {
        path: 'addSpot',
        element: <PrivateRoute>
          <AddTouristsSpot></AddTouristsSpot>
        </PrivateRoute>
      },
      {
        path: '/myList',
        element: <PrivateRoute>
          <MyList></MyList>
        </PrivateRoute>,
        loader: () => fetch('https://b9-a10-southeast-asia-server.vercel.app/country')
      },
      {
        path: 'update/:id',
        element: <PrivateRoute>
          <UpdateSpot></UpdateSpot>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://b9-a10-southeast-asia-server.vercel.app/country/${params.id}`)
      },
      {
        path: '/details/:id',
        element: <PrivateRoute>
          <SportViewDetails></SportViewDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://b9-a10-southeast-asia-server.vercel.app/country/${params.id}`)
      },
      {
        path: '/CountriesDetails/:countryName',
        element: <CountriesShowDetails></CountriesShowDetails>,
        loader: ({ params }) => fetch(`https://b9-a10-southeast-asia-server.vercel.app/selectedDetails/${params.countryName}`)
      },

      {
        path: '/country/:countryName',
        element: <AllCountries></AllCountries>,
        loader: ({ params }) => fetch(`https://b9-a10-southeast-asia-server.vercel.app/selectedCountry/${params.countryName}`)
      },
      {
        path: '/pictures',
        element: <GalleryAll></GalleryAll>,
        loader: () => fetch(`https://b9-a10-southeast-asia-server.vercel.app/pictures`)
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