import React from "react";
import Projects from "./Projects.js";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function Portfolio() {
  const projects = [
    {
      title: "Carry On",
      image: "https://user-images.githubusercontent.com/113863838/201611489-6c3918ca-54e0-4760-9329-dcd5057952ae.JPG",
      description: "A helpful tool to assist you in figuring out what to pack for a trip",
      deployedUrl: "https://samezad27.github.io/Project-1-group-7/",
      repoUrl: "https://github.com/devNathanNguyen/Project-1-group-7",
    },
    {
      title: "Game Price Checker 2.0",
      image: "https://i.imgur.com/dYXt018.png",
      description: "An app created for gamers to check the pricing of their favorite games",
      deployedUrl: "https://game-price-checker-2.herokuapp.com/",
      repoUrl: "https://github.com/devNathanNguyen/Game-Price-Checker-2.0",
    },
    {
      title: "Ameliorate",
      image: "https://i.imgur.com/huJjVZJ.png",
      description: "An RPG style to-do list designed to make completing tasks exciting",
      deployedUrl: "https://ameliorate.herokuapp.com/",
      repoUrl: "https://github.com/devNathanNguyen/RPG-ToDo/tree/main",
    },
  ];

  return (
    <section className="container my-5">
      <h2>Portfolio</h2>
      <Projects projectsData={projects} />
    </section>
  );
}

export default Portfolio;
