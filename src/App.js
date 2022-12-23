import "./App.css";
import React from "react";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import Plan from "./Component/plan/Plan";
import Slider from "./Component/slider/Slider";
import Education from "./Component/education/Education";
import Portfolio from "./Component/portfolio/Portfolio";
import Blog from "./Component/blog/Blog";
import Contact from "./Component/contact/Contact";
import Map from "./Component/maps/Map";
import Footer from "./Component/footer/Footer";

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
      <Contact />
      {/* <Map /> */}
      <Footer />
    </div>
  );
}

export default App;
