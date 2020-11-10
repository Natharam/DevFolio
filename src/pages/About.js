import React from "react";
import "../CSS/about.css";

const About = () => {
  return (
    <div className="about">
      <div className="my-info">
        <div className="my-image">
          <img src="images/natha1.jpg" alt="MyImage" />
        </div>
        <div className="about-me">
          <p className="heading">About Me</p>
          <p className="line"></p>
          <p className="my-position">
            My name is Natha Ram, I'm a Front-End(ReactJS) developer at Virtual
            Heights IT Services Private Limited Ahmedabad. I am very passionate
            and dedicated to my work. I have 8 month experience in front-end
            developement. I have acquired the skills necessary to build great
            and premium websites. You can hire me by directly reaching out to
            me. Check out my work on{" "}
            <a href="https://github.com/Natharam" target="_blank" rel="noopener noreferrer">Github</a>.
          </p>
          <div className="my-details">
            <div className="my-data">
              <p className="details">
                <strong>Name: </strong>Natha Ram
              </p>
              <p className="details">
                <strong>Experience: </strong>8 month
              </p>
            </div>
            <div className="my-data">
              <p className="details">
                <strong>Age: </strong>21 Years
              </p>
              <p className="details">
                <strong>Address: </strong>Jodhpur, Raj. 342037
              </p>
            </div>
          </div>
          <button className="download-cv">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default About;
