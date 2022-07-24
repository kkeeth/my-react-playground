import React, { useState, useEffect } from "react";

import { LikeButton } from "./components/LikeButton"
import { MyLabel } from "./components/MyLabel";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [messageId, setMessageId] = useState(0);
  const messages = ['hogehoge', 'fugafuga'];

  useEffect(() => {
    const reset = () => {
      if (count > 5) {
        setCount(0);
      }
    };
    reset();
  }, [count]);

  const toggleMessage = () => {
    messageId === 0 ? setMessageId(1) : setMessageId(0);
  }

  return (
    <div className="App">
      <main>
        <section className="App-header">
          <LikeButton />
        </section>

        <section className="App-main-message">
          <button onClick={ toggleMessage }>click</button>
          <MyLabel message={ messages[messageId] } />
        </section>
      </main>
    </div>
  );
}

export default App;