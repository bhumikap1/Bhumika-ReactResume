import '../styles/Skills.css';
export default function Skills() {
    return(
        <div className="skills-container">
            <h1 className="skills-title">Skills</h1>
            <div className="skills-list">
                <div className="skill-item">
                    <h2 className="skill-category">Programming Languages</h2>
                    <ul>
                        <li>C/C++</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div className="skill-item">
                    <h2 className="skill-category">Web Development</h2>
                    <ul>
                        <li>HTML, CSS, JavaScript</li>
                        <li>React.js, Node.js, Express.js</li>
                        <li>RESTful APIs</li>
                        <li>Responsive Design</li>
                    </ul>
                </div>
                <div className="skill-item">
                    <h2 className="skill-category">Databases</h2>
                    <ul>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <div className="skill-item">
                    <h2 className="skill-category">Tools & Platforms</h2>
                    <ul>
                        <li>Git & GitHub</li>
                        <li>VS Code</li>
                        <li>AWS</li>
                    </ul>
                </div>
                <div className="skill-item">
                    <h2 className="skill-category">Soft Skills</h2>
                    <ul>
                        <li>Problem Solving</li>
                        <li>Team Collaboration</li>
                        <li>Effective Communication</li>
                        <li>Adaptability & Quick Learning</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}