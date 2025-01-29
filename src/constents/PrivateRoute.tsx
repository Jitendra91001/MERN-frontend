import { Navigate } from "react-router-dom";
import React from "react";

interface Props {
  path?: string;
  rest?: any;
  children ? : React.ComponentType | any ;
}


export const PrivateRoute: React.FC<Props> = ({ children }) => {
  const isAuthenticated = localStorage.getItem('secret_key');

  console.log(isAuthenticated,'aditya')
  return isAuthenticated ? children : <Navigate to="/users/login" />;
};

