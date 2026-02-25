"use client";

import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
const About = lazy(() => import("./About"));
const Career = lazy(() => import("./Career"));
const Contact = lazy(() => import("./Contact"));
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
const WhatIDo = lazy(() => import("./WhatIDo"));
const Work = lazy(() => import("./Work"));
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(false);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      // Reinicializar timelines de GSAP con limpieza
      import("./utils/GsapScroll").then((module) => {
        module.setCharTimeline();
        module.setAllTimeline();
      });
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      // Removed global ScrollTrigger kill here because it is async and kills triggers from remounted components in Next.js navigation/StrictMode.
    };
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("hasLoadedInitial")) {
      import("./utils/initialFX").then((module) => {
        module.bypassFX();
      });
    }
  }, []);


  const [load3D, setLoad3D] = useState(false);

  useEffect(() => {
    const handleScrollOrInteraction = () => {
      setLoad3D(true);
      window.removeEventListener("scroll", handleScrollOrInteraction);
      window.removeEventListener("mousemove", handleScrollOrInteraction);
      window.removeEventListener("touchstart", handleScrollOrInteraction);
    };

    // Load 3D either on scroll or mouse move, so it never blocks the initial render
    window.addEventListener("scroll", handleScrollOrInteraction, { once: true });
    window.addEventListener("mousemove", handleScrollOrInteraction, { once: true });
    window.addEventListener("touchstart", handleScrollOrInteraction, { once: true });

    return () => {
      window.removeEventListener("scroll", handleScrollOrInteraction);
      window.removeEventListener("mousemove", handleScrollOrInteraction);
      window.removeEventListener("touchstart", handleScrollOrInteraction);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div className="container-main">
        <Landing>{!isDesktopView && children}</Landing>
        <Suspense fallback={<div style={{ minHeight: "100vh" }}></div>}>
          <About />
          <WhatIDo />
          <Career />
          <Work />
          {isDesktopView && load3D && (
            <Suspense fallback={<div>Loading 3D Environment...</div>}>
              <TechStack />
            </Suspense>
          )}
          <Contact />
        </Suspense>
      </div>
    </div>
  );
};

export default MainContainer;
