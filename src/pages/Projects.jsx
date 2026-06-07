import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projectsData";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const total = projects.length;

  // Get the 3 visible indices: left, center, right
  const getVisible = (center) => ({
    left: (center - 1 + total) % total,
    center: center,
    right: (center + 1) % total,
  });

  const advance = useCallback(
    (direction) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveIndex((prev) =>
        direction === "next" ? (prev + 1) % total : (prev - 1 + total) % total
      );
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating, total]
  );

  // Auto-advance timer
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => advance("next"), 4000);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused, advance]);

  const { left, center, right } = getVisible(activeIndex);

  const cardClasses = (role) => {
    const base =
      "rounded-2xl p-6 border flex flex-col justify-between transition-all duration-500 ease-in-out cursor-pointer select-none";
    if (role === "center") {
      return `${base} bg-white border-primary shadow-2xl scale-105 z-20`;
    }
    return `${base} bg-white border-neutral-dark/20 shadow-md scale-95 opacity-60 z-10`;
  };

  const ProjectCard = ({ project, role }) => (
    <div
      className={cardClasses(role)}
      style={{ minHeight: "320px" }}
    >
      <div>
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-header font-bold text-primary leading-tight">
            {project.title}
          </h3>
        </div>
        <p className="text-neutral-dark text-sm mb-4 font-body line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-secondary/30 text-primary text-xs font-medium rounded-full border border-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {role === "center" && (
        <div className="flex justify-between items-center mt-auto pt-2 border-t border-neutral-dark/10">
          <div className="flex gap-2">
            {project.hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 bg-neutral-dark text-white text-sm rounded-lg hover:bg-accent transition-colors duration-200"
              >
                <FaGithub /> Source Code
              </a>
            )}
            {project.externalLink && (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 bg-secondary text-primary text-sm rounded-lg hover:bg-accent hover:text-white transition-colors duration-200"
              >
                ↗ Visit Site
              </a>
            )}
          </div>
          <Link
            to={project.detailsPage}
            onClick={(e) => e.stopPropagation()}
            className="ml-auto px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-accent transition-colors duration-200"
          >
            Details →
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <section
      id="projects"
      className="min-h-[100svh] flex flex-col items-center justify-start px-8 py-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="border-t border-neutral-dark w-3/4 mb-12" />

      <Link to="/projects_detailed" className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-header font-bold text-primary underline hover:text-accent transition-colors duration-300">
          Projects
        </h2>
      </Link>

      {/* Carousel */}
      <div className="relative w-full max-w-5xl">
        {/* Cards row */}
        <div className="grid grid-cols-3 gap-4 items-center px-2">
          {/* Left card — clicking it advances backward */}
          <div
            className="cursor-pointer"
            onClick={() => advance("prev")}
          >
            <ProjectCard project={projects[left]} role="left" />
          </div>

          {/* Center card */}
          <div>
            <ProjectCard project={projects[center]} role="center" />
          </div>

          {/* Right card — clicking it advances forward */}
          <div
            className="cursor-pointer"
            onClick={() => advance("next")}
          >
            <ProjectCard project={projects[right]} role="right" />
          </div>
        </div>

        {/* Arrow buttons */}
        <button
          onClick={() => advance("prev")}
          className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-full hover:bg-accent shadow-lg z-30 flex items-center justify-center transition-colors duration-200"
          aria-label="Previous"
        >
          &#8592;
        </button>
        <button
          onClick={() => advance("next")}
          className="absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-full hover:bg-accent shadow-lg z-30 flex items-center justify-center transition-colors duration-200"
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (!isAnimating) {
                setActiveIndex(idx);
              }
            }}
            className={`rounded-full transition-all duration-300 ${
              activeIndex === idx
                ? "bg-primary w-6 h-3"
                : "bg-secondary w-3 h-3"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

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
