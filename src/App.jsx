import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Plant from "./components/PlantCarousel";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(true);

  if (isWelcomeVisible) {
    return <Welcome onComplete={() => setIsWelcomeVisible(false)} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plant />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
