import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./pages/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectsDetailed from "./pages/ProjectsDetailed";
import Footer from "./pages/Footer";

function MainSite() {
  return (
    <div className="bg-background text-neutral-dark font-body scroll-smooth">
      <Header />

      <section id="hero" className="pt-20">
        <Hero />
      </section>

      <section id="about" className="py-20">
        <About />
      </section>

      <section id="projects" className="py-20">
        <Projects />
      </section>

      <section id="experience" className="py-20">
        <Experience />
      </section>

      <section id="contact" className="py-20">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/projects_detailed" element={<ProjectsDetailed />} />
      </Routes>
    </Router>
  );
}

export default App;
