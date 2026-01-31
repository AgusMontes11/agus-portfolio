import { useState } from "react";
import Navbar from "../components/Navbar";
import "./Pages.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Navbar />
      <main className="page-container">
        <section className="section">
          <h1>Get In Touch</h1>
          <p style={{ marginBottom: "2rem" }}>
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out!
          </p>
        </section>

        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project or idea..."
              ></textarea>
            </div>

            <button type="submit" className="cta-button">
              Send Message
            </button>
          </form>

          {submitted && (
            <div style={{
              marginTop: "2rem",
              padding: "1rem",
              background: "rgba(34, 197, 94, 0.1)",
              border: "1px solid rgba(34, 197, 94, 0.3)",
              borderRadius: "0.5rem",
              color: "#86efac"
            }}>
              ✓ Thank you for your message! I'll get back to you soon.
            </div>
          )}
        </div>

        <section className="section" style={{ marginTop: "4rem", textAlign: "center" }}>
          <h2>Other Ways to Connect</h2>
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:your.email@example.com" style={{ fontSize: "1.1rem" }}>📧 Email</a>
            <a href="#" style={{ fontSize: "1.1rem" }}>💼 LinkedIn</a>
            <a href="#" style={{ fontSize: "1.1rem" }}>👨‍💻 GitHub</a>
          </div>
        </section>
      </main>
    </>
  );
}
