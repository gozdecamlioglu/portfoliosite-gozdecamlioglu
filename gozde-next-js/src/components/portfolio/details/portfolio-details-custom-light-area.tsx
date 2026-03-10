import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import Social from '@/components/social/social';
import { Dots } from '@/components/svg';
import type { Project } from '@/types/project-d-t';

// fallback static images (used when no project prop is provided)
import full_img from '@/assets/img/inner-project/custom/custom-big-1.jpg';
import full_img_2 from '@/assets/img/inner-project/custom/custom-big-2.jpg';
import port_1 from '@/assets/img/inner-project/custom/port-1.jpg';
import port_2 from '@/assets/img/inner-project/custom/port-2.jpg';
import port_3 from '@/assets/img/inner-project/custom/port-3.jpg';

const fallback_slider_images = [port_1, port_2, port_3, port_2];

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

interface Props {
  project?: Project;
  prevSlug?: string | null;
  nextSlug?: string | null;
}

export default function PortfolioDetailsCustomLightArea({ project, prevSlug, nextSlug }: Props) {
  const vi = project?.sections.section1;
  const sol = project?.sections.section2;
  const impact = project?.sections.section4;

  return (
    <>
      {/* portfolio details area */}
      <div className="pd-custom-area pt-145 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="project-details-1-title-box">
                <span className="project-details-1-subtitle">
                  <i>0{project?.order ?? 1}</i>{project?.subtitle || project?.tags[0] || 'Shooting'}
                </span>
                <h4 className="project-details-1-title fs-100 tp-char-animation">
                  {project?.title ?? 'Magazine Cover'}
                </h4>
                <p className="mb-35 tp_title_anim">
                  {project?.description ?? 'Designing a portfolio for a wonderful Photographer.'}
                </p>
                {project?.websiteLink && (
                  <Link className="project-details-custom-link" href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </Link>
                )}
                {!project?.websiteLink && (
                  <Link className="project-details-custom-link" href="/portfolio-details-2">Visit Website</Link>
                )}
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="pd-custom-info-wrap">
                <div className="project-details-1-info-wrap">
                  {(project?.client) && (
                    <div className="project-details-1-info tp_fade_bottom">
                      <span>Client</span>
                      <h4>{project.client}</h4>
                    </div>
                  )}
                  {!project?.client && (
                    <div className="project-details-1-info tp_fade_bottom">
                      <span>Client</span>
                      <h4>Gozde Theme</h4>
                    </div>
                  )}
                  {(project?.date) && (
                    <div className="project-details-1-info tp_fade_bottom">
                      <span>Date</span>
                      <h4>{project.date}</h4>
                    </div>
                  )}
                  {!project?.date && (
                    <div className="project-details-1-info tp_fade_bottom">
                      <span>Date</span>
                      <h4>October {"'2024"}</h4>
                    </div>
                  )}
                  <div className="project-details-1-info tp_fade_bottom">
                    <span>Responsibilities</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {project ? project.tags.map((tag, i) => (
                        <h4 key={i} style={{ margin: 0 }}>&bull; {tag}</h4>
                      )) : <h4 style={{ margin: 0 }}>&bull; UI / UX Design</h4>}
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
      {/* portfolio details area */}

      {/* full image 1 */}
      <div className="pd-custom-full-img">
        {project?.heroImage ? (
          <Image data-speed=".8" src={project.heroImage} alt={project.title} width={1920} height={1080} style={{ width: '100%', height: 'auto' }} />
        ) : (
          <Image data-speed=".8" src={full_img} alt="full_img" style={{ height: 'auto' }} />
        )}
      </div>
      {/* full image 1 */}

      {/* visual identity section */}
      <div className="pd-visual-content-area pt-125 pb-125">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="pd-visual-content-left">
                <div className="pd-visual-title-box">
                  <span className="pd-visual-subtitle tp_fade_bottom">{vi?.sectionNumber ?? '01'}</span>
                  <h4 className="project-details-1-title fs-100 fw-700 tp-char-animation">{vi?.title ?? 'Visual Identity'}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="pd-visual-left-text">
                <span className="tp-char-animation">{vi?.leftText ?? 'Visually match Elena personal style'}</span>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="pd-visual-right-content">
                <p className="tp_title_anim">
                  {typeof vi?.bodyText === 'string' ? vi.bodyText : 'The design needed to be as elegant and clean as possible.'}
                </p>
                {(vi?.list && vi.list.length > 0) && (
                  <div className="pd-visual-right-list">
                    <ul className="tp_fade_bottom">
                      {vi.list.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                )}
                {(!vi?.list || vi.list.length === 0) && (
                  <div className="pd-visual-right-list">
                    <ul className="tp_fade_bottom">
                      <li>DIGITAL STRATEGY</li>
                      <li>USER EXPERIENCE (UX)</li>
                      <li>USER INTERFACE DESIGN (UI)</li>
                      <li>PRODUCT DEVELOPMENT</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* full image 2 */}
          <div className="pd-custom-full-img-2 mb-120 mt-120">
            {project?.heroImage2 ? (
              <Image style={{ width: '100%', height: 'auto' }} data-speed=".8" src={project.heroImage2} alt={project.title} width={1920} height={1080} />
            ) : (
              <Image style={{ width: '100%', height: 'auto' }} data-speed=".8" src={full_img_2} alt="full-image" />
            )}
          </div>
          {/* full image 2 */}

          {/* typography & colors */}
          <div className="pd-typography-wrap">
            <div className="row">
              {(project?.typography && project.typography.length > 0) ? (
                <>
                  {project.typography.map((font, i) => (
                    <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                      <div className={i === 0 ? 'pd-typography-left tp_fade_bottom' : 'pd-typography-middle tp_fade_bottom'}>
                        <div className="pd-typography-left">
                          {i === 0 && <span className="text-1">Typography</span>}
                          <span className="text-2">{font.name}</span>
                          <span className="text-3">{font.characters}</span>
                          <span className="text-4">{font.digits}</span>
                          <span className="text-5">{font.sample}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  {project.colors.length > 0 && (
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="pd-typography-color tp_fade_bottom">
                        <h5 className="text-1">Colors</h5>
                        {project.colors.map((color, i) => (
                          <span key={i} className={`color-${i + 1}`}>{color}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="pd-typography-left tp_fade_bottom">
                      <span className="text-1">Typography</span>
                      <span className="text-2">Big Shoulders Display</span>
                      <span className="text-3">abcdefghijklmnopqrstuvwxyz</span>
                      <span className="text-4">0123456789</span>
                      <span className="text-5">Aa</span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="pd-typography-middle tp_fade_bottom">
                      <div className="pd-typography-left">
                        <span className="text-2">Syne</span>
                        <span className="text-3">abcdefghijklmnopqrstuvwxyz</span>
                        <span className="text-4">0123456789</span>
                        <span className="text-5">Aa</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="pd-typography-color tp_fade_bottom">
                      <h5 className="text-1">Colors</h5>
                      <span className="color-1">#19191A</span>
                      <span className="color-2">#5D5D63</span>
                      <span className="color-3">#ECECEA</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          {/* typography & colors */}
        </div>
      </div>
      {/* visual identity section */}

      {/* slider images */}
      <div className="pd-visual-slider-wrap pb-120">
        <Swiper {...slider_setting} modules={[Autoplay]} className="swiper-container pd-visual-slider-active">
          {(project?.sliderImages && project.sliderImages.length > 0 ? project.sliderImages : fallback_slider_images).map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <div className="pd-visual-slider-thumb fix">
                {typeof imgSrc === 'string' ? (
                  <Image src={imgSrc} alt={`${project?.title ?? 'project'} image ${index + 1}`} width={800} height={600} style={{ width: '100%', height: 'auto' }} />
                ) : (
                  <Image src={imgSrc} alt="port-img" style={{ height: 'auto' }} />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* slider images */}

      {/* impact section */}
      {impact && (
        <div className="pd-visual-content-area pb-80 pt-80">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="pd-visual-content-left">
                  <div className="pd-visual-title-box">
                    <span className="pd-visual-subtitle tp_fade_bottom">{impact.sectionNumber}</span>
                    <h4 className="project-details-1-title fs-100 fw-700 tp-char-animation">{impact.title}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <div className="pd-visual-left-text">
                  <span className="tp-char-animation">{impact.leftText}</span>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="pd-visual-right-content tp_title_anim">
                  {impact.bodyText.map((line, i) => (
                    <p key={i} style={i === impact.bodyText.length - 1 ? { marginTop: '24px' } : {}}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* impact section */}

      {/* solution section */}
      <div className="pd-visual-content-area pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="pd-visual-content-left">
                <div className="pd-visual-title-box">
                  <span className="pd-visual-subtitle tp_fade_bottom">{sol?.sectionNumber ?? '02'}</span>
                  <h4 className="project-details-1-title fs-100 fw-700 tp-char-animation">{sol?.title ?? 'The Solution'}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="pd-visual-left-text">
                <span className="tp-char-animation">{sol?.leftText ?? "Visually match Elena's personal style"}</span>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="pd-visual-right-content tp_title_anim">
                {(sol?.bodyText && (sol.bodyText as string[]).length > 0) ? (
                  (sol.bodyText as string[]).map((para, i) => <p key={i}>{para}</p>)
                ) : (
                  <>
                    <p>The design needed to be as elegant and clean as possible.</p>
                    <p>We build and activate brands through cultural insight, strategic vision, and the power of emotion across every element of its expression.</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* solution section */}

      {/* prev / next navigation */}
      <div className="pd-navigation-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
                <Link className="project-details-1-prev" href={prevSlug ? `/portfolio/${prevSlug}` : '#'}>
                  <i className="fa-sharp fa-regular fa-arrow-left"></i>
                  <span>Prev</span>
                </Link>
                <Link href="/portfolio-masonry">
                  <span><Dots /></span>
                </Link>
                <Link className="project-details-1-next" href={nextSlug ? `/portfolio/${nextSlug}` : '#'}>
                  <span>Next</span>
                  <i className="fa-sharp fa-regular fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* prev / next navigation */}
    </>
  );
}
