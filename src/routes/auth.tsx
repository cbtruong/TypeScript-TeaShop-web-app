import { ReactNode } from "react";  
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";

const createRoute  = (path: string, element: ReactNode) => ({
  path,
  element,
});

const AuthRoutes = [
  createRoute('login', <Login />),
  createRoute('register', <Register />),
];

export default AuthRoutes;