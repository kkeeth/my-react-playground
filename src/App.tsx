import { useState, useEffect } from "react";
import CookieConsent from 'react-cookie-consent';

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

        <section className="App-cookie-consent">
          <CookieConsent
            location="bottom"
            buttonText="Sure man!!"
            cookieName="cookie-use-accept"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
            overlay
          >
            This website uses cookies to enhance the user experience.{" "}
            <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
          </CookieConsent>
        </section>
      </main>
    </div>
  );
}

export default App;