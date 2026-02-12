import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Loans from "./pages/Loans";
import Education from "./pages/Education";
import Travel from "./pages/Travel";
import Goldplus from "./pages/Goldplus";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/education-support" element={<Education />} />
        <Route path="/travel-transport" element={<Travel />} />
        <Route path="/gold-plus" element={<Goldplus />} />
      </Routes>

      <Footer />
    </>
  );
}
