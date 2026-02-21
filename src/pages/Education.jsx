import React from "react";
import "../styles/Education.css";
export default function Education() {
  return (
    <div className="education-container">
      <h1 className="education-title">Education</h1>
      <div className="education-item">
        <h2 className="degree">Bachelor of Technology in Computer Science</h2>
        <h3 className="institution">Graphic Era Deemed University</h3>
        <p className="duration">2021 - 2025</p>
        <p className="cgpa">Overall = 8.47/10</p>
        <p className="details">
          Relevant Coursework: Data Structures, Algorithms, Database Management,
          Web Development, Software Engineering, Cloud Computing.
        </p>
      </div>
      <div className="education-item">
        <h2 className="degree">Intermediate</h2>
        <h3 className="institution">S.T Theresa sr. sec. School</h3>
        <p className="duration">2020 - 2021</p>
        <p className="percentage">Percentage = 80%</p>
        <p className="details">
          Focused on Science and Mathemaatics. with major in Computer Science.
        </p>
      </div>
      <div className="education-item">
        <h2 className="degree">High School</h2>
        <h3 className="institution">S.T Theresa sr. sec. School</h3>
        <p className="duration">2019 - 2020</p>
        <p className="percentage">Percentage = 85.00%</p>
        <p className="details">
          Focused on Science and Mathematics.
        </p>
      </div>
    </div>
  );
}