import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section
      id="projects"
      className="h-screen snap-start flex flex-col items-center justify-start px-8 py-16"
    >
      {/* Header linking to detailed view */}
      <Link to="/projects_detailed" className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-header font-bold text-primary underline hover:text-accent transition-colors duration-300">
          Projects
        </h2>
      </Link>

      {/* Carousel placeholder */}
      <div className="w-full max-w-6xl flex items-center justify-center">
        <p className="text-lg font-body text-neutral-dark">
          [Project carousel will go here...]
        </p>
      </div>

      {/* See All button */}
      <Link
        to="/projects_detailed"
        className="mt-12 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-accent transition-all duration-300"
      >
        See All Projects
      </Link>
    </section>
  );
}

export default Projects;
