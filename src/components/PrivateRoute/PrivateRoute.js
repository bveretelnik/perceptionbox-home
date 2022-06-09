import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, user }) => {
  return user ? children : <Navigate replace to="/login" />;
};

export default PrivateRoute;
