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
      category: "Web Development",
      tools: "Next.js, React, TypeScript",
      image: "/images/project-construcciones.png",
      alt: "Construcciones MBL Project",
      video: "project-construcciones.mp4"
    },
    {
      id: 2,
      name: "Eterna Diagnostics",
      category: "Healthcare Platform",
      tools: "React, Spring Boot, PostgreSQL",
      image: "/images/project-eterna-1.jpg",
      alt: "Eterna Diagnostics Platform"
    },
    {
      id: 3,
      name: "Eterna Dashboard",
      category: "Analytics",
      tools: "React, TypeScript, Chart.js",
      image: "/images/project-eterna-2.jpg",
      alt: "Eterna Analytics Dashboard"
    },
    {
      id: 4,
      name: "Project Name",
      category: "Category",
      tools: "Javascript, TypeScript, React, Threejs",
      image: "/images/placeholder.webp",
      alt: ""
    },
    {
      id: 5,
      name: "Project Name",
      category: "Category",
      tools: "Javascript, TypeScript, React, Threejs",
      image: "/images/placeholder.webp",
      alt: ""
    },
    {
      id: 6,
      name: "Project Name",
      category: "Category",
      tools: "Javascript, TypeScript, React, Threejs",
      image: "/images/placeholder.webp",
      alt: ""
    },
    {
      id: 7,
      name: "Project Name",
      category: "Category",
      tools: "Javascript, TypeScript, React, Threejs",
      image: "/images/video.mp4",
      alt: ""
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
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
                <h4>Tools and features</h4>
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
