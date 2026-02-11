import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Loans from "./pages/Loans";
import Education from "./pages/Education";
import Travel from "./pages/Travel";
import JobBank from "./pages/Goldplus";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/education" element={<Education />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/gold-plus" element={<JobBank />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
