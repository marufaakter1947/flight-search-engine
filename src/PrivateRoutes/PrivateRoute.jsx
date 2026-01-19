import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import { MoonLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
//   console.log(location);

  if (loading) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <MoonLoader />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={location.pathname} replace></Navigate>;
  }

  return children;
};

export default PrivateRoute;
