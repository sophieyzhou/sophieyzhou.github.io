import React from "react";
import { Link } from "react-router-dom";

function ProjectsDetailed() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-20">
      <h2 className="text-4xl md:text-5xl font-header font-bold text-primary underline mb-12 text-center">
        All Projects
      </h2>
      <p className="text-lg md:text-xl font-body text-neutral-dark leading-relaxed text-center">
        This is the full list of my projects with detailed descriptions. More to come!
      </p>
    </div>
  );
}

export default ProjectsDetailed;