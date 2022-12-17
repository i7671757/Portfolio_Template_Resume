import "./App.css";
import React from "react";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import Plan from "./Component/plan/Plan";
import Slider from "./Component/slider/Slider";
import Education from "./Component/education/Education";
import Portfolio from "./Component/portfolio/Portfolio";
import Blog from "./Component/blog/Blog";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Plan />
      <Slider />
      <Education />
      <Portfolio />
      <Blog />
    </div>
  );
}

export default App;
