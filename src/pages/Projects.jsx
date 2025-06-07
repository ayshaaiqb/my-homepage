import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
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

  return (
    <div className="projects">
      <h2>My Projects</h2>
      {projects.map((p, index) => (
        <ProjectCard key={index} {...p} />
      ))}
    </div>
  );
}

export default Projects;
