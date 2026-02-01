import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { trackProjectEvent } from "../utils/gtag";

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

  interface Project {
    id: number;
    name: string;
    category: string;
    tools: string;
    image: string;
    alt: string;
    video?: string;
    link: string;
  }

  const projects: Project[] = [
    {
      id: 1,
      name: "Eterna Diagnostics",
      category: "Desarrollo web",
      tools: "Next.js, React, TypeScript, Tailwind CSS",
      image: "/images/web-eterna-diagnostics.png",
      alt: "Página web Eterna Diagnostics",
      link: "https://eternadx.com"
    },
    {
      id: 2,
      name: "Eleva HPS",
      category: "Desarrollo web",
      tools: "Next.js, React, TypeScript, Tailwind CSS",
      image: "/images/web-eleva-hps.png",
      alt: "Página web Eleva HPS",
      link: "https://elevahps.com"
    },
    {
      id: 3,
      name: "Construcciones MBL",
      category: "Desarrollo web",
      tools: "Next.js, React, TypeScript, Bootstrap",
      image: "/images/project-construcciones.png",
      alt: "Página web Construcciones MBL",
      link: "https://construccionesmbl.vercel.app"
      // video: "project-construcciones.mp4"
    },
    {
      id: 4,
      name: "Gif Expert App",
      category: "Desarrollo web",
      tools: "React 18, JavaScript, Vite, CSS3, Giphy API, Jest",
      image: "/images/gif-expert-app.png",
      alt: "Página web Gif Expert App",
      link: "https://ikerguerra.github.io/react-gifexpert/"
    },
    {
      id: 5,
      name: "Mundo zapas",
      category: "Desarrollo web",
      tools: "HTML, CSS, Javascript, PHP, MySQL",
      image: "/images/mundozapas.png",
      alt: "Página web Mundo zapas",
      link: "https://mundozapas.ct.ws"
    }
  ];

  const handleTitleClick = (project: Project, position: number) => {
    trackProjectEvent("click_title", project, position);
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Mis <span>proyectos</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
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
