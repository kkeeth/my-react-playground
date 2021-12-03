import React from "react";
import "./App.css";
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
  );
}

function LikeButton() {
  return <span>いいねボタン予定地</span>;
}

export default App;