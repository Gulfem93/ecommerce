import React from "react";
import "../css/pageContent.css";

import image1 from "../image/image1.png";
import image2 from "../image/image2.jpg";

function PageContent() {
  return (
    <div className="hero-section">
      {/* Sol resim */}
      <div className="hero-image left">
        <img src={image1} alt="Left" />
      </div>

      {/* Ortadaki yazılar */}
      <div className="main-content">
        <h5 className="header-tag">SUMMER 2020</h5>
        <h1 className="headline">Multicoloured Tie-dye Sweater</h1>
        <h4 className="sub-headline">We know how large objects will act,</h4>
        <div className="button-cta">
          <button className="button-md">
            <span className="btn-text">SHOP NOW</span>
          </button>
        </div>
      </div>

      {/* Sağ resim */}
      <div className="hero-image right">
        <img src={image2} alt="Right" />
      </div>
    </div>
  );
}

export default PageContent;
