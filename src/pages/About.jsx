import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <p className="about-text">
        Hello! I’m <span className="highlight">Bhumika Pawar</span>, an aspiring
        Software Engineer with a passion for building modern, scalable, and
        user-friendly applications.  
      </p>
      <p className="about-text">
        My interests lie in <strong>web development, software design,</strong> and 
        leveraging technology to solve real-world challenges. I enjoy working
        with <strong>React, JavaScript, and modern frameworks</strong>, and I’m 
        constantly learning new tools to improve my skills.
      </p>
      <p className="about-text">
        Beyond coding, I am curious, detail-oriented, and love collaborating in
        teams to turn ideas into impactful solutions.
      </p>
    </div>
  );
}
