import React from "react";
import "../App.css";
import "../CSS/Body.css";

function Body() {
  return (
    <div className="body-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Natha Ram</h1>
      <p>React JS Developer, Front-End Developer, Web Developer, Web Designer</p>
    </div>
  );
}

export default Body;
