import React, { useState } from "react";
import { Route, Routes, useLocation, Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Frontend = () => {
  return (
    <div>
      {/* {showNav && <Navbar />} */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Frontend;
