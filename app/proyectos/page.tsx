"use client";

import { useRef } from "react";
import { projectsData } from "../data/projects";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import SocialIcons from "../components/SocialIcons";
import Contact from "../components/Contact";
import "./styles/Proyectos.css";

export default function ProyectosPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Unlock scroll (hidden by default in globals.css for main page loading)
        document.body.style.overflowY = "auto";

        // Header animation
        gsap.fromTo(
            ".proyects-header-title",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
        gsap.fromTo(
            ".proyects-header-desc",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
        );

        // Cards staggered animation
        gsap.fromTo(
            ".project-card",
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".projects-grid",
                    start: "top 85%",
                }
            }
        );
    }, { scope: containerRef });

    return (
        <>
            <Cursor />
            <Navbar />
            <SocialIcons />
            <main className="proyectos-page" ref={containerRef}>
                <header className="proyects-header">
                    <div className="proyects-header-content">
                        <Link href="/" className="back-link">
                            &larr; Volver al inicio
                        </Link>
                        <h1 className="proyects-header-title">
                            Mis <span>Proyectos</span>
                        </h1>
                        <p className="proyects-header-desc">
                            Una selección de aplicaciones web, plataformas SaaS y sitios corporativos
                            desarrollados con las últimas tecnologías.
                        </p>
                    </div>
                </header>

                <section className="projects-grid-container">
                    <div className="projects-grid">
                        {projectsData.map((project) => (
                            <article key={project.id} className="project-card">
                                <div className="project-card-image">
                                    {/* Fallback pattern if Image component fails or image is missing, but Next/Image is better here */}
                                    <Image
                                        src={project.image}
                                        alt={project.alt}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                                    />
                                    <div className="project-card-overlay">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-action-btn primary-btn"
                                            aria-label={`Visitar proyecto ${project.name}`}
                                        >
                                            Ver Proyecto <FiArrowUpRight />
                                        </a>
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-action-btn secondary-btn"
                                                aria-label={`Ver código fuente de ${project.name}`}
                                            >
                                                <FiGithub /> Código
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="project-card-content">
                                    <div className="project-category">{project.category}</div>
                                    <h2 className="project-title">{project.name}</h2>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-tools">
                                        {project.tools.split(",").map((tool, index) => (
                                            <span key={index} className="tool-tag">
                                                {tool.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
