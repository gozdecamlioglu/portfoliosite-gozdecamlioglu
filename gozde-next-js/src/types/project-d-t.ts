export interface ProjectSection {
    sectionNumber: string;
    title: string;
    leftText: string;
    bodyText: string | string[];
    list?: string[];
}

export interface ProjectTypography {
    name: string;
    characters: string;
    digits: string;
    sample: string;
}

export interface Project {
    id: number;
    order: number;
    slug: string;
    title: string;
    subtitle?: string;
    description: string;
    tags: string[];
    client: string;
    date: string;
    websiteLink: string;
    coverImage: string;
    heroImage: string;
    heroImage2: string;
    midImages1?: string[];
    midImages2?: string[];
    midImages3?: string[];
    midImages4?: string[];
    midFullImage?: string | string[];
    midFullImage2?: string | string[];
    sliderImages: string[];
    galleryImages?: string[];
    hideHeroImages?: boolean;
    sections: {
        section1: ProjectSection;
        section2: Omit<ProjectSection, 'list'> & { bodyText: string[] };
        section3?: Omit<ProjectSection, 'list'> & { bodyText: string[] };
        section4?: Omit<ProjectSection, 'list'> & { bodyText: string[] };
    };
    typography: ProjectTypography[];
    colors: string[];
}
