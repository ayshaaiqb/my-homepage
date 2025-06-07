import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h2>Software Engineer • Full Stack</h2>
      <p>I build modern web applications using Python, React, and SQL.</p>

      <section className="tech-stack">
        <h3>Tech Stack</h3>
        <p>Frontend: HTML, CSS, JavaScript, React</p>
        <p>Backend: Python, Java, SQL</p>
      </section>

      <Link to="/projects" className="btn">See My Projects</Link>
    </div>
  );
}

export default Home;
