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
            and dedicated to my work. I have 1 year experience in front-end
            development. I have acquired the skills necessary to build great
            and premium websites. You can hire me by directly reaching out to
            me. Check out my work on{" "}
            <a
              // style={{color: white}}
              href="https://github.com/Natharam"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            .
          </p>
          <div className="my-details">
            <div className="my-data">
              <p className="details">
                <strong>Name: </strong>Natha Ram
              </p>
              <p className="details">
                <strong>Experience: </strong>1 Year
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
          <a
            href="https://docs.google.com/document/d/1HsN_inJB-reCrSRrxcw6vzCxApYOFUrjdK-WjxNAHb8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="cv"
          >
            <button className="download-cv">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
