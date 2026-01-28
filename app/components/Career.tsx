"use client";

import { memo } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import "./styles/Career.css";

interface CareerExperience {
  year: string;
  role: string;
  company: string;
  description: string;
}

const CAREER_DATA: CareerExperience[] = [
  // {
  //   year: "2018",
  //   role: "Grado Superior en DAM",
  //   company: "IES Número 1",
  //   description: "Formación especializada en arquitectura de software multiplataforma y lógica de programación avanzada. Capacitado en el diseño de interfaces interactivas, seguridad de aplicaciones y optimización de bases de datos para diversos sistemas operativos.",
  // },
  {
    year: "2021",
    role: "Formación en Centros de Trabajo",
    company: "Samoa Industrial S.L.",
    description: "Experiencia inicial en entornos de programación profesional, aprendiendo buenas prácticas, flujos de trabajo y herramientas clave utilizadas en proyectos reales.",
  },
  {
    year: "2022",
    role: "Desarrollador Java",
    company: "Intermark I.T.",
    description: "Desarrollo y mantenimiento de aplicaciones empresariales utilizando Java (Spring Boot), Angular y Bootstrap. Implementación de soluciones escalables bajo metodologías ágiles (Jira/Bitbucket).",
  },
  // {
  //   year: "2025",
  //   role: "CP en Desarrollo de Aplicaciones Web",
  //   company: "Dicampus",
  //   description: "Enfocado en tecnologías web modernas y administración de servidores. Experto en el despliegue de infraestructuras web escalables, seguridad proactiva en servicios y gestión integral del ciclo de vida de aplicaciones en red.",
  // },
  {
    year: "2025",
    role: "Desarrollador Full Stack",
    company: "Eterna Diagnostics (Startup)",
    description: "Desarrollo y evolución de webapp corporativa multi-tenant con NextJS y React. Gestión de bases de datos MySQL, automatización de despliegues (CI/CD) y coordinación de equipo remoto para optimizar procesos y reducir deuda técnica.",
  },
];

const CareerItem = memo(({ experience, index }: { experience: CareerExperience; index: number }) => (
  <m.div
    className="career-info-box"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <div className="career-info-in">
      <div className="career-role">
        <h4>{experience.role}</h4>
        <h5>{experience.company}</h5>
      </div>
      <h3>{experience.year}</h3>
    </div>
    <p>{experience.description}</p>
  </m.div>
));

CareerItem.displayName = "CareerItem";

const Career = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="career-section section-container">
        <div className="career-container">
          <m.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Mi carrera <span>&</span>
            <br /> experiencia
          </m.h2>
          <div className="career-info">
            <m.div
              className="career-timeline"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <div className="career-dot"></div>
            </m.div>
            {CAREER_DATA.map((exp, index) => (
              <CareerItem key={`${exp.company}-${index}`} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default Career;
