import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Gallery from "./components/Gallery";
import CareerTimeline from "./components/CareerTimeline";
import Quotes from "./components/Quotes";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Stats />
        <CareerTimeline />
        <Gallery />
        <Quotes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
