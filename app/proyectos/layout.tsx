import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Proyectos | Portfolio",
    description: "Explora los proyectos y casos de estudio desarrollados por Iker Guerra: aplicaciones web, SaaS con IA y plataformas full stack.",
};

export default function ProyectosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

