import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-neutral-light font-body">
      {/* Top border accent */}
      <div className="h-px bg-secondary/30 w-full" />

      <div className="max-w-6xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: name + tagline */}
        <div className="text-center md:text-left">
          <p className="font-header font-bold text-xl text-neutral-light">
            Sophie Zhou
          </p>
          <p className="text-secondary text-sm mt-1">
            Engineer · Designer · Serial Hobbyist
          </p>
        </div>

        {/* Center: quick links */}
        <div className="flex gap-6 text-sm text-secondary">
          {["hero", "about", "projects", "experience", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="capitalize hover:text-accent transition-colors duration-200"
            >
              {id === "hero" ? "Home" : id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>

        {/* Right: back to top + copyright */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <button
            onClick={scrollToTop}
            className="text-sm text-secondary hover:text-accent transition-colors duration-200 flex items-center gap-1"
          >
            ↑ Back to top
          </button>
          <p className="text-xs text-secondary/50">
            &copy; {new Date().getFullYear()} Sophie Zhou. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
