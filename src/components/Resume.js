import React from "react";
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';

function Resume() {
  const proficiencies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
  ];

  return (
    <section className="container my-5">
      <h2>Resume</h2>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
    </section>
  );
}

export default Resume;
