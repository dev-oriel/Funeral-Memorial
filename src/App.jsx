import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Biography from "./components/Biography";
import Program from "./components/Program";
import Hymns from "./components/Hymns";
import Tributes from "./components/Tributes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-warm-gray dark:text-gray-200 transition-colors duration-300 font-display min-h-screen scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Biography />
        <Program />
        <Hymns />
        <Tributes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
