import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projectsData";

// ...imports stay the same

function Projects() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const carouselRef = useRef(null);
  const slideRefs = useRef([]);

  // scroll to active card
  useEffect(() => {
    const c = carouselRef.current;
    const slide = slideRefs.current[current];
    if (c && slide) c.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
  }, [current]);

  // keep alignment on resize
  useEffect(() => {
    const c = carouselRef.current;
    if (!c) return;
    const ro = new ResizeObserver(() => {
      const slide = slideRefs.current[current];
      if (slide) c.scrollTo({ left: slide.offsetLeft });
    });
    ro.observe(c);
    return () => ro.disconnect();
  }, [current]);

  // (optional) auto-rotate, pause handlers are fine to keep if you added them earlier

  return (
    <section id="projects" className="min-h-[100svh] flex flex-col items-center justify-start px-8 py-16">
      <div className="border-t border-neutral-dark w-3/4 mb-12" />

      <Link to="/projects_detailed" className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-header font-bold text-primary underline hover:text-accent transition-colors duration-300">
          Projects
        </h2>
      </Link>

      <div className="relative w-full max-w-7xl">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto no-scrollbar gap-4 pb-4 snap-x snap-mandatory scroll-smooth"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (slideRefs.current[index] = el)}
              className={`
                snap-start flex-shrink-0
                basis-[90%] 
                sm:basis-1/2
                md:basis-1/3
                lg:basis-1/4
                xl:basis-1/4
                bg-white shadow-lg rounded-2xl p-6 border border-neutral-dark
                flex flex-col justify-between
              `}
            >
              <div>
                <h3 className="text-2xl font-header font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-neutral-dark text-base mb-4 font-body">{project.description}</p>
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
                <Link to={project.detailsPage} className="ml-auto px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition">
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => setCurrent((p) => (p - 1 + projects.length) % projects.length)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:bg-accent"
          aria-label="Previous"
        >
          &#8592;
        </button>
        <button
          onClick={() => setCurrent((p) => (p + 1) % projects.length)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:bg-accent"
          aria-label="Next"
        >
          &#8594;
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${current === idx ? "bg-primary" : "bg-secondary"}`}
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
