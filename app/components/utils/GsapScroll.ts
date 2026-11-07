import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

let activeTimelines: gsap.core.Timeline[] = [];

/**
 * 
 */
export function setCharTimeline() {
  // Kill old timelines to prevent stacking on resize or re-init
  activeTimelines.forEach((tl) => tl.kill());
  activeTimelines = [];

  // Ensure all critical DOM triggers exist before creating timelines
  if (
    !document.querySelector(".landing-section") ||
    !document.querySelector(".about-section") ||
    !document.querySelector(".whatIDO") ||
    !document.querySelector(".character-model")
  ) {
    return;
  }

  if (window.innerWidth > 1024) {
    // Estado base determinista centrado
    gsap.set(".character-model", {
      xPercent: -50,
      x: 0,
      y: 0,
      yPercent: 0,
      scale: 1,
      opacity: 1,
    });

    // Timeline maestra continua para CharacterModel (evita solapamientos y saltos entre secciones)
    const charTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".landing-section",
        start: "top top",
        endTrigger: ".whatIDO",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    charTl
      // Tramo 1 (0vh -> 100vh): Centro -> Izquierda (About)
      .fromTo(
        ".character-model",
        {
          x: 0,
          xPercent: -50,
          y: 0,
          yPercent: 0,
          scale: 1,
          opacity: 1,
        },
        {
          x: "-25vw",
          xPercent: -50,
          y: 0,
          yPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "sine.inOut",
        },
        0
      )
      // Tramo 2 (100vh -> 200vh): Izquierda -> Centro escalado (WhatIDo)
      .fromTo(
        ".character-model",
        {
          x: "-25vw",
          xPercent: -50,
          y: 0,
          yPercent: 0,
          scale: 1,
          opacity: 1,
        },
        {
          x: 0,
          xPercent: -50,
          y: 0,
          yPercent: 0,
          scale: 0.82,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          immediateRender: false,
        },
        1
      )
      .fromTo(
        ".character-rim",
        { opacity: 1, scaleX: 1.4 },
        {
          opacity: 0.3,
          scale: 0.8,
          y: "10%",
          duration: 0.8,
          ease: "sine.inOut",
          immediateRender: false,
        },
        1.2
      )
      // Tramo 3 (200vh -> 300vh): Salida fluida hacia arriba al pasar WhatIDo
      .fromTo(
        ".character-model",
        {
          x: 0,
          xPercent: -50,
          y: 0,
          yPercent: 0,
          scale: 0.82,
          opacity: 1,
        },
        {
          x: 0,
          xPercent: -50,
          y: 0,
          yPercent: -100,
          scale: 0.82,
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          immediateRender: false,
        },
        2
      );

    // Timelines exclusivas para el contenido DOM de cada sección
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

    tl1
      .fromTo(
        ".landing-container",
        { opacity: 1 },
        { opacity: 0, duration: 0.4 },
        0
      )
      .fromTo(
        ".landing-container",
        { y: "0%" },
        { y: "40%", duration: 0.8 },
        0
      )
      .fromTo(".about-me", { y: "-50%" }, { y: "0%", duration: 1 }, 0);

    tl2
      .to({}, { duration: 10 }, 0) // Mantiene la proporción temporal exacta de la sección
      .fromTo(
        ".about-section",
        { opacity: 1 },
        { opacity: 0, duration: 2, ease: "power2.inOut", immediateRender: false },
        3
      )
      .fromTo(
        ".what-box-in",
        { display: "none" },
        { display: "flex", duration: 0.1, delay: 6 },
        0
      );

    tl3.fromTo(
      ".whatIDO",
      { y: 0 },
      { y: "15%", duration: 4, ease: "none", immediateRender: false },
      0
    );

    // Forzar refresco de ScrollTrigger para recalcular todas las posiciones
    ScrollTrigger.refresh();
    activeTimelines.push(charTl, tl1, tl2, tl3);
  } else {
    gsap.set(".character-model", {
      xPercent: -50,
      x: 0,
      y: 0,
      yPercent: 0,
      scale: 1,
      opacity: 1,
    });

    const tM2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".what-box-in",
        start: "top 70%",
        end: "bottom top",
      },
    });
    tM2.to(".what-box-in", { display: "flex", duration: 0.1, delay: 0 }, 0);
    ScrollTrigger.refresh();
    activeTimelines.push(tM2);
  }
}

export function setAllTimeline() {
  // Logic migrated to Career.tsx using useGSAP for component lifecycles
}