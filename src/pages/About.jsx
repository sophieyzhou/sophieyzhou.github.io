import React from "react";

const stats = [
  { number: "3", label: "Minors" },
  { number: "4", label: "Internships" },
  { number: "6+", label: "Projects" },
  { number: "3.75", label: "GPA" },
];

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-start px-8 py-16"
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

        {/* Right: Text + Stats */}
        <div className="md:w-2/3 w-full flex flex-col gap-6">
          <div className="text-lg md:text-xl font-body text-neutral-dark leading-relaxed">
            <p>
              Welcome! I'm Sophie. I'm University of Michigan graduate with a 
              B.S.E in Computer Science and minors in Math and Statistics. 
              I'm passionate about using analytical thinking to solve complex 
              problems across medicine, energy, and agriculture.
            </p>
            <br />
            <p>
              My technical background and personal interests have taken me from
              designing low-cost medical devices, to building machine learning
              models for genetics, to developing financial strategy for
              Michigan's largest lavender farm. In my professional life, I've
              worked across ops at an ed-tech startup, webdev for an energy
              nonprofit, and most recently, pharma-retail product optimization
              at BCG, where I'm currently an associate. 
            </p>
            <br />
            <p>
              I thrive in dynamic, collaborative settings, and outside of work,
              you'll find me reading memoirs, running by the lake, bringing
              baked goods to friends, or listening to country music. I'm looking
              to join an interdisciplinary team where I can model, build, and
              drive impact.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-4 mt-2 pt-6 border-t border-neutral-dark/15">
            {stats.map(({ number, label }) => (
              <div key={label} className="flex flex-col items-center text-center group">
                <span className="text-3xl md:text-4xl font-header font-bold text-primary group-hover:text-accent transition-colors duration-300">
                  {number}
                </span>
                <span className="text-xs md:text-sm font-body text-neutral-dark/70 uppercase tracking-widest mt-1">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Interest chips */}
          <div className="flex flex-wrap gap-2 mt-2">
            {["Machine Learning", "Biomedical Devices", "Energy Systems", "Product Design", "Data Science"].map(
              (tag, i) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-body rounded-full border border-secondary text-primary bg-secondary/20 hover:bg-secondary hover:text-white transition-colors duration-200"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
