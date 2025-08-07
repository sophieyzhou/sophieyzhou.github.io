import React from "react";
import techStackData from "../data/techStackData.json";
import Education from "../components/Professional";
import Education from "../components/Education";

function Experience() {
  return (
    <section id="experience" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Professional Experience */}
        <section id="experience-professional">
          <h2 className="text-4xl font-header font-bold text-primary mb-8 underline text-center">
            Professional Experience
          </h2>
          <Professional />
        </section>

        {/* Academic Experience */}
        <section id="experience-academic">
          <h2 className="text-4xl font-header font-bold text-primary mb-8 underline text-center">
            Education
          </h2>
          <Education />
        </section>

        {/* Resume */}
        <section id="experience-resume" className="text-center">
          <h2 className="text-4xl font-header font-bold text-primary mb-6 underline">
            Resume
          </h2>
          <a
            href="/pdfs/SophieZhou_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-accent transition-all duration-300"
          >
            View Resume
          </a>
        </section>

        {/* Tech Stack */}
        <section id="experience-techstack">
          <h2 className="text-4xl font-header font-bold text-primary mb-12 text-center underline">
            Tech Stack
          </h2>

          {Object.entries(techStackData).map(([category, items]) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-bold text-neutral-dark mb-6">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-y-10 gap-x-6">
                {items.map(({ name, logo }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center justify-center group"
                  >
                    <img
                      src={logo}
                      alt={name}
                      loading="lazy"
                      decoding="async"
                      className="w-20 h-20 object-contain transition-transform duration-200 group-hover:scale-110"
                      style={{ aspectRatio: "1 / 1" }}
                    />
                    <p className="mt-2 text-center text-sm font-medium text-neutral-dark">
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}

export default Experience;
