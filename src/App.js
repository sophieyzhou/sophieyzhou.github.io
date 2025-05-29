import React from "react";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="bg-background text-neutral-dark font-body scroll-smooth">
      {/* Sticky header with anchor links */}
      <Header />

      {/* Sections */}
      <section id="hero" className="pt-20">
        <Hero />
      </section>

      <section id="about" className="py-20">
        <About />
      </section>

      <section id="experience" className="py-20 bg-neutral-light">
        <Experience />
      </section>

      <section id="projects" className="py-20">
        <Projects />
      </section>

      <section id="contact" className="py-20 bg-neutral-light">
        {/* You can add a Contact page or section later if needed */}
        <div className="text-center">
          <h2 className="text-3xl font-header">Let’s Connect</h2>
          <p className="mt-4">Email me at sophie@umich.edu</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
