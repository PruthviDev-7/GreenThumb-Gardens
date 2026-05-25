import React, { useState } from "react";
import Welcome from "./components/Welcome";
import Home from "./components/Home";

function App() {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(true);
  return (
    <>
      {isWelcomeVisible ? (
        <Welcome onComplete={() => setIsWelcomeVisible(false)} />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
