// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Todolist from "./Todolist.tsx";
import Clock from "./Timer.tsx";
import MyWeather from "./MyWeather.tsx";

function App() {
  return (
    <div className="container">
      <Todolist></Todolist>
      {/* <Clock></Clock> */}
      <MyWeather children="일기예보" weather="맑음"></MyWeather>
    </div>
  );
}

export default App;
