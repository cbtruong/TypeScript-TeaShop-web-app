import ReactDOM from "react-dom/client";
import { AuthRoutes, UserRoutes, AdminRoutes } from "./routes";
import "./index.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import UserLayout from "./layout/user";
import AdminLayout from "./layout/admin";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />}>
          {UserRoutes.map((route, index) => (
            <Route key={index + 1} {...route} />
          ))}
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          {AdminRoutes.map((route, index) => (
            <Route key={index + 1} {...route} />
          ))}
        </Route>
        <Route path="/auth">
          {AuthRoutes.map((route, index) => (
            <Route key={index + 1} {...route} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
