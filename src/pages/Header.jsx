import React from "react";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background shadow z-50">
      {/* <nav className="max-w-6xl mx-auto pl-0 pr-3 py-4 flex justify-between items-center"> */}
      <nav className="w-full pl-1 pr-10 py-4 flex justify-between items-center">


        
        {/* Left side: Lilac image + name */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/chinese_lilac.jpg"
            alt="Chinese Lilac"
            className="h-12 w-12 object-cover rounded-full"
          />
          <a
            href="#hero"
            className="text-2xl font-header font-bold text-primary"
          >
            Sophie Zhou
          </a>
        </div>

        {/* Navbar links */}
        <div className="space-x-6 text-lg font-body font-bold">
          {["Home", "About", "Projects", "Experience", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="relative text-neutral-dark transition-all duration-300 hover:text-accent
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
              after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </div>

      </nav>
    </header>
  );
}

export default Header;
