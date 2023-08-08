import React from "react";
import { Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  if (isLoading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};
export default PrivateRoute;
