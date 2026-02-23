import { CustomSplitText as SplitText } from "./textUtils";
import gsap from "gsap";

export function getLandingTexts() {
  let TextProps = { type: "chars,lines", linesClass: "split-h2" };
  return {
    landingText: new SplitText([".landing-info h3", ".landing-intro h2", ".landing-intro h1"], { type: "chars,lines", linesClass: "split-line" }),
    landingText2: new SplitText(".landing-h2-info", TextProps),
    landingText3: new SplitText(".landing-h2-info-1", TextProps),
    landingText4: new SplitText(".landing-h2-1", TextProps),
    landingText5: new SplitText(".landing-h2-2", TextProps),
  };
}

export function initialFX() {
  document.body.style.overflowY = "auto";
  const mainEls = document.getElementsByTagName("main");
  if (mainEls.length > 0) mainEls[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "var(--backgroundColor)",
    duration: 0.5,
    delay: 1,
  });

  const { landingText, landingText2, landingText3, landingText4, landingText5 } = getLandingTexts();

  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    { opacity: 1, duration: 1.2, filter: "blur(0px)", ease: "power3.inOut", y: 0, stagger: 0.025, delay: 0.3 }
  );

  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    { opacity: 1, duration: 1.2, filter: "blur(0px)", ease: "power3.inOut", y: 0, stagger: 0.025, delay: 0.3 }
  );

  gsap.fromTo(".landing-info-h2", { opacity: 0, y: 30 }, { opacity: 1, duration: 1.2, ease: "power1.inOut", y: 0, delay: 0.8 });
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    { opacity: 1, duration: 1.2, ease: "power1.inOut", delay: 0.1 }
  );

  LoopText(landingText2, landingText3);
  LoopText(landingText4, landingText5);
}

export function bypassFX() {
  document.body.style.overflowY = "auto";
  const mainEls = document.getElementsByTagName("main");
  if (mainEls.length > 0) mainEls[0].classList.add("main-active");
  gsap.set("body", { backgroundColor: "var(--backgroundColor)" });

  // Si existen los elementos de la landing page, saltar sus animaciones y setear loops
  if (document.querySelector(".landing-info h3")) {
    const { landingText, landingText2, landingText3, landingText4, landingText5 } = getLandingTexts();

    gsap.set(landingText.chars, { opacity: 1, y: 0, filter: "blur(0px)" });
    gsap.set(landingText2.chars, { opacity: 1, y: 0, filter: "blur(0px)" });
    gsap.set(".landing-info-h2", { opacity: 1, y: 0 });

    // Initialize loops so texts don't overlap
    LoopText(landingText2, landingText3);
    LoopText(landingText4, landingText5);
  }

  gsap.set([".header", ".icons-section", ".nav-fade"], { opacity: 1 });
}

function LoopText(Text1: SplitText, Text2: SplitText) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
