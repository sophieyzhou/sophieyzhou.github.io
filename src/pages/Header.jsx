import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    const isHome = location.pathname === "/" || location.pathname === "/#hero";

    if (isHome) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    {
      label: "Experience",
      id: "experience",
      submenu: [
        { label: "Professional", id: "experience-professional" },
        { label: "Education", id: "experience-academic" },
        { label: "Resume", id: "experience-resume" },
        { label: "Tech Stack", id: "experience-techstack" },
      ],
    },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-background shadow z-50">
      <nav className="w-full pl-1 pr-10 py-4 flex justify-between items-center">
        {/* Left side: Lilac + name */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/chinese_lilac.jpg"
            alt="Chinese Lilac"
            className="h-12 w-12 object-cover rounded-full"
          />
          <button
            onClick={() => handleNavClick("hero")}
            className="text-2xl font-header font-bold text-primary hover:text-accent transition-colors duration-300"
          >
            Sophie Zhou
          </button>
        </div>

        {/* Right side: Navigation */}
        <div className="space-x-6 text-lg font-body font-bold flex items-center">
          {navItems.map(({ label, id, submenu }) => (
            <div key={id} className="relative group inline-block">
              <button
                onClick={() => !submenu && handleNavClick(id)}
                className="relative text-neutral-dark transition-all duration-300 hover:text-accent
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                  after:bg-accent after:transition-all after:duration-300 group-hover:after:w-full"
              >
                {label}
              </button>

              {/* Dropdown if submenu exists */}
              {submenu && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                  {submenu.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className="block w-full text-left px-4 py-2 text-sm text-neutral-dark hover:bg-accent hover:text-white transition"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
