import about_image from "../image/about_image.png";

import { IoEllipseSharp } from "react-icons/io5";
import "../css/about.css";
function About() {

  return (
    <>
      <div className="about"> 
        <div className="about-container">
          <div className="about-row">
            <div className="about-col-md-8">
              <h5 className="about-headline-3">ABOUT COMPANY</h5>
              <h1 className="about-headline">ABOUT US</h1>
              <h4 className="about-sub-headline">We know how large objects will act,
                but things on a small scale</h4>
              <div className="about-btn-md">
                <span className="about-btn-text">Get Quote Now</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-background">
          <div className="hero-2-bg-shape-cover">
            <div className="about-none">
              <IoEllipseSharp className="ellipse1" />
              <IoEllipseSharp className="ellipse2" />
              <IoEllipseSharp className="ellipse3" />
              <IoEllipseSharp className="ellipse4" />
              <IoEllipseSharp className="ellipse5" />

              <img src={about_image} alt="image1" className="class_about_image" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
