import React, { useState, useEffect } from "react";

import { LikeButton } from "./components/LikeButton"
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("inner useEffect");
    const reset = () => {
      console.log("inner reset function");
      if (count > 5) {
        setCount(0);
        console.log("reset!!");
      }
    };
    reset();
  }, [count]);
  console.log("\nouter useEffect");
  console.log(count);

  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
  );
}

export default App;