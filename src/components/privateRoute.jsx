import React from "react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/Context";

const PrivateRoute = (children) => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to={"/"} replace />;
  }
  return <Outlet />;
};
export default PrivateRoute;
