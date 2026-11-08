import { notFound } from "next/navigation";
import { projectsData } from "../../data/projects";
import ClientProjectDetail from "./ClientProjectDetail";
import type { Metadata } from 'next';

export async function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const params = await props.params;
    const project = projectsData.find((p) => p.slug === params.slug);

    if (!project) {
        return {
            title: "Proyecto no encontrado",
        };
    }

    return {
        title: `${project.name} | Iker Guerra`,
        description: project.description,
    };
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const project = projectsData.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return <ClientProjectDetail project={project} />;
}
