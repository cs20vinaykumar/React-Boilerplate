import React, { useEffect } from "react";
import Routers from "./routers/Routers";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate(); // Move useNavigate() outside useEffect

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]); // Add navigate as a dependency

  return <Routers />;
}
