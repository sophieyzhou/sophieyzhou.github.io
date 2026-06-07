import React, { useEffect, useRef } from "react";

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    // Ring lags behind with lerp in animation frame
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 16}px, ${ring.current.y - 16}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    // Grow ring on hoverable elements
    const handleEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "48px";
        ringRef.current.style.height = "48px";
        ringRef.current.style.borderColor = "#EB9DA5";
        ringRef.current.style.transform = `translate(${ring.current.x - 24}px, ${ring.current.y - 24}px)`;
      }
    };
    const handleLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "32px";
        ringRef.current.style.height = "32px";
        ringRef.current.style.borderColor = "#0A3D16";
      }
    };

    window.addEventListener("mousemove", moveCursor);
    rafRef.current = requestAnimationFrame(animate);

    const hoverables = document.querySelectorAll("a, button, [role='button']");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    // Hide default cursor site-wide
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(rafRef.current);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      {/* Solid dot — snappy */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999]"
        style={{ willChange: "transform" }}
        aria-hidden="true"
      />
      {/* Ring — lags behind */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-[9999] transition-[width,height,border-color] duration-200"
        style={{ willChange: "transform" }}
        aria-hidden="true"
      />
    </>
  );
}

export default CustomCursor;
