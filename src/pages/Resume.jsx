import React from "react";
import "../styles/Resume.css";

export default function Resume() {
  const resumeUrl = `${process.env.PUBLIC_URL}/BhumikaPawar_resume.pdf`;

  return (
    <section className="resume-container">
      <h2 className="resume-title">Resume</h2>

      {/* Embedded Resume Viewer */}
      <div className="resume-viewer">
        <iframe
          src={resumeUrl}
          title="Resume"
          width="100%"
          height="600px"
          style={{ border: "none" }}
        />
      </div>

      {/* Download Button */}
      <a
        href={resumeUrl}
        download="Bhumika_Pawar_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="download-btn"
      >
        📄 Download Resume (PDF)
      </a>
    </section>
  );
}
