import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  const [showCS, setShowCS] = useState(false);
  const [showMath, setShowMath] = useState(false);
  const [showFun, setShowFun] = useState(false);

  const education = {
    university: "University of Michigan – College of Engineering",
    degree: "B.S.E. in Computer Science",
    minors: "Statistics & Multidisciplinary Design",
    honors: "University Honors (6x) · Dean’s List (3x)",
    duration: "August 2022 – May 2026",
    gpa: "3.75 / 4.0",
    courses: {
      computerScience: [
        "Data Structures & Algorithms",
        "Computer Organization",
        "Operating Systems",
        "Web Systems",
        "Machine Learning",
        "Software Engineering",
      ],
      mathematics: [
        "Calculus I, II, & III",
        "Linear Algebra",
        "Probability",
        "Regression Analysis",
        "Real Analysis",
        "Bayesian Statistics",
      ],
      justForFun: [
        "Global Poetry",
        "Astrophysics of Black Holes",
        "Contemporary Dance",
        "Energy Grid Systems Optimization",
        "Machine Learning for Astrophysics",
      ],
    },
  };

  const Section = ({ title, isOpen, toggle, children, subtitle }) => (
    <div className="border rounded-md overflow-hidden border-neutral-dark/20">
      <button
        onClick={toggle}
        className="flex items-center justify-between w-full p-4 font-medium text-left 
                   bg-primary text-neutral-light hover:bg-secondary hover:text-primary 
                   transition-colors font-body"
      >
        <div className="flex flex-col">
          <span>{title}</span>
          {subtitle && (
            <span className="text-xs italic opacity-80">{subtitle}</span>
          )}
        </div>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : "-rotate-90"
          }`}
        >
          &gt;
        </span>
      </button>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-2 p-4 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );

  return (
    <section id="education" className="py-20 px-4 md:px-0 font-body">
      <div className="container mx-auto max-w-4xl">

        {/* Education Card */}
        <div className="bg-background text-neutral-dark rounded-xl shadow-lg p-6 md:p-10 border border-neutral-dark/10">
          {/* Header Row with Logo + Info */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center gap-6">
              <img
                src="/images/michigan.png"
                alt="University of Michigan Logo"
                className="h-20 w-auto object-contain"
              />
              <div className="space-y-1 text-center md:text-left">
                <h3 className="text-2xl font-header font-bold text-primary">
                  {education.university}
                </h3>
                <p className="text-gray-700">
                  {education.degree} <br /> Minors: {education.minors}
                </p>
                <p className="text-sm italic text-gray-500">{education.honors}</p>
              </div>
            </div>

            {/* Duration + GPA */}
            <div className="flex items-center gap-2 text-gray-600 mt-4 md:mt-0">
              <FaCalendarAlt className="h-5 w-5" />
              <span>{education.duration}</span>
              <span className="mx-2">•</span>
              <span>GPA: {education.gpa}</span>
            </div>
          </div>

          {/* Collapsible Coursework */}
          <div className="space-y-6">
            <Section
              title="Computer Science Coursework"
              isOpen={showCS}
              toggle={() => setShowCS(!showCS)}
            >
              {education.courses.computerScience.map((course, index) => (
                <div
                  key={`cs-${index}`}
                  className="p-3 rounded-md bg-white border text-sm text-neutral-dark 
                             hover:bg-secondary hover:text-primary transition-colors"
                >
                  {course}
                </div>
              ))}
            </Section>

            <Section
              title="Mathematics & Statistics Coursework"
              isOpen={showMath}
              toggle={() => setShowMath(!showMath)}
            >
              {education.courses.mathematics.map((course, index) => (
                <div
                  key={`math-${index}`}
                  className="p-3 rounded-md bg-white border text-sm text-neutral-dark 
                             hover:bg-secondary hover:text-primary transition-colors"
                >
                  {course}
                </div>
              ))}
            </Section>

            <Section
              title="Just for Fun"
              subtitle="Making the most of my tuition"
              isOpen={showFun}
              toggle={() => setShowFun(!showFun)}
            >
              {education.courses.justForFun.map((course, index) => (
                <div
                  key={`fun-${index}`}
                  className="p-3 rounded-md bg-white border text-sm text-neutral-dark 
                             hover:bg-secondary hover:text-primary transition-colors"
                >
                  {course}
                </div>
              ))}
            </Section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
