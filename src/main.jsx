import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Router.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Context/AuthProvider.jsx";
import "animate.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
      <Toaster position="top-right"></Toaster>
    </AuthProvider>
  </StrictMode>
);
