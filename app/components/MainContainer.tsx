"use client";

import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
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
      // Limpiar ScrollTriggers al desmontar
      import("gsap/ScrollTrigger").then((module) => {
        module.ScrollTrigger.getAll().forEach(st => st.kill());
      });
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
        <About />
        <WhatIDo />
        <Career />
        <Work />
        {isDesktopView && (
          <Suspense fallback={<div>Loading....</div>}>
            <TechStack />
          </Suspense>
        )}
        <Contact />
      </div>
    </div>
  );
};

export default MainContainer;
