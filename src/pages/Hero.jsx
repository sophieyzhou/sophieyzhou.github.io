import React, { useEffect } from "react";
import AOS from "aos";

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
        bg-background relative
      "
      data-aos="fade-in"
    >
      {/* Left side - text */}
      <div
        className="
          flex-1 flex flex-col justify-center
          items-center md:items-start
          gap-[clamp(0.75rem,2.5vh,1.75rem)]
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
            transition-transform duration-300 hover:scale-110 cursor-pointer
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
        >
          I'm a student, engineer, strategist, and hostess
        </p>
      </div>

      {/* Right side - Lilac image */} 
      <div className=
        "hidden md:flex flex-1 justify-center items-center mt-[-2rem]"> 
        <img src="/images/chinese_lilac.jpg" 
            alt="Chinese Lilac" 
            className="max-h-[650px] w-auto rounded-2xl object-cover 
              transition-transform duration-300 transform rotate-[20deg] 
              hover:scale-110" 
            style={{ transform: "rotate(20deg)" }} 
            data-aos="zoom-in" data-aos-delay="500" 
        /> 
      </div>
    </section>
  );
}

export default Hero;
