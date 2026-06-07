import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Header from "./Header";
import { projects } from "../data/projectsData";

function ProjectsDetailed() {
  return (
    <div className="bg-background text-neutral-dark font-body scroll-smooth min-h-screen">
      <Header />

      <div className="max-w-6xl mx-auto px-8 pt-28 pb-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-header font-bold text-primary mb-4">
            All Projects
          </h2>
          <div className="w-16 h-px bg-secondary mx-auto mb-4" />
          <p className="text-lg font-body text-neutral-dark/70 max-w-xl mx-auto">
            A full collection of things I've built — spanning ML, hardware,
            web, and everything in between.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-neutral-dark/10 shadow-md p-6 flex flex-col justify-between
                         hover:-translate-y-1 hover:shadow-xl hover:border-primary/40 transition-all duration-300 group"
            >
              <div>
                {/* Title */}
                <h3 className="text-xl font-header font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Full description for detailed page */}
                <p className="text-neutral-dark text-sm font-body leading-relaxed mb-4">
                  {project.fullDescription || project.description}
                </p>

                {/* Tech stack chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary/20 text-primary text-xs font-medium rounded-full border border-secondary/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-neutral-dark/10">
                {project.hasGithub ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-dark text-white text-sm rounded-lg hover:bg-accent transition-colors duration-200"
                  >
                    <FaGithub /> Source Code
                  </a>
                ) : (
                  <span />
                )}
                <Link
                  to={project.detailsPage}
                  className="ml-auto px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-accent transition-colors duration-200"
                >
                  Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="text-center mt-16">
          <Link
            to="/"
            className="inline-block px-6 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectsDetailed;
