export interface Project {
    id: number;
    name: string;
    slug: string;
    description: string;
    category: string;
    tools: string;
    image: string;
    alt: string;
    video?: string;
    link: string;
    github?: string;
    longDescription?: string;
    features?: string[];
    challenges?: string;
    gallery?: string[];
}

export const projectsData: Project[] = [
    {
        id: 1,
        name: "Blueprint AI",
        slug: "blueprint-ai",
        description: "Aplicación que permite a múltiples organizaciones subir, gestionar y consultar sus documentos técnicos mediante una interfaz de chat impulsada por IA (RAG).",
        category: "Inteligencia Artificial / SaaS",
        tools: "Next.js 15, React, TypeScript, Tailwind CSS, Prisma, Supabase, Gemini AI",
        image: "/images/blueprint-ai.webp",
        alt: "Plataforma de gestión documental Blueprint AI",
        link: "https://blueprint-ai-sigma.vercel.app",
        github: "https://github.com/iker-guerra/blueprint-ai",
        longDescription: "Blueprint AI es una plataforma SaaS B2B diseñada para empresas que manejan grandes volúmenes de documentación técnica. Mediante el uso de RAG (Retrieval-Augmented Generation) y la API de Gemini, permite consultar información específica de manuales, normativas o informes conversando naturalmente con un agente inteligente.",
        features: [
            "Arquitectura multi-tenant para aislar datos entre organizaciones",
            "Embeddings de documentos en base de datos vectorial (pgvector)",
            "Chat contextual con memoria usando Gemini AI",
            "Autenticación segura con Supabase",
            "Gestión de roles y permisos granulares"
        ],
        challenges: "El principal reto fue optimizar el proceso de chunking y la precisión de los embeddings para documentos muy extensos y técnicos, asegurando que la IA contextualice las respuestas correctamente sin alucinaciones.",
        gallery: [
            "/images/blueprint-ai.webp",
            "/images/blueprint-ai.webp",
            "/images/blueprint-ai.webp",
            "/images/blueprint-ai.webp",
            "/images/blueprint-ai.webp",
            "/images/blueprint-ai.webp",
        ]
    },
    {
        id: 2,
        name: "Nutrition Tracker",
        slug: "nutrition-tracker",
        description: "Aplicación PWA de seguimiento nutricional con React, Vite y Shadcn UI. Visualiza tus macros, escanea códigos de barras y gestiona tu dieta diaria.",
        category: "Desarrollo web",
        tools: "React, Vite, TypeScript, Tailwind CSS, Shadcn UI",
        image: "/images/placeholder.webp",
        alt: "Página web Nutrition Tracker",
        link: "https://nutrition-tracker-sigma.vercel.app",
        longDescription: "Nutrition Tracker es una Progressive Web App (PWA) enfocada en facilitar a los usuarios llevar un registro preciso de su ingesta calórica y de macronutrientes. Cuenta con una interfaz intuitiva, diseñada para uso frecuente desde dispositivos móviles.",
        features: [
            "Escáner de código de barras para añadir alimentos rápidamente",
            "Modo offline para un uso continuo (PWA)",
            "Base de datos de alimentos extensa integrada con APIs externas",
            "Gráficos visuales para el seguimiento de macronutrientes",
            "Diseño responsivo y accesible con Shadcn UI"
        ],
        challenges: "Implementar de manera eficiente la funcionalidad de escaneo en navegadores web en dispositivos móviles y gestionar la base de datos de Open Food Facts para mapear correctamente los nutrientes."
    },
    {
        id: 3,
        name: "Eterna Diagnostics",
        slug: "eterna-diagnostics",
        description: "Página web corporativa para Eterna Diagnostics, líder en servicios de diagnóstico médico de precisión y análisis de laboratorio.",
        category: "Desarrollo web",
        tools: "Next.js, React, TypeScript, Tailwind CSS",
        image: "/images/web-eterna-diagnostics.webp",
        alt: "Página web Eterna Diagnostics",
        link: "https://eternadx.com",
        longDescription: "Landing page corporativa moderna diseñada para destacar los servicios médicos y la tecnología puntera del laboratorio clínico. El proyecto se centra en una experiencia de usuario limpia, profesional y rápida para transmitir confianza y claridad.",
        features: [
            "Diseño UI/UX sobrio y orientado al sector médico",
            "Optimización extrema de rendimiento y SEO",
            "Integración de formularios de contacto seguros",
            "Arquitectura escalable para futuros portales de pacientes"
        ],
        challenges: "Lograr una identidad visual moderna sin dejar de transmitir autoridad médica. La optimización del Core Web Vitals fue fundamental para mejorar el SEO y reducir la tasa de rebote."
    },
    {
        id: 4,
        name: "Eleva HPS",
        slug: "eleva-hps",
        description: "Página web para Eleva HPS, empresa enfocada en servicios profesionales e integrales de salud ocupacional.",
        category: "Desarrollo web",
        tools: "Next.js, React, TypeScript, Tailwind CSS",
        image: "/images/web-eleva-hps.webp",
        alt: "Página web Eleva HPS",
        link: "https://elevahps.com",
        longDescription: "Presencia digital para Eleva HPS, estructurada para mostrar todos los servicios orientados a mejorar la salud laboral en corporaciones. Se implementó una arquitectura limpia y rápida usando Server Components de Next.js.",
        features: [
            "Server-Side Rendering para óptimo indexado",
            "Diseño limpio enfocado en la conversión",
            "Módulo de contacto con validación robusta"
        ],
        challenges: "El reto consistió en estructurar la amplia gama de servicios b2b que ofrecen de una manera fácil de digerir para el departamento de Recursos Humanos o tomadores de decisiones de las empresas contratantes."
    },
    {
        id: 5,
        name: "Construcciones MBL",
        slug: "construcciones-mbl",
        description: "Plataforma web dinámica para Construcciones MBL, para exhibir sus proyectos, capacidades y facilitar el contacto con clientes.",
        category: "Desarrollo web",
        tools: "Next.js, React, TypeScript, Bootstrap",
        image: "/images/project-construcciones.webp",
        alt: "Página web Construcciones MBL",
        link: "https://construccionesmbl.vercel.app",
        longDescription: "Sitio web para el sector de la construcción que funciona como portafolio digital de la empresa. Desarrollado con Next.js y estilizado principalmente con Bootstrap para un aspecto corporativo rápido y sólido.",
        features: [
            "Galería de proyectos con filtros",
            "Testimonios y casos de éxito",
            "Diseño totalmente usable y adaptativo"
        ],
        challenges: "Adaptar los estilos base de Bootstrap hacia una apariencia más premium o personalizada (custom css) que no parezca una plantilla genérica estándar."
    },
    {
        id: 6,
        name: "Gif Expert App",
        slug: "gif-expert-app",
        description: "Aplicación ligera dedicada a la búsqueda de GIFs animados a través de la integración de la API pública de Giphy.",
        category: "Desarrollo web",
        tools: "React 18, JavaScript, Vite, CSS3, Giphy API, Jest",
        image: "/images/gif-expert-app.webp",
        alt: "Página web Gif Expert App",
        link: "https://ikerguerra.github.io/react-gifexpert/",
        longDescription: "Un proyecto clásico pero potente para dominar los fundamentos de React, el uso de custom hooks, fetching asíncrono y los primeros pasos en Unit Testing usando Jest.",
        features: [
            "Búsqueda instantánea en Giphy API",
            "Paginación y carga infinita de resultados",
            "Diseño responsive utilizando CSS Grid"
        ],
        challenges: "Implementar un test suite comprensivo con Jest para asegurar la fiabilidad de las peticiones a la API y el comportamiento correcto de los filtros de búsqueda."
    },
    {
        id: 7,
        name: "Mundo zapas",
        slug: "mundo-zapas",
        description: "Tienda de catálogo virtual para una marca de zapatillas, sirviendo para el despliegue del catálogo online completo.",
        category: "Desarrollo web",
        tools: "HTML, CSS, Javascript, PHP, MySQL",
        image: "/images/mundozapas.webp",
        alt: "Página web Mundo zapas",
        link: "https://mundozapas.ct.ws",
        longDescription: "Un proyecto full-stack más tradicional construido sobre tecnologías web estandarizadas, que emplea un backend monolítico en PHP y una base de datos MySQL para gestionar los productos.",
        features: [
            "Catálogo dinámico servido desde MySQL",
            "Panel de administración básico en PHP",
            "Búsqueda dinámica por marca y categoría"
        ],
        challenges: "Mantener el código ordenado y seguro en un entorno PHP puro sin utilizar un modelo MVC estricto o un framework de backend moderno como Laravel."
    }
];
