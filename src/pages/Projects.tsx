import Navbar from "../components/Navbar";
import "./Pages.css";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with React and TypeScript showcasing my skills and projects.",
    technologies: ["React", "TypeScript", "CSS3", "Vite"],
    link: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Full-stack application for managing tasks and projects with real-time updates and user authentication.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "#"
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Feature-rich e-commerce platform with product catalog, shopping cart, and payment integration.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Stripe"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="page-container">
        <section className="section">
          <h1>My Projects</h1>
          <p>Here are some of the projects I've built. Each one represents my commitment to clean code and user experience.</p>
        </section>

        <section className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                <strong>Tech Stack:</strong>
                <p>{project.technologies.join(" • ")}</p>
              </div>
              {project.link && (
                <a href={project.link} className="cta-button" style={{ fontSize: "0.9rem", padding: "0.75rem 1.5rem" }}>
                  View Project →
                </a>
              )}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
