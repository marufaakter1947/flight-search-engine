import { createBrowserRouter } from "react-router";
import Login from "../Pages/login";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage";

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
      
     
    ],
  },
]);

export default router;
