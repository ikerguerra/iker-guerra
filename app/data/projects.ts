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
        tools: "Next.js 15, React, TypeScript, Tailwind CSS, Prisma, Supabase, Gemini AI",
        image: "/images/blueprint-ai.webp",
        alt: "Plataforma de gestión documental Blueprint AI",
        link: "https://blueprint-ai-sigma.vercel.app",
    },
    {
        id: 2,
        name: "Nutrition Tracker",
        description: "Aplicación PWA de seguimiento nutricional con React, Vite y Shadcn UI. Visualiza tus macros, escanea códigos de barras y gestiona tu dieta diaria mediante una interfaz moderna y totalmente responsiva.",
        category: "Desarrollo web",
        tools: "React, Vite, TypeScript, Tailwind CSS, Shadcn UI",
        image: "/images/placeholder.webp", // TODO: replace with /images/nutrition-tracker.webp
        alt: "Página web Nutrition Tracker",
        link: "https://nutrition-tracker-sigma.vercel.app",
    },
    {
        id: 3,
        name: "Eterna Diagnostics",
        description: "Página web para Eterna Diagnostics, una empresa dedicada a la prestación de servicios de diagnóstico médico.",
        category: "Desarrollo web",
        tools: "Next.js, React, TypeScript, Tailwind CSS",
        image: "/images/web-eterna-diagnostics.webp",
        alt: "Página web Eterna Diagnostics",
        link: "https://eternadx.com",
    },
    {
        id: 4,
        name: "Eleva HPS",
        description: "Página web para Eleva HPS, una empresa dedicada a la prestación de servicios de salud ocupacional.",
        category: "Desarrollo web",
        tools: "Next.js, React, TypeScript, Tailwind CSS",
        image: "/images/web-eleva-hps.webp",
        alt: "Página web Eleva HPS",
        link: "https://elevahps.com",
    },
    {
        id: 5,
        name: "Construcciones MBL",
        description: "Página web para Construcciones MBL, una empresa dedicada a la prestación de servicios de construcción.",
        category: "Desarrollo web",
        tools: "Next.js, React, TypeScript, Bootstrap",
        image: "/images/project-construcciones.webp",
        alt: "Página web Construcciones MBL",
        link: "https://construccionesmbl.vercel.app",
        // video: "project-construcciones.mp4"
    },
    {
        id: 6,
        name: "Gif Expert App",
        description: "Página web para Gif Expert App, una aplicación dedicada a la búsqueda de GIFs.",
        category: "Desarrollo web",
        tools: "React 18, JavaScript, Vite, CSS3, Giphy API, Jest",
        image: "/images/gif-expert-app.webp",
        alt: "Página web Gif Expert App",
        link: "https://ikerguerra.github.io/react-gifexpert/",
    },
    {
        id: 7,
        name: "Mundo zapas",
        description: "Página web para Mundo zapas, una tienda de zapatillas.",
        category: "Desarrollo web",
        tools: "HTML, CSS, Javascript, PHP, MySQL",
        image: "/images/mundozapas.webp",
        alt: "Página web Mundo zapas",
        link: "https://mundozapas.ct.ws",
    },
];
