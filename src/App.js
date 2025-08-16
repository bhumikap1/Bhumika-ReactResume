// App.js
import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Bhumika Pawar</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#internships">Internships</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* About */}
      <section id="about" className="section" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
          Hi! I’m <strong>Bhumika Pawar</strong>, a passionate Computer Science
          student with expertise in Web Development, Machine Learning, and
          Cloud Technologies. I love building innovative projects and solving
          real-world problems with creative solutions.
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:bhumikap754@gmail.com">bhumikap754@gmail.com</a> |{" "}
          <strong>Phone:</strong>{" "}
          <a href="tel:+918433035889">+91 8433035889</a>
        </p>
        <p>
          <a href="https://github.com/bhumikap1" target="_blank" rel="noreferrer">GitHub</a> |{" "}
          <a href="http://www.linkedin.com/in/bhumika-pawar-286024250" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </section>

      {/* Education */}
      <section id="education" className="section" data-aos="fade-right">
        <h2>Education</h2>
        <ul>
          <li>B.Tech in Computer Science, Graphic Era University (2021–Present) – GPA: 8.47</li>
          <li>12th, ST. Theresa Sr. Sec. School (2020) – 80%</li>
          <li>10th, ST. Theresa Sr. Sec. School (2017) – 85%</li>
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="section" data-aos="zoom-in">
        <h2>Projects</h2>
        <ul>
          <li><strong>Text Summarization (GenAI):</strong> Web app using Hugging Face & LangChain.</li>
          <li><strong>Health Care Recommendation System:</strong> ML-based health suggestions. <a href="https://github.com/bhumikap1/HealthCare-Recommendation-System-using-ML.git" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><strong>Fake News Detection:</strong> Frontend for detecting fake/real news.</li>
          <li><strong>Event Arena:</strong> MERN Stack event booking system. <a href="https://github.com/Divya-910/EventArena.git" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><strong>SafeBs:</strong> React Native app for booking rides. <a href="https://github.com/bhumikap1/SafeBSUpdated.git" target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </section>

      {/* Internships */}
      <section id="internships" className="section" data-aos="fade-left">
        <h2>Internships</h2>
        <ul>
          <li><strong>Physics-Wallah Pvt. Ltd.:</strong> Built cross-platform mobile app with Django, BeeWare, PyTesseract & cloud storage. <a href="https://github.com/bhumikap1/physics-walla-intern.git" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><strong>Novanector Pvt. Ltd.:</strong> Portfolio website with Java, Spring Boot, AWS cloud deployment. <a href="https://github.com/bhumikap1/Novanector-Task1.git" target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </section>

      {/* Skills */}
      <section id="skills" className="section" data-aos="fade-up">
        <h2>Skills</h2>
        <p><strong>Languages:</strong> C++, Java, C, Python, HTML, CSS, SQL, JavaScript</p>
        <p><strong>Tools & Frameworks:</strong> AWS, Cloud, Django, Hugging Face, React Native</p>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section" data-aos="flip-up">
        <h2>Certifications</h2>
        <ul>
          <li><a href="https://coursera.org/verify/UE6CHX7BU8CJ" target="_blank" rel="noreferrer">Cloud Operations on AWS</a></li>
          <li><a href="https://coursera.org/verify/YLYV64P5N35A" target="_blank" rel="noreferrer">Hosting Web Apps on Amazon Lightsail</a></li>
          <li><a href="https://www.coursera.org/account/accomplishments/verify/4YCKS97BZP85" target="_blank" rel="noreferrer">AWS S3 Basics</a></li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Let’s connect for opportunities and collaborations 🚀</p>
        <p>
          📧 <a href="mailto:bhumikap754@gmail.com">bhumikap754@gmail.com</a> <br />
          📞 <a href="tel:+918433035889">+91 8433035889</a>
        </p>
      </section>
    </div>
  );
}

export default App;
