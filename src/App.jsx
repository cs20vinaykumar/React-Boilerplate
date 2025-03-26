import React, { useEffect } from "react";
import Routers from "./routers/Routers";
import { useNavigate, useLocation } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation(); // To check the current route

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Redirect only if the user is not on the login page
    if (!token && location.pathname !== "/login") {
      navigate("/login", { replace: true });
    }
  }, [location.pathname]); // Depend on pathname instead of navigate

  return <Routers />;
}
