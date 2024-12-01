import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import IpoList from "../componnets/IpoList";
import IpolistPage from "../pages/IpolistPage";
import IpoDetailPage from "../pages/IpoDetailPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<IpolistPage />} />
      <Route path="/ipoDetail/:id" element={<IpoDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
