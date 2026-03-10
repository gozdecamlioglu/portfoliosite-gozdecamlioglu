import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import projects from '@/data/projects.json';
import PortfolioDetailsThreeMain from '@/pages/portfolio/details/portfolio-details-3-main';
import type { Project } from '@/types/project-d-t';

// All active project slugs — expand as more projects are ready
const ENABLED_SLUGS = ['mortgage-automator', 'brix', 'investpie', 'iconiq', 'brand-design', 'interior-design', 'fernweh', 'notable'];

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return ENABLED_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
    const { slug } = await props.params;
    const project = (projects as Project[]).find((p) => p.slug === slug);
    if (!project) return { title: 'Project Not Found' };
    return {
        title: `Gozde — ${project.title}`,
        description: project.description,
    };
}

export default async function PortfolioSlugPage(props: PageProps) {
    const { slug } = await props.params;

    if (!ENABLED_SLUGS.includes(slug)) {
        notFound();
    }

    const sortedProjects = [...(projects as Project[])].sort((a, b) => a.order - b.order);
    const currentIndex = sortedProjects.findIndex((p) => p.slug === slug);
    const project = sortedProjects[currentIndex];

    if (!project) notFound();

    const prevSlug = currentIndex > 0 ? sortedProjects[currentIndex - 1].slug : null;
    const nextSlug = currentIndex < sortedProjects.length - 1 ? sortedProjects[currentIndex + 1].slug : null;

    return (
        <PortfolioDetailsThreeMain
            project={project}
            prevSlug={prevSlug}
            nextSlug={nextSlug}
        />
    );
}
