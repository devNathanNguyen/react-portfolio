import React from "react";
import Project from "./Project.js";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function Projects({ projectsData }) {
  return (
    <section className="container my-5">
      <h2>Portfolio</h2>
      <div className="row">
        {projectsData.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
