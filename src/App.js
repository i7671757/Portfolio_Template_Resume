import "./App.css";
import React from "react";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import Plan from "./Component/plan/Plan";
import Slider from "./Component/slider/Slider";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Plan />
      <Slider />
    </div>
  );
}

export default App;
