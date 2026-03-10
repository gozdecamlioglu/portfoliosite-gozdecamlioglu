import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import Social from '@/components/social/social';
import { Dots } from '@/components/svg';
import type { Project } from '@/types/project-d-t';

interface Props {
    project: Project;
    prevSlug: string | null;
    nextSlug: string | null;
}

const slider_setting: SwiperOptions = {
    slidesPerView: 3,
    loop: true,
    autoplay: true,
    spaceBetween: 20,
    speed: 1000,
    breakpoints: {
        '1400': { slidesPerView: 3 },
        '1200': { slidesPerView: 3 },
        '992': { slidesPerView: 2 },
        '768': { slidesPerView: 2 },
        '576': { slidesPerView: 1 },
        '0': { slidesPerView: 1 },
    },
};

export default function ProjectDetailArea({ project, prevSlug, nextSlug }: Props) {
    const heroImage = project.heroImage;
    const sliderImages = project.sliderImages;

    return (
        <>
            {/* project intro */}
            <div className="pd-custom-area pt-145 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            <div className="project-details-1-title-box">
                                <span className="project-details-1-subtitle">
                                    <i>0{project.order}</i>{project?.subtitle || project.tags[0]}
                                </span>
                                <h4 className="project-details-1-title fs-100 tp-char-animation">
                                    {project.title}
                                </h4>
                                <p className="mb-35 tp_title_anim">{project.description}</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="pd-custom-info-wrap">
                                <div className="project-details-1-info-wrap">
                                    <div className="project-details-1-info tp_fade_bottom">
                                        <span>Discipline</span>
                                        <h4>{project.tags[0]}</h4>
                                    </div>
                                    <div className="project-details-1-info tp_fade_bottom">
                                        <span>Responsibilities</span>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            {project.tags.map((tag, i) => (
                                                <h4 key={i} style={{ margin: 0 }}>&bull; {tag}</h4>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="project-details-1-info tp_fade_bottom">
                                        <span>Share</span>
                                        <div className="project-details-2-social">
                                            <Social />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* project intro */}

            {/* hero full image */}
            <div className="pd-custom-full-img">
                <Image
                    data-speed=".8"
                    src={heroImage}
                    alt={project.title}
                    width={1920}
                    height={1080}
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
            {/* hero full image */}

            {/* slider images */}
            {sliderImages.length > 0 && (
                <div className="pd-visual-slider-wrap pb-120 pt-80">
                    <Swiper
                        {...slider_setting}
                        modules={[Autoplay]}
                        className="swiper-container pd-visual-slider-active"
                        autoHeight={true}
                    >
                        {sliderImages.map((imgSrc: string, index: number) => (
                            <SwiperSlide key={index} style={{ height: 'auto' }}>
                                <div className="pd-visual-slider-thumb fix">
                                    <Image
                                        src={imgSrc}
                                        alt={`${project.title} image ${index + 2}`}
                                        width={800}
                                        height={600}
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
            {/* slider images */}

            {/* prev / next navigation */}
            <div className="pd-navigation-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
                                {prevSlug ? (
                                    <Link className="project-details-1-prev" href={`/portfolio/${prevSlug}`}>
                                        <i className="fa-sharp fa-regular fa-arrow-left"></i>
                                        <span>Prev</span>
                                    </Link>
                                ) : (
                                    <span />
                                )}
                                <Link href="/portfolio-masonry">
                                    <span><Dots /></span>
                                </Link>
                                {nextSlug ? (
                                    <Link className="project-details-1-next" href={`/portfolio/${nextSlug}`}>
                                        <span>Next</span>
                                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                    </Link>
                                ) : (
                                    <span />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* prev / next navigation */}
        </>
    );
}
