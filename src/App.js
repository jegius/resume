import './App.css';
import React from "react";
import Page from "./components/page/page";
import Left from "./components/left/left";
import Right from "./components/right/right";

function App() {
  return (
    <div className="App">
      <Page>
        <Left />
        <Right />
      </Page>
    </div>
  );
}

export default App;
