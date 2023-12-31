// Home.jsx
import React from "react";
import NavBar from "../slider/Navbar";
import Slider01 from "../slider/Slider01";
import "./Home.css";
import Footer from "../footer/Footer";
import IteCard from "../IteCard.js";
import Grid from "../grid/Grid.js";
function Home() {
  return (
    <div className="container">
      <NavBar />
      <div className="swiper-container">
        <Slider01 />
      </div>{" "}
      <IteCard />

      <Grid/>
      <Footer />
    </div>
  );
}

export default Home;
