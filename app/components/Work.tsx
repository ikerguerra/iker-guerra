import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  const projects = [
    {
      id: 1,
      name: "Construcciones MBL",
      category: "Desarrollo web",
      tools: "Next.js, React, TypeScript",
      image: "/images/project-construcciones.png",
      alt: "Página web Construcciones MBL",
      video: "project-construcciones.mp4"
    },
    {
      id: 2,
      name: "Eterna Diagnostics",
      category: "Desarrollo web",
      tools: "Next.js, React, TypeScript",
      image: "/images/web-eterna-diagnostics.png",
      alt: "Página web Eterna Diagnostics"
    },
    {
      id: 3,
      name: "Eleva HPS",
      category: "Desarrollo web",
      tools: "Next.js, React, TypeScript",
      image: "/images/web-eleva-hps.png",
      alt: "Página web Eleva HPS",
      video: "WebElevaHPS.mp4"
    },
    {
      id: 4,
      name: "Mundo zapas",
      category: "Desarrollo web",
      tools: "HTML, CSS, Javascript, PHP",
      image: "/images/mundozapas.png",
      alt: "Página web Mundo zapas"
    }
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Mis <span>proyectos</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{project.id}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Herramientas</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.alt} video={project.video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
