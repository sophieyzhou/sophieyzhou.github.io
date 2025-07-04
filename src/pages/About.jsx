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
      <h2 className="text-4xl md:text-5xl font-header font-bold text-primary underline mb-12 text-center">
        About Me
      </h2>

      {/* Content Grid */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-12">
        {/* Left: Photo(s) */}
        <div className="md:w-1/3 w-full flex justify-center items-center">
          <img
            src="/images/about_photo.jpg" // replace with your image
            alt="Sophie Zhou"
            className="w-64 h-64 object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Right: Text */}
        <div className="md:w-2/3 w-full text-lg md:text-xl font-body text-neutral-dark leading-relaxed">
          <p>
            Welcome to my page! I'm a senior at the University of Michigan
            studying Computer Science with minors in Statistics and
            Multidisciplinary Design.
          </p>
          <br />
          <p>
            I’m passionate about using analytical thinking to solve complex
            problems in medicine and energy. I thrive in dynamic, collaborative
            environments, and my technical background has taken me from
            designing low-cost medical devices, to building machine learning
            models for genetics, to crafting financial strategy for Michigan’s
            largest lavender farm.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
