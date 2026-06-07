import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projectsData";

function Projects() {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef(null);

  // We create a "Triple Set" (Buffer | Real | Buffer) to simulate infinity
  const extendedProjects = [...projects, ...projects, ...projects];
  const totalCount = projects.length;

  // Initial setup: Scroll to the middle set instantly on load
  useEffect(() => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const cardWidth = container.offsetWidth / 3; // 3 cards in view
      // Jump to the start of the middle set
      container.scrollLeft = cardWidth * totalCount;
    }
  }, [totalCount]);

  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;

    const cardWidth = container.offsetWidth / 3;
    const scrollLeft = container.scrollLeft;

    // 1. Calculate Active Dot (Center Tracking)
    // Find the center of the viewport
    const centerPosition = scrollLeft + container.offsetWidth / 2;
    // Determine which index is at that center point
    const rawIndex = Math.floor(centerPosition / cardWidth);
    // Map back to original 0-(N-1) index
    const relativeIndex = rawIndex % totalCount;
    
    // Only update state if it changed to prevent unnecessary re-renders
    if (relativeIndex !== current) {
      setCurrent(relativeIndex);
    }

    // 2. Infinite "Teleport" Logic (The Loop)
    // If we scroll into the 3rd set (Right Buffer), jump back to 2nd set
    if (scrollLeft >= cardWidth * (totalCount * 2)) {
      container.scrollLeft = scrollLeft - (cardWidth * totalCount);
    }
    // If we scroll into the 1st set (Left Buffer), jump forward to 2nd set
    else if (scrollLeft <= cardWidth) {
      container.scrollLeft = scrollLeft + (cardWidth * totalCount);
    }
  };

  const scrollByArrow = (direction) => {
    const container = carouselRef.current;
    if (!container) return;

    const cardWidth = container.offsetWidth / 3;
    const scrollAmount = direction === "next" ? cardWidth : -cardWidth;

    // Use built-in smooth scrolling for buttons
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToDot = (index) => {
    const container = carouselRef.current;
    if (!container) return;

    const cardWidth = container.offsetWidth / 3;
    // Calculate the position of this specific item in the middle set
    // We target the middle set (offset by totalCount) to ensure we can scroll left/right freely from there
    const targetPosition = (totalCount * cardWidth) + (index * cardWidth);
    
    container.scrollTo({
      left: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="min-h-[100svh] flex flex-col items-center justify-start px-8 py-16">
      <div className="border-t border-neutral-dark w-3/4 mb-12" />

      <Link to="/projects_detailed" className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-header font-bold text-primary underline hover:text-accent transition-colors duration-300">
          Projects
        </h2>
      </Link>

      <div className="relative w-full max-w-7xl">
        {/* NOTE: 'scroll-smooth' is REMOVED from the class below. 
           This prevents the shaking. We only use smooth behavior on button clicks.
        */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto no-scrollbar gap-0 pb-4"
        >
          {extendedProjects.map((project, index) => (
            <div
              key={index}
              // Enforce 3 cards view on Desktop (md:basis-1/3)
              className="flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 p-3"
            >
              <div className="bg-white shadow-lg rounded-2xl p-6 border border-neutral-dark flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-header font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-dark text-base mb-4 font-body line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-secondary text-white text-sm rounded-full">
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
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => scrollByArrow("prev")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:bg-accent shadow-lg z-10"
          aria-label="Previous"
        >
          &#8592;
        </button>
        <button
          onClick={() => scrollByArrow("next")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:bg-accent shadow-lg z-10"
          aria-label="Next"
        >
          &#8594;
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToDot(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                current === idx ? "bg-primary" : "bg-secondary"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
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