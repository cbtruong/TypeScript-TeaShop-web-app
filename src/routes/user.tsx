import { ReactNode } from "react";  
import Home from "../pages/home";
import Teas from "../pages/teas";
import Extras from "../pages/extras";
import About from "../pages/about";
import Contact from "../pages/contact";
import Blog from "../pages/blog";
import BlogDetail from "../pages/blog/BlogDetail";
import Profile from "../pages/profile/Profile";
import ShippingReturn from "../pages/Help/ShippingReturn";
import StorePolicy from "../pages/Help/StorePolicy";
import Faq from "../pages/Help/Faq";
import ProductDetail from "../pages/Product/ProductDetail";
import Cart from "../pages/cart";

const createRoute  = (path: string, element: ReactNode) => ({
  path,
  element,
});

const UserRoutes = [
  // page
  createRoute('/', <Home />),
  createRoute('/teas', <Teas />),
  createRoute('/teas/product/', <ProductDetail />),
  createRoute('/extras', <Extras />),
  createRoute('/extras/product/', <ProductDetail />),
  createRoute('/about', <About />),
  createRoute('/contact', <Contact />),
  createRoute('/blog', <Blog />),
  createRoute('/blog/:id', <BlogDetail />),
  createRoute('/profile', <Profile />),
  createRoute('/cart', <Cart />),

  //help
  createRoute('/shipping-returns', <ShippingReturn />),
  createRoute('/store-policy', <StorePolicy />),
  createRoute('/faq',<Faq/> ),
];

export default UserRoutes;