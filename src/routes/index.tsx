
import { ReactNode } from "react";  
import Home from "../pages/home";
import Teas from "../pages/teas";
import Extras from "../pages/extras";
import About from "../pages/about";
import Contact from "../pages/contact";
import Profile from "../pages/profile/Profile";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";

const createRoute  = (path: string, element: ReactNode) => ({
  path,
  element,
});

const routes = [
  // page
  createRoute('/', <Home />),
  createRoute('/teas', <Teas />),
  createRoute('/extras', <Extras />),
  createRoute('/about', <About />),
  createRoute('/contact', <Contact />),
  createRoute('/profile', <Profile />),
  // auth
  createRoute('/login', <Login />),
  createRoute('/register', <Register />),
];

export default routes;