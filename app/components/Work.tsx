import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { trackProjectEvent } from "../utils/gtag";
import { projectsData, Project } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    function getTranslateX() {
      // Use gsap scoped query instead of global document query
      const boxes = gsap.utils.toArray(".work-box") as HTMLElement[];
      if (boxes.length === 0) return 0;

      const workContainer = containerRef.current?.querySelector(".work-container") as HTMLElement;
      if (!workContainer) return 0;

      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = boxes[0].getBoundingClientRect();
      const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(boxes[0]).padding) / 2;
      return rect.width * boxes.length - (rectLeft + parentWidth) + padding;
    }

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${getTranslateX()}`, // Recalculate dynamically
        scrub: true,
        pin: true,
        invalidateOnRefresh: true, // Key to keeping it unbroken on resize/navigation
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });
  }, { scope: containerRef });


  const handleTitleClick = (project: Project, position: number) => {
    trackProjectEvent("click_title", project, position);
  };

  return (
    <div className="work-section" id="work" ref={containerRef}>
      <div className="work-container section-container">
        <h2>
          Mis <span>proyectos</span>
        </h2>
        <div className="work-flex">
          {projectsData.map((project, index) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{project.id}</h3>

                  <div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleTitleClick(project, index + 1)}
                    >
                      <h4>{project.name}</h4>
                    </a>
                    <p>{project.category}</p>
                  </div>
                </div>
                <p className="work-description">{project.description}</p>
                <h4>Herramientas</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.alt}
                video={project.video ? project.video : undefined}
                link={project.link}
                project={project}
                position={index + 1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
