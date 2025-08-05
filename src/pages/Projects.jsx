import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projectsData";


function Projects() {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef(null);

  // // Auto-rotate every 5 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % projects.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  // Scroll to the current project
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.offsetWidth * current,
        behavior: "smooth",
      });
    }
  }, [current]);

  return (
    <section
      id="projects"
      className="h-screen snap-start flex flex-col items-center justify-start px-8 py-16"
    >

      <div className="border-t border-neutral-dark w-3/4 mb-12" />

      {/* Header linking to detailed view */}
      <Link to="/projects_detailed" className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-header font-bold text-primary underline hover:text-accent transition-colors duration-300">
          Projects
        </h2>
      </Link>

      {/* Carousel container */}
      <div className="relative w-full max-w-6xl">
        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-hidden space-x-6 pb-4 transition-transform"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-full sm:min-w-[300px] max-w-sm flex-shrink-0 bg-white shadow-lg rounded-2xl p-6 border border-neutral-dark flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-header font-bold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-dark text-base mb-4 font-body">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mt-auto">
                {project.hasGithub && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-dark text-white rounded-lg hover:bg-accent transition"
                  >
                    <FaGithub /> Source Code
                  </a>
                )}
                <Link
                  to={project.detailsPage}
                  className="ml-auto px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() =>
            setCurrent((prev) => (prev - 1 + projects.length) % projects.length)
          }
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:bg-accent"
        >
          &#8592;
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % projects.length)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:bg-accent"
        >
          &#8594;
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${
                current === idx ? "bg-primary" : "bg-secondary"
              }`}
            ></button>
          ))}
        </div>
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
