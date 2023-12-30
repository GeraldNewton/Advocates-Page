import React from "react";
import Navbar from "../navbar/navbar.jsx";
import Content from "../content/content.jsx";
import "./homepage.css";
import Introduction from "../introduction/introduction.jsx";
import Choose from "../choose/choose.jsx";
import Pictures from "../pictures/pictures.jsx";
import Carousel from "../carousel/carousel.jsx";
import Team from "../team/team.jsx";
export default function Homepage() {
  return (
    <div className="Homepage-Homepage">
      <Navbar />
      <Content />
      <Introduction />
      <Choose />
      <Pictures />
      <Carousel />
      <Team />
    </div>
  );
}
