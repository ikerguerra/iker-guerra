"use client";

import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
const Career = lazy(() => import("./Career"));
const Contact = lazy(() => import("./Contact"));
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
const Work = lazy(() => import("./Work"));
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(false);

  useEffect(() => {
    let resizeTimer: ReturnType<typeof setTimeout>;

    const initLayoutAndTimelines = () => {
      setIsDesktopView(window.innerWidth > 1024);
      setSplitText();
      import("./utils/GsapScroll").then((module) => {
        module.setCharTimeline();
        module.setAllTimeline();
      });
    };

    const resizeHandler = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initLayoutAndTimelines, 150);
    };

    initLayoutAndTimelines();
    window.addEventListener("resize", resizeHandler, { passive: true });

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", resizeHandler);
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
    window.addEventListener("scroll", handleScrollOrInteraction, { once: true, passive: true });
    window.addEventListener("mousemove", handleScrollOrInteraction, { once: true, passive: true });
    window.addEventListener("touchstart", handleScrollOrInteraction, { once: true, passive: true });

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
      <div className="container-main">
        <Landing>{children}</Landing>
        <About />
        <WhatIDo />
        <Suspense fallback={<div style={{ minHeight: "100vh" }}></div>}>
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
