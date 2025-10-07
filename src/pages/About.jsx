import React from "react";

function About() {
  return (
    <section
      id="about"
      className="h-screen snap-start flex flex-col items-center justify-start px-8 py-16"
    >
      {/* Horizontal Divider */}
      <div className="border-t border-neutral-dark w-3/4 mb-12" />

      {/* Heading */}
      <a href="#about" className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-header font-bold text-primary underline hover:text-accent transition-colors duration-300">
          About Me
        </h2>
      </a>

      {/* Content Grid */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-12">
        {/* Left: Photo(s) */}
        <div className="md:w-1/3 w-full flex justify-center items-center relative min-h-[20rem]">
          {/* Paris photo - background, larger, offset left */}
          <div className="absolute -left-16 -top-8 z-0 transition-transform duration-300 hover:scale-105">
            <div className="w-80 h-120 bg-primary rounded-xl p-2">
              <img
                src="/images/paris.JPG"
                alt="Paris"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Headshot - foreground, smaller, offset right */}
          <div className="absolute left-36 top-4 z-10 transition-transform duration-300 hover:scale-105">
            <div className="w-60 h-80 bg-primary rounded-xl p-2">
              <img
                src="/images/headshot.jpeg"
                alt="Headshot"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          </div>

        {/* Right: Text */}
        <div className="md:w-2/3 w-full text-lg md:text-xl font-body text-neutral-dark leading-relaxed">
          <p>
            Welcome! I'm Sophie. I'm a senior at the University of Michigan
            studying Computer Science with minors in Math, Statistics, and
            Multidisciplinary Design. I’m passionate about using analytical 
            thinking to solve complex problems in medicine and energy.
          </p>
          <br />
          <p>
            My technical background and personal interests have taken me from 
            designing low-cost medical devices, to building machine learning 
            models for genetics, to developing financial strategy for Michigan’s 
            largest lavender farm. In my professional life, I've worked across ops
            at an ed-tech startup, webdev for an energy nonprofit, and most 
            recently, pharma-retail product optimization at BCG. 
            </p>
          <br />
          <p>
            I thrive in dynamic, collaborative settings, 
            and outside of work, you'll find me reading memoirs, running by the
             river, dropping off elaborate baked goods on friends' porches, 
            or listening to country music. I’m looking to join an interdisciplinary 
            team where I can model, build, and ship with impact.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
