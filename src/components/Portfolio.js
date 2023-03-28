import React from "react";
// import Project from "./Project.jsx";
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';

function Portfolio() {
  // Replace with your actual project information
  const projects = [
    {
      title: "Carry On",
      image: "/images/projects/project1.png",
      deployedUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Game Price Checker 2.0",
      image: "/images/projects/project2.png",
      deployedUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Ameliorate",
      image: "/images/projects/project3.png",
      deployedUrl: "#",
      repoUrl: "#",
    },
  ];

  return (
    <section className="container my-5">
      <h2>Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
