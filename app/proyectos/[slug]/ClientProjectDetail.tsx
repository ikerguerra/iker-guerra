"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowUpRight, FiGithub, FiCheckCircle, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Cursor from "../../components/Cursor";
import Navbar from "../../components/Navbar";
import SocialIcons from "../../components/SocialIcons";
import { Project } from "../../data/projects";
import "./styles/ProjectDetail.css";

interface ClientProjectDetailProps {
    project: Project;
}

export default function ClientProjectDetail({ project }: ClientProjectDetailProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null || !project.gallery) return;

            if (e.key === "Escape") {
                setSelectedIndex(null);
            } else if (e.key === "ArrowLeft") {
                setSelectedIndex((prev) => (prev === null ? null : (prev === 0 ? project.gallery!.length - 1 : prev - 1)));
            } else if (e.key === "ArrowRight") {
                setSelectedIndex((prev) => (prev === null ? null : (prev === project.gallery!.length - 1 ? 0 : prev + 1)));
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, project.gallery]);

    useGSAP(() => {
        // Unlock scroll (in case it was hidden)
        document.body.style.overflowY = "auto";

        const tl = gsap.timeline();

        // Header animation
        tl.fromTo(
            ".project-detail-category",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        )
            .fromTo(
                ".project-detail-title",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                "-=0.4"
            )
            .fromTo(
                ".project-detail-desc",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                "-=0.6"
            )
            .fromTo(
                ".project-detail-actions",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
                "-=0.4"
            )
            .fromTo(
                ".project-detail-image-wrapper",
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
                "-=0.2"
            );

        // Content sections stagger
        gsap.fromTo(
            ".project-section-fade",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".project-detail-content",
                    start: "top 80%",
                }
            }
        );

    }, { scope: containerRef });

    return (
        <>
            <Cursor />
            <Navbar />
            <SocialIcons />
            <main className="project-detail-page" ref={containerRef}>
                {/* HERO SECTION */}
                <header className="project-detail-hero">
                    <div className="project-detail-hero-content">
                        <Link href="/proyectos" className="back-link">
                            &larr; Volver a Proyectos
                        </Link>
                        <div className="project-detail-category">{project.category}</div>
                        <h1 className="project-detail-title">{project.name}</h1>
                        <p className="project-detail-desc">{project.description}</p>

                        <div className="project-detail-actions">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-action-btn primary-btn"
                            >
                                Visitar Web <FiArrowUpRight />
                            </a>
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-action-btn secondary-btn"
                                >
                                    <FiGithub /> Ver Código
                                </a>
                            )}
                        </div>
                    </div>
                </header>

                {/* MAIN IMAGE */}
                <div className="project-detail-image-container">
                    <div className="project-detail-image-wrapper">
                        <Image
                            src={project.image}
                            alt={project.alt}
                            width={1200}
                            height={800}
                            style={{ width: "100%", height: "auto", objectFit: "contain" }}
                            priority
                            sizes="(max-width: 1200px) 100vw, 1200px"
                        />
                    </div>
                </div>

                {/* CONTENT SECTION */}
                <section className="project-detail-content">
                    <div className="project-detail-grid">

                        {/* LEFT COL: Descripción Larga y Retos */}
                        <div className="project-main-info">
                            {project.longDescription && (
                                <div className="project-section-fade detail-section">
                                    <h2>El Proyecto</h2>
                                    <p>{project.longDescription}</p>
                                </div>
                            )}

                            {project.challenges && (
                                <div className="project-section-fade detail-section mt-12">
                                    <h2>Retos Técnicos</h2>
                                    <p>{project.challenges}</p>
                                </div>
                            )}
                        </div>

                        {/* RIGHT COL: Features y Stack */}
                        <aside className="project-sidebar">
                            <div className="project-section-fade detail-section">
                                <h3>Tecnologías</h3>
                                <div className="project-tools-detail">
                                    {project.tools.split(",").map((tool, index) => (
                                        <span key={index} className="tool-tag">
                                            {tool.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {project.features && project.features.length > 0 && (
                                <div className="project-section-fade detail-section mt-12">
                                    <h3>Características Clave</h3>
                                    <ul className="project-features-list">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <FiCheckCircle className="feature-icon" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </aside>
                    </div>

                    {/* GALLERY SECTION (if exists) */}
                    {project.gallery && project.gallery.length > 0 && (
                        <div className="project-section-fade project-gallery">
                            <h2>Galería</h2>
                            <div className="gallery-grid">
                                {project.gallery.map((imgSrc, idx) => (
                                    <div key={idx} className="gallery-image-wrapper" onClick={() => setSelectedIndex(idx)} style={{ cursor: "pointer" }}>
                                        <Image
                                            src={imgSrc}
                                            alt={`${project.name} preview ${idx + 1}`}
                                            width={800}
                                            height={500}
                                            style={{ width: "100%", height: "auto", objectFit: "contain" }}
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </section>

                {/* FOOTER CTA */}
                <section className="project-detail-footer project-section-fade">
                    <p>¿Te gusta lo que ves?</p>
                    <Link href="/contacto" className="project-action-btn primary-btn footer-btn">
                        Hablemos de tu proyecto
                    </Link>
                </section>
            </main>

            {/* LIGHTBOX OVERLAY */}
            {selectedIndex !== null && project.gallery && (
                <div className="lightbox-overlay" onClick={() => setSelectedIndex(null)}>
                    <button className="lightbox-close" onClick={() => setSelectedIndex(null)} aria-label="Cerrar vista ampliada">
                        <FiX />
                    </button>

                    {project.gallery.length > 1 && (
                        <button
                            className="lightbox-nav lightbox-prev"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedIndex((prev) => (prev === null ? null : (prev === 0 ? project.gallery!.length - 1 : prev - 1)));
                            }}
                            aria-label="Imagen anterior"
                        >
                            <FiChevronLeft />
                        </button>
                    )}

                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={project.gallery[selectedIndex]}
                            alt={`Vista ampliada ${selectedIndex + 1}`}
                            fill
                            style={{ objectFit: "contain" }}
                            sizes="100vw"
                            className="lightbox-image"
                        />
                    </div>

                    {project.gallery.length > 1 && (
                        <button
                            className="lightbox-nav lightbox-next"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedIndex((prev) => (prev === null ? null : (prev === project.gallery!.length - 1 ? 0 : prev + 1)));
                            }}
                            aria-label="Siguiente imagen"
                        >
                            <FiChevronRight />
                        </button>
                    )}
                </div>
            )}
        </>
    );
}
