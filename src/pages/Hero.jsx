import React, { useEffect } from "react";
import AOS from "aos";

const interests = ["ML & AI", "Biomedical", "Energy", "Design", "Strategy"];

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="hero"
      className="
        min-h-[100svh]
        flex flex-col md:flex-row
        items-center md:items-center justify-center
        gap-x-[clamp(1rem,6vw,5rem)]
        px-[clamp(1rem,5vw,3rem)]
        py-[clamp(1rem,6vh,3rem)]
        bg-background relative overflow-hidden
      "
      data-aos="fade-in"
    >
      {/* Subtle background blob for depth */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-secondary/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-accent/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Left side - text */}
      <div
        className="
          flex-1 flex flex-col justify-center
          items-center md:items-start
          gap-[clamp(0.75rem,2.5vh,1.75rem)]
          relative z-10
        "
      >
        <p
          className="
            font-body text-neutral-dark text-center md:text-left
            text-[clamp(1rem,2.5vw,1.75rem)]
          "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Hi, my name is
        </p>

        <h1
          className="
            font-header font-bold text-primary leading-[0.95]
            tracking-wide text-center md:text-left
            text-[clamp(2.5rem,9vw,7rem)]
            transition-transform duration-300 hover:scale-105 cursor-pointer
          "
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Sophie Zhou
        </h1>

        <p
          className="
            font-body text-neutral-dark text-center md:text-left
            text-[clamp(1rem,2.2vw,1.25rem)]
            max-w-[min(70ch,100%)]
          "
          data-aos="fade-up"
          data-aos-delay="500"
        >
          I'm an engineer, designer, and serial hobbyist
        </p>

        {/* Interest chips */}
        <div
          className="flex flex-wrap gap-2 justify-center md:justify-start"
          data-aos="fade-up"
          data-aos-delay="650"
        >
          {interests.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm font-body rounded-full border border-primary/40 text-primary bg-primary/5 hover:bg-primary hover:text-white transition-all duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right side - image with decorative frame */}
      <div
        className="hidden md:flex flex-1 justify-center items-center mt-[-2rem] relative"
        data-aos="zoom-in"
        data-aos-delay="500"
      >
        {/* Decorative frame — offset behind the photo */}
        <div
          className="absolute w-[320px] h-[420px] rounded-2xl border-2 border-secondary/60 bg-secondary/10"
          style={{ transform: "rotate(14deg) translate(18px, 12px)" }}
          aria-hidden="true"
        />
        {/* Second decorative frame — accent colored */}
        <div
          className="absolute w-[320px] h-[420px] rounded-2xl border border-accent/40"
          style={{ transform: "rotate(22deg) translate(-10px, -8px)" }}
          aria-hidden="true"
        />

        {/* The actual photo */}
        <img
          src="/images/chinese_lilac.jpg"
          alt="Chinese Lilac"
          className="relative max-h-[420px] w-auto rounded-2xl object-cover shadow-2xl
            transition-transform duration-300 hover:scale-105"
          style={{ transform: "rotate(18deg)" }}
        />
      </div>
    </section>
  );
}

export default Hero;
