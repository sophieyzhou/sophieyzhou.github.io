import React from "react";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background shadow z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Your name in bold */}
        <div className="text-xl font-header font-bold text-primary">
            <a
                href="#hero"
                className="text-xl font-header font-bold text-primary"
            >
                Sophie Zhou
            </a>
        </div>

        {/* Navbar links */}
        <div className="space-x-4 text-sm font-body">
          <a
            href="#hero"
            className="px-3 py-2 rounded transition-all hover:bg-primary hover:text-background"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-3 py-2 rounded transition-all hover:bg-primary hover:text-background"
          >
            About
          </a>
          <a
            href="#experience"
            className="px-3 py-2 rounded transition-all hover:bg-primary hover:text-background"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="px-3 py-2 rounded transition-all hover:bg-primary hover:text-background"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-3 py-2 rounded transition-all hover:bg-primary hover:text-background"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
