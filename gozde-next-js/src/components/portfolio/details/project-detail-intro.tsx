import React from 'react';
import Link from 'next/link';
import type { Project } from '@/types/project-d-t';

interface Props {
    project?: Project;
}

export default function ProjectDetailIntro({ project }: Props) {
    return (
        <div className="pd-custom-area pt-145 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8">
                        <div className="project-details-1-title-box">
                            <span className="project-details-1-subtitle">
                                <i>0{project?.order ?? 1}</i>{project?.subtitle ?? 'Shooting'}
                            </span>
                            <h4 className="project-details-1-title fs-100 tp-char-animation">
                                {project?.title ?? 'Magazine Cover'}
                            </h4>
                            <p className="mb-35 tp_title_anim">
                                {project?.description ?? 'Designing a portfolio for a wonderful Photographer.'}
                            </p>
                            {project?.websiteLink && (
                                <Link
                                    className="project-details-custom-link"
                                    href={project.websiteLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit Website
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="pd-custom-info-wrap">
                            <div className="project-details-1-info-wrap">
                                <div className="project-details-1-info tp_fade_bottom">
                                    <span>Industry</span>
                                    <h4>{project?.client || 'Product Designer'}</h4>
                                </div>
                                <div className="project-details-1-info tp_fade_bottom">
                                    <span>Date</span>
                                    <h4>{project?.date || "October '2024"}</h4>
                                </div>
                                <div className="project-details-1-info tp_fade_bottom">
                                    <span>Responsibilities</span>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        {project ? project.tags.map((tag, i) => (
                                            <h4 key={i} style={{ margin: 0 }}>&bull; {tag}</h4>
                                        )) : <h4 style={{ margin: 0 }}>&bull; UI / UX Design</h4>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
