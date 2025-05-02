"use client";

import { PROJECTS } from "../contents/projects";
import { Url } from "./Url";

export const Projects = () => (
  <div className="space-y-4">
    <h3>Projects</h3>
    {PROJECTS.map((projectItem, index) => (
      <div key={`project-${index}`}>
        <h4>{projectItem.title}</h4>
        <Url url={projectItem.url} />
        <p>{projectItem.description}</p>
      </div>
    ))}
  </div>
);
