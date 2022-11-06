import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useEffect } from "react";

const HeroFooter = () => {
  const ref = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        scrub: true,
      },
    });
    tl.to(
      ".hero-container",
      { backgroundColor: "white", duration: 0.25 },
      "-=0.2"
    );
  }, []);
  return (
    <div ref={ref} className="hero-text-section">
      <h1>Stories meet their widest audience ever</h1>
    </div>
  );
};

export default HeroFooter;
