import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Services from "./components/Services";
import CallRamb from "./components/CallRamb";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <CallRamb />
      </main>
      <Footer />
    </>
  );
}

