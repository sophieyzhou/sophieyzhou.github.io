// Professional.jsx
import React from "react";

const experiences = [
  {
    role: "Summer Associate",
    org: "Boston Consulting Group",
    location: "Chicago, IL",
    time: "Summer 2025",
    bullets: [
      "Engineered assortment optimizer for Fortune 500 client, lifting dead-net profit by 5%",
      "Developed Databricks reporting to compare markets and quantify gains.",
      "Translated merchandising goals into platform rules and feature specs.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Electric Power Research Institute",
    location: "Charlotte, NC",
    time: "Summer 2024",
    bullets: [
      "Built frontend in Python to visualize PV plant performance metrics.",
      "Implemented modular comparisons across geospatial and time series data.",
      "Optimized API backend with caching and anonymization, reducing server load by 15%.",
    ],
  },
  {
    role: "Product Management Intern",
    org: "Goodnotes",
    location: "Hong Kong SAR",
    time: "Summer 2023",
    bullets: [
      "Redesigned shop UI and ranking algorithm, driving $500k+ in monthly sales.",
      "Launched 5 external partnerships, boosting inventory by 25%.",
      "Revamped pricing via elasticity tests, increasing revenue by 20%.",
    ],
  },
  {
    role: "Project Lead",
    org: "Team Flow (Michigan Health Engineered for All Lives)",
    location: "Ann Arbor, MI / Kumasi, Ghana",
    time: "Sept 2023 – Present",
    bullets: [
      "Built IV drip rate monitor using an STM32 MCU with 80% cost savings.",
      "Led user research in Kumasi, Ghana, interviewing 20+ healthcare staff.",
      "Secured $35K+ in grant funding through technical and equity-focused proposal.",
    ],
  },
];

const Professional = () => {
  return (
    <section id="experience-professional" className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-header font-bold text-primary mb-8 underline text-center">
        Professional Experience
      </h2>
      <p className="text-lg font-body text-neutral-dark text-center mb-12 max-w-2xl mx-auto">
        Continuously seeking impact-driven opportunities at the intersection of
        engineering and strategy. My work spans consulting, software, product,
        and global health innovation.
      </p>

      {/* Timeline: centered vertical line */}
      <div className="relative">
        {/* The vertical line, centered */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-neutral-dark/15" />

        <div className="space-y-10">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className="relative flex items-center gap-0">
                {/* Left side content or spacer */}
                <div className={`w-1/2 ${isLeft ? "pr-10 text-right" : ""}`}>
                  {isLeft && (
                    <div className="bg-background p-5 rounded-xl shadow border border-neutral-dark/10 hover:-translate-y-1 transition-transform duration-200">
                      <div className="mb-2">
                        <h3 className="text-lg font-semibold text-primary">
                          {exp.role}
                        </h3>
                        <p className="text-neutral-dark text-sm">
                          {exp.org} —{" "}
                          <span className="italic">{exp.location}</span>
                        </p>
                        <p className="text-xs text-neutral-dark/60 mt-1">
                          {exp.time}
                        </p>
                      </div>
                      <ul className="space-y-1 text-sm text-neutral-dark text-left list-none">
                        {exp.bullets.map((point, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-secondary mt-0.5 shrink-0">
                              ▸
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary border-2 border-white rounded-full shadow z-10" />

                {/* Right side content or spacer */}
                <div className={`w-1/2 ${!isLeft ? "pl-10" : ""}`}>
                  {!isLeft && (
                    <div className="bg-background p-5 rounded-xl shadow border border-neutral-dark/10 hover:-translate-y-1 transition-transform duration-200">
                      <div className="mb-2">
                        <h3 className="text-lg font-semibold text-primary">
                          {exp.role}
                        </h3>
                        <p className="text-neutral-dark text-sm">
                          {exp.org} —{" "}
                          <span className="italic">{exp.location}</span>
                        </p>
                        <p className="text-xs text-neutral-dark/60 mt-1">
                          {exp.time}
                        </p>
                      </div>
                      <ul className="space-y-1 text-sm text-neutral-dark list-none">
                        {exp.bullets.map((point, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-secondary mt-0.5 shrink-0">
                              ▸
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Professional;
