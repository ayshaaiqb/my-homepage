import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "Blog Platform",
    description: "A full-stack blog with user login, posting, and comment system.",
    tech: "React, Node.js, Express, MongoDB",
    github: "https://github.com/ayshaaiqb/blog-platform",
    demo: "https://ayshaaiqb-blog.vercel.app"
  },
  {
    title: "Python Data Visualizer",
    description: "CLI tool to plot and analyze CSV datasets.",
    tech: "Python, Pandas, Matplotlib",
    github: "https://github.com/ayshaaiqb/data-visualizer"
  },
  {
    title: "SQL Dashboard",
    description: "Interactive dashboard showing business metrics using SQL queries.",
    tech: "PostgreSQL, Metabase",
    github: "https://github.com/ayshaaiqb/sql-dashboard"
  }
];

function Home() {
  return (
    <main className="home-container">
      <section className="intro">
        <h1>Software Engineer • Full Stack</h1>
        <p className="tagline">I build modern web applications using Python, React, and SQL.</p>
      </section>

      <section className="tech-stack">
        <h2>Tech Stack</h2>
        <p><strong>Frontend:</strong> HTML, CSS, JavaScript, React</p>
        <p><strong>Backend:</strong> Python, Java, SQL</p>
      </section>

      <div className="spacer"></div>

      <section className="projects-overview">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
