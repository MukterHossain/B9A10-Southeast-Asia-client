import {createBrowserRouter} from "react-router-dom";
import MainRoot from "./MainRoot";





export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainRoot></MainRoot>,
    },
  ]);