import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Login from "../pages/common/login/Login";
import Register from "../pages/common/register/Register";
import Layout from "../layout/Layout";
import Products from "../pages/user/products/Products";
import Home from "../pages/user/home/Home";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
