// Professional.jsx
import React from "react";

const experiences = [
  {
    role: "Summer Associate",
    org: "Boston Consulting Group",
    location: "New York, NY",
    time: "Summer 2025",
    bullets: [
      "Advised Fortune 500 client on digital transformation across operations and supply chain.",
      "Built executive dashboards and insights, projecting $20M in savings.",
      "Conducted market sizing, competitor mapping, and stakeholder alignment."
    ]
  },
  {
    role: "Software Engineering Intern",
    org: "Electric Power Research Institute",
    location: "Charlotte, NC",
    time: "Summer 2024",
    bullets: [
      "Built frontend in Python to visualize PV plant performance metrics.",
      "Implemented modular comparisons across geospatial and time series data.",
      "Optimized API backend with caching and anonymization, reducing server load by 15%."
    ]
  },
  {
    role: "Product Management Intern",
    org: "Goodnotes",
    location: "Hong Kong SAR",
    time: "Summer 2023",
    bullets: [
      "Redesigned shop UI and ranking algorithm, driving $500k+ in monthly sales.",
      "Launched 5 external partnerships, boosting inventory by 25%.",
      "Revamped pricing via elasticity tests, increasing revenue by 20%."
    ]
  },
  {
    role: "Project Lead",
    org: "Team Flow (Michigan Health Engineered for All Lives)",
    location: "Ann Arbor, MI / Kumasi, Ghana",
    time: "Sept 2023 – Present",
    bullets: [
      "Built IV drip rate monitor using ARM MCU with 80% cost savings.",
      "Led user research at Ghanaian hospital, interviewing 20+ healthcare staff.",
      "Secured $15K+ in grant funding through technical and equity-focused proposal."
    ]
  }
];

const Professional = () => {
  return (
    <section id="experience-professional">
      <h2 className="text-4xl font-header font-bold text-primary mb-8 underline text-center">
        Professional Experience
      </h2>
      <p className="text-lg font-body text-neutral-dark text-center mb-12 max-w-3xl mx-auto">
        Continuously seeking opportunities to drive deep impact at the intersection of engineering and strategy. My work spans consulting, software development, product management, and global health innovation—connected by a drive to solve complex problems with clarity and care.
      </p>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-background rounded-xl p-6 md:p-8 border border-neutral-dark/10 shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
                <p className="text-neutral-dark">{exp.org} — <span className="italic">{exp.location}</span></p>
              </div>
              <p className="text-sm text-neutral-medium">{exp.time}</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-neutral-dark">
              {exp.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Professional;
