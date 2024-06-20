// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Todolist from "./Todolist.tsx";
import Clock from "./Timer.tsx";

function App() {
  return (
    <div className="container">
      <Todolist></Todolist>
      <Clock></Clock>
    </div>
  );
}

export default App;
