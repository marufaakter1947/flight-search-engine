import { createBrowserRouter } from "react-router";
import Login from "../Pages/login";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import Flights from "../Pages/Flights";
import Deals from "../Pages/Deals";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import MyTrips from "../Pages/MyTrips";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/flights",
        element: <Flights></Flights>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/deals",
        element: <Deals></Deals>,
      },
      {
        path: "/my-trips",
        element: <MyTrips></MyTrips>
      },

      
     
    ],
  },
]);

export default router;
