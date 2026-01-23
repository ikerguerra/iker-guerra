import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

// Mock smoother for compatibility with other files until they are refactored
export const smoother = {
  paused: (_state?: boolean) => { },
  scrollTop: () => 0,
  scrollTo: (target: string | Element) => {
    const element = typeof target === "string" ? document.querySelector(target) : target;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  },
  refresh: () => { },
};

const Navbar = () => {
  useEffect(() => {
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section) {
            const targetElement = document.querySelector(section);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
            }
          }
        }
      });
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          iker guerra
        </a>
        <a
          href="mailto:ikerguerra@hotmail.es"
          className="navbar-connect"
          data-cursor="disable"
        >
          ikerguerra@hotmail.es
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="SOBRE MÍ" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="PROYECTOS" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACTO" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
