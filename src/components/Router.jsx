import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotePage from "./screens/NotePage/NotePage";
import Home from "./screens/home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/home" />
        <Route path="*" element={<p>Page not found</p>} />
        <Route path="/note/:id" element={<NotePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
