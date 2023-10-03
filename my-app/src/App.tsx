import React from 'react';
import './App.css';
import Fruits from "./components/Fruits.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fruits name="a"/>
        <Fruits name="b"/>
      </header>
    </div>
  );
}

export default App;
