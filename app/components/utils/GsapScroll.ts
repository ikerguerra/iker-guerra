import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * 
 */
export function setCharTimeline() {
  // Limpiar instancias previas para evitar duplicados en React 19
  ScrollTrigger.getAll().filter(st => st.vars.trigger === ".landing-section" || st.vars.trigger === ".about-section" || st.vars.trigger === ".whatIDO").forEach(st => st.kill());

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
      start: "top 55%",
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
    gsap.set(".character-model", { xPercent: -50, x: 0, opacity: 1 });

    tl1
      .to(".character-model", { x: "-25vw", xPercent: -50, duration: 1 }, 0)
      .to(".landing-container", { opacity: 0, duration: 0.4 }, 0)
      .to(".landing-container", { y: "40%", duration: 0.8 }, 0);

    tl2
      .fromTo(
        ".character-model",
        { x: "-25vw", scale: 1, xPercent: -50 },
        {
          x: "0%", // Centrar la imagen mientras bajamos
          xPercent: -50,
          scale: 0.82,
          duration: 10,
          ease: "power3.inOut",
        },
        0
      )
      .fromTo(
        ".character-rim",
        { opacity: 1, scaleX: 1.4 },
        { opacity: 0.3, scale: 0.8, y: "10%", duration: 5 },
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
  // Limpiar instancias previas de carrera para evitar duplicados
  ScrollTrigger.getAll().filter(st => st.vars.trigger === ".career-section").forEach(st => st.kill());

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
      ".career-info-box",
      { opacity: 0 },
      { opacity: 1, stagger: 0.1, duration: 0.5 },
      0
    );

  if (window.innerWidth > 1024) {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: "20%", duration: 0.5, delay: 0.2 },
      0
    );
  }
}