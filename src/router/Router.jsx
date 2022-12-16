import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} /> */}
        //* Relative
        <Route index path="/" element={<Home />} />
        <Route path="/" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
