"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLoading } from "../../context/LoadingProvider";
import { setCharTimeline, setAllTimeline } from "../utils/GsapScroll";
import profilePic from "../../assets/profile.png";
import gsap from "gsap";

const Scene = () => {
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    // Forzar centrado inicial con GSAP para evitar el desfase con el CSS
    gsap.set(".character-model", {
      xPercent: -50,
      x: 0,
      visibility: "visible"
    });

    // Simular carga ya que no hay modelo 3D
    setLoading(0);
    const timer = setTimeout(() => {
      setLoading(100);
      // Inicializar animaciones de GSAP para el DOM rápidamente
      setCharTimeline();
      setAllTimeline();
    }, 100);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <>
      <div className="character-container">
        <div className="character-model">
          <div className="character-image-wrapper">
            <Image
              src={profilePic}
              alt="Iker Guerra"
              className="profile-image"
              priority
              style={{
                width: 'auto',
                height: '550px',
                objectFit: 'contain'
              }}
            />
          </div>
          <div className="character-rim"></div>
          <div className="character-hover" ref={hoverDivRef}></div>
        </div>
      </div>
      <style jsx>{`
        .character-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: visible;
          z-index: 10; /* Encima del rim */
        }
        .profile-image {
          filter: drop-shadow(0 0 30px rgba(196, 129, 255, 0.45));
          user-select: none;
          pointer-events: none;
          position: relative;
          z-index: 11;
        }
        .character-rim {
           opacity: 1 !important; /* Asegurar visibilidad inicial */
           z-index: 1;
        }
      `}</style>
    </>
  );
};

export default Scene;