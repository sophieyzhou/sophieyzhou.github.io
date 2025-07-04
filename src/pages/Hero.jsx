import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="hero"
      className="h-screen flex flex-col md:flex-row items-start justify-center gap-x-16 px-8 pt-4 pb-8 bg-background relative"
      data-aos="fade-in"
    >
      {/* Left side - text */}
      <div className="flex-1 flex flex-col justify-start items-center md:items-start space-y-6 pl-8 md:pl-16 mt-[60vh] -translate-y-[100%]">
        <p
          className="text-2xl md:text-3xl font-body text-neutral-dark text-center md:text-left"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Hi, my name is
        </p>
        <h1
          className="text-8xl md:text-9xl font-header font-bold text-primary leading-tight tracking-wide text-center md:text-left"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Sophie Zhou
        </h1>
        <p
          className="text-lg md:text-xl font-body text-neutral-dark max-w-xl text-center md:text-left"
          // data-aos="fade-up"
          // data-aos-delay="400"
        >
          I'm a student, engineer, strategist, designer, and part-time chef
        </p>
      </div>

      {/* Right side - Lilac image */}
      <div className="hidden md:flex flex-1 justify-center items-center mt-[-2rem]">
        <img
          src="/images/chinese_lilac.jpg"
          alt="Chinese Lilac"
          className="max-h-[650px] w-auto rounded-2xl object-cover"
          style={{ transform: "rotate(20deg)" }}
          data-aos="zoom-in"
          data-aos-delay="500"
        />
      </div>

      
    </section>
  );
}

export default Hero;
