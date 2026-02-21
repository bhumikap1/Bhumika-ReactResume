import React from "react";
import "../styles/Workexperience.css";

export default function Workexperience() {
  return (
    <div className="workexperience-container">
      <h1 className="workexperience-title">Work Experience</h1>

      <div className="workexperience-item">
        <h2 className="position">Software Development Intern</h2>
        <h3 className="company">Physics Wallah Pvt. Ltd.</h3>
        <p className="duration">June 2024 - August 2024</p>
        <p className="details">
          - Developed a web application using React (Frontend) and Django
          (Backend) to convert images to editable and downloadable text.
          <br />
          - Designed and implemented new features, enhancing user experience and
          functionality.
          <br />
          - Participated in code reviews and contributed to improving code
          quality and performance.
        </p>
      </div>

      <div className="workexperience-item">
        <h2 className="position">Java Developer Intern</h2>
        <h3 className="company">Novanector Pvt. Ltd.</h3>
        <p className="duration">July 2024 - September 2024</p>
        <p className="details">
          - Built portfolio websites using Java and Spring Boot dependencies,
          ensuring responsive design and cross-browser compatibility.
          <br />
          - Completed documentation using version control tools like Git.
          <br />
          - Added new features using JavaScript libraries.
        </p>
      </div>
    </div>
  );
}
