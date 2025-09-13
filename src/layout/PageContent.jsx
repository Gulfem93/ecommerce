import React from "react";
import "../css/PageContent.css";
//import headerBackground from "../image/background.jpg";


function PageContent() {
  return (
    <div
      className="hero-section"
    //style={{ backgroundImage: `url(${headerBackground})` }}
    >
      <div className="hero-content container">
        <div className="text-content">
          <h5 className="header-tag">SUMMER 2020</h5>
          <h1 className="headline-4">IT’S A SPECIAL GIFT</h1>
          <h4 className="description">
            We know how large objects will act, but things on a small scale
          </h4>
          <div className="cta-buttons">
            <button className="btn-primary">Read More</button>
          </div>

        </div>
        <div className="image-side">

        </div>
      </div>
    </div>
  );
}

export default PageContent;
