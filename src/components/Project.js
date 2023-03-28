import React from "react";
import { jsx as _jsx } from "react/jsx-runtime";

function Project({ project }) {
  const { title, image, description, deployedUrl, repoUrl } = project;

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <img src={image} alt={title} className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">
            {description}
          </p>
        </div>
        <div className="card-footer">
          <a
            href={deployedUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            View Live
          </a>
          <a
            href={repoUrl}
            className="btn btn-secondary mx-2"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
