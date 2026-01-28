import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * 
 */
export function setCharTimeline() {
  // Ensure DOM elements exist before creating timelines
  if (
    !document.querySelector(".landing-section") ||
    !document.querySelector(".about-section") ||
    !document.querySelector(".whatIDO")
  ) {
    return;
  }

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".landing-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "center 55%",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".whatIDO",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  if (window.innerWidth > 1024) {
    // Forzar estado inicial centrado
    gsap.set(".character-model", { xPercent: -50, x: 0 });

    tl1
      .to(".character-model", { x: "-25vw", xPercent: -50, duration: 1 }, 0)
      .to(".landing-container", { opacity: 0, duration: 0.4 }, 0)
      .to(".landing-container", { y: "40%", duration: 0.8 }, 0)
      .fromTo(".about-me", { y: "-50%" }, { y: "0%", duration: 1 }, 0);

    tl2
      .fromTo(
        ".about-section",
        { y: "0%", duration: 2, ease: "power2.inOut" },
        { y: "0%", duration: 8, ease: "power3.inOut" },
        0
      )
      .fromTo(
        ".about-section",
        { opacity: 1 },
        { opacity: 0, duration: 2, ease: "power2.inOut" },
        3
      )
      .to(
        ".character-model",
        {
          x: "0%", // Centrar la imagen mientras bajamos
          xPercent: -50,
          scale: 0.82, // Reducir de 550px a ~450px
          duration: 10,
          ease: "power3.inOut",
        },
        0
      )
      .fromTo(
        ".what-box-in",
        { display: "none" },
        { display: "flex", duration: 0.1, delay: 6 },
        0
      )
      .fromTo(
        ".character-rim",
        { opacity: 1, scaleX: 1.4 },
        { opacity: 0.3, scale: 0.8, y: "10%", duration: 5, delay: 2 }, // Reducir brillo pero mantenerlo visible
        0.3
      );

    tl3
      .to(
        ".character-model",
        { opacity: 0, y: "-100%", xPercent: -50, duration: 4, ease: "power1.inOut" },
        0
      )
      .fromTo(".whatIDO", { y: 0 }, { y: "15%", duration: 2 }, 0);

    // Forzar refresco de ScrollTrigger para recalcular todas las posiciones
    ScrollTrigger.refresh();
  } else {
    const tM2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".what-box-in",
        start: "top 70%",
        end: "bottom top",
      },
    });
    tM2.to(".what-box-in", { display: "flex", duration: 0.1, delay: 0 }, 0);
  }
}

export function setAllTimeline() {
  if (!document.querySelector(".career-section")) {
    return;
  }

  const careerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".career-section",
      start: "top 30%",
      end: "100% center",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  careerTimeline
    .fromTo(
      ".career-timeline",
      { maxHeight: "10%" },
      { maxHeight: "100%", duration: 0.5 },
      0
    )
    .fromTo(
      ".career-timeline",
      { opacity: 0 },
      { opacity: 1, duration: 0.1 },
      0
    )
    .fromTo(
      ".career-dot",
      { animationIterationCount: "infinite" },
      {
        animationIterationCount: "1",
        delay: 0.3,
        duration: 0.1,
      },
      0
    );

  if (window.innerWidth > 1024) {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: "20%", duration: 0.5, delay: 0.2 },
      0
    );
  } else {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: 0, duration: 0.5, delay: 0.2 },
      0
    );
  }
}