export interface Project {
    id: number;
    name: string;
    description: string;
    category: string;
    tools: string;
    image: string;
    alt: string;
    video?: string;
    link: string;
    github?: string; // Optional field for future use
}

export const projectsData: Project[] = [
    {
        id: 1,
        name: "Blueprint AI",
        description: "Aplicación que permite a múltiples organizaciones subir, gestionar y consultar sus documentos técnicos mediante una interfaz de chat impulsada por IA (RAG).",
        category: "Inteligencia Artificial / SaaS",
        tools: "Next.js 15, ReactJS, TypeScript, Tailwind CSS, Prisma, Supabase, Gemini AI, RAG",
        image: "/images/blueprint-ai.webp",
        alt: "Plataforma de gestión documental Blueprint AI",
        link: "https://blueprint-ai-sigma.vercel.app",
    },
    {
        id: 2,
        name: "Nutrition Tracker",
        description: "Aplicación PWA de seguimiento nutricional con ReactJS y Spring Boot. Visualiza tus macros, escanea códigos de barras y gestiona tu dieta diaria mediante una interfaz moderna y totalmente responsiva.",
        category: "Desarrollo Full Stack",
        tools: "ReactJS, Java, Spring Boot, TypeScript, OAuth, API Rest, Tailwind CSS, Swagger, GCP",
        image: "/images/nutrition-tracker-pwa.webp",
        alt: "Página web Nutrition Tracker",
        link: "https://nutrition-tracker-pwa-xi.vercel.app",
    },
    {
        id: 3,
        name: "Eterna Diagnostics",
        description: "Página web para Eterna Diagnostics, una empresa dedicada a la prestación de servicios de diagnóstico médico.",
        category: "Desarrollo web",
        tools: "Next.js, ReactJS, TypeScript, Tailwind CSS, Google Analytics, Hotjar, i18n",
        image: "/images/web-eterna-diagnostics.webp",
        alt: "Página web Eterna Diagnostics",
        link: "https://eternadx.com",
    },
    {
        id: 4,
        name: "Eleva HPS",
        description: "Página web para Eleva HPS, una empresa dedicada a la prestación de servicios de salud ocupacional.",
        category: "Desarrollo web",
        tools: "Next.js, ReactJS, TypeScript, Tailwind CSS",
        image: "/images/web-eleva-hps.webp",
        alt: "Página web Eleva HPS",
        link: "https://elevahps.com",
    },
    {
        id: 5,
        name: "Construcciones MBL",
        description: "Página web para Construcciones MBL, una empresa dedicada a la prestación de servicios de construcción.",
        category: "Desarrollo web",
        tools: "Next.js, ReactJS, TypeScript, Bootstrap",
        image: "/images/project-construcciones.webp",
        alt: "Página web Construcciones MBL",
        link: "https://construccionesmbl.vercel.app",
        // video: "project-construcciones.mp4"
    },
    {
        id: 6,
        name: "Gif Expert App",
        description: "Aplicación desarrollada como prácticas de aprendizaje con ReactJS, dedicada a la búsqueda de GIFs.",
        category: "Desarrollo web",
        tools: "ReactJS 18, JavaScript, Vite, CSS3, Giphy API, Jest",
        image: "/images/gif-expert-app.webp",
        alt: "Página web Gif Expert App",
        link: "https://ikerguerra.github.io/react-gifexpert/",
    },
    {
        id: 7,
        name: "Mundo zapas",
        description: "Página web desarrollada como proyecto en mi Certificación Profesional en Desarrollo de Tecnologías Web.",
        category: "Desarrollo web",
        tools: "HTML, CSS, Javascript, PHP, MySQL, Bootstrap, Xampp",
        image: "/images/mundozapas.webp",
        alt: "Página web Mundo zapas",
        link: "https://mundozapas.ct.ws",
    },
];
