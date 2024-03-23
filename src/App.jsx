import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Three_Cards from "./components/Three_Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-fll min-h-screen  text-white bg-zinc-700">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <div className="w-full py-10 px-10 flex items-center gap-4">
        <Three_Cards />
      </div>
      <Footer />
    </div>
  );
}

export default App;
