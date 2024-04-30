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
import AllSpots from "../pages/AllSpots";
import UpdateSpot from "../pages/UpdateSpot";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/travel')
      },
      {
        path: '/allTourist',
        element:<AllTouristSpot></AllTouristSpot> 
      },
    
      {
        path: '/allTourist/:id',
        element: <AllSpots></AllSpots>        
      },
      {
        path: 'addSpot',
        element: <PrivateRoute>
          <AddTouristsSpot></AddTouristsSpot>
        </PrivateRoute>
      },
      {
        path:'/myList',
        element: <PrivateRoute>
          <MyList></MyList>
          </PrivateRoute>,
          loader: () => fetch('http://localhost:5000/travel')
      },
      {
        path: 'update/:id',
        element: <UpdateSpot></UpdateSpot>,
        loader: ({params}) => fetch(`http://localhost:5000/travel/${params.id}`)
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