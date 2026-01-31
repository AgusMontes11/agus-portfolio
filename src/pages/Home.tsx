import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Pages.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="page-container">
        {/* HERO */}
        <section className="hero-section">
          <h1>
            Software Developer <br />
            Building modern web solutions
          </h1>
          <p>
            I design and develop scalable, user-focused applications using
            modern frontend and backend technologies. With expertise in React,
            TypeScript, and full-stack development, I create seamless digital
            experiences.
          </p>
        </section>

        {/* SKILLS */}
        <section className="section">
          <h2>Core Technologies</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend</h3>
              <ul className="skills-list">
                <li>React & Vue</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Modern CSS3</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Backend</h3>
              <ul className="skills-list">
                <li>JavaScript/Node.js</li>
                <li>Python & Java</li>
                <li>REST APIs</li>
                <li>Databases (SQL, NoSQL)</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Tools & Practices</h3>
              <ul className="skills-list">
                <li>Git & Version Control</li>
                <li>Responsive Design</li>
                <li>Testing & Debugging</li>
                <li>CI/CD Pipelines</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <p>
            Want to see what I've been working on? Check out my latest projects
            and get in touch!
          </p>
          <Link to="/projects" className="cta-button">
            View projects 
          </Link>
        </section>
      </main>
    </>
  );
}
