import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "4rem", maxWidth: "1100px", margin: "0 auto" }}>
        {/* HERO */}
        <section style={{ marginBottom: "4rem" }}>
          <h1>
            Software Developer <br />
            Building modern web solutions
          </h1>
          <p style={{ maxWidth: "600px", fontSize: "1.1rem" }}>
            I design and develop scalable, user-focused applications using
            modern frontend and backend technologies.
          </p>
        </section>

        {/* SKILLS */}
        <section style={{ marginBottom: "4rem" }}>
          <h2>Core Technologies</h2>
          <ul>
            <li>React, Vue, Angular</li>
            <li>JavaScript, TypeScript</li>
            <li>Java, Python, C#</li>
            <li>REST APIs, Git</li>
          </ul>
        </section>

        {/* CTA */}
        <section>
          <p>
            Want to see what I’ve been working on?
          </p>
          <a href="/projects">View projects →</a>
        </section>
      </main>
    </>
  );
}
