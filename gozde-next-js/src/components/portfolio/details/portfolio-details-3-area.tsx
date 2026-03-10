import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf } from '@/components/svg';
import ProjectDetailIntro from '@/components/portfolio/details/project-detail-intro';
import type { Project } from '@/types/project-d-t';

// fallback images
import full_image from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-1.jpg';
import full_image_2 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-2.jpg';
import port_img_1 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-3.jpg';
import port_img_2 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-4.jpg';
import port_img_3 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-5.jpg';
import port_img_4 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-6.jpg';
import port_img_5 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-7.jpg';

// fallback slider images
const fallback_slider_images = [port_img_3, port_img_4, port_img_5, port_img_4];

// slider setting — caps slidesPerView so there's always something to slide to
function getSliderSetting(imageCount: number): SwiperOptions {
  // With ≤3 images, showing all 3 at once leaves nothing to slide to
  // so we cap large-viewport view at min(3, imageCount - 1), minimum 1
  const largeView = Math.min(3, Math.max(1, imageCount - 1));
  return {
    slidesPerView: largeView,
    loop: true,
    autoplay: true,
    spaceBetween: 20,
    speed: 1000,
    breakpoints: {
      '1400': { slidesPerView: largeView },
      '1200': { slidesPerView: largeView },
      '992': { slidesPerView: Math.min(2, largeView) },
      '768': { slidesPerView: Math.min(2, largeView) },
      '576': { slidesPerView: 1 },
      '0': { slidesPerView: 1 },
    },
  };
}

interface Props {
  project?: Project;
  prevSlug?: string | null;
  nextSlug?: string | null;
}

export default function PortfolioDetailsThreeArea({ project, prevSlug, nextSlug }: Props) {

  const sliderImages = (project?.sliderImages && project.sliderImages.length > 0)
    ? project.sliderImages
    : fallback_slider_images;
  const slider_setting = getSliderSetting(sliderImages.length);

  return (
    <>
      {/* ── custom intro section (title, description, sidebar) ── */}
      <ProjectDetailIntro project={project} />

      {/* full image 1 */}
      {!project?.hideHeroImages && (
        <div className="tp-project-details-3-full-width-thumb mb-120">
          {project?.heroImage ? (
            <Image data-speed=".8" src={project.heroImage} alt={project.title} width={1920} height={1080} style={{ width: '100%', height: 'auto' }} />
          ) : (
            <Image data-speed=".8" src={full_image} alt="port-img" style={{ height: 'auto' }} />
          )}
        </div>
      )}
      {/* full image 1 */}

      {/* details area – Daring Colors */}
      {!project?.hideHeroImages && (
        <div className="showcase-details-2-area pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="showcase-details-2-section-box">
                  <h4 className="showcase-details-2-section-title tp-char-animation">
                    {project?.sections.section1.title ?? 'Daring Colors'}
                  </h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                  <span className="ab-inner-subtitle mb-25">
                    <Leaf />
                    {project?.sections.section1.leftText || 'An introduction'}
                  </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                  {project?.sections.section1.bodyText
                    ? (typeof project.sections.section1.bodyText === 'string'
                      ? <p className="pb-25">{project.sections.section1.bodyText}</p>
                      : project.sections.section1.bodyText.map((para, i) => (
                        <p key={i} className="pb-25">{para}</p>
                      )))
                    : <p className="pb-25">Gozde website was using a generic template, felt quite outdated and not in-line with the quality of his work.</p>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* details area – Daring Colors */}

      {/* gallery images — full-width sequential (used by interior-design) */}
      {project?.galleryImages && project.galleryImages.length > 0 && (
        <>
          {project.galleryImages.map((imgSrc, index) => (
            <div key={index} className="tp-project-details-3-thumb mb-60">
              <div className="container container-1560">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-project-details-3-thumb-box" style={{ overflow: 'visible', height: 'auto' }}>
                      <Image src={imgSrc} alt={`${project.title} image ${index + 1}`} width={1920} height={1080} style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
      {/* gallery images */}

      {/* full image 2 (scroll target) — skipped when galleryImages present or hideHeroImages is true */}
      {!(project?.galleryImages && project.galleryImages.length > 0) && !project?.hideHeroImages && <div id="xyz" className="tp-project-details-3-thumb mb-120">
        <div className="container container-1560">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-project-details-3-thumb-box">
                {project?.heroImage2 ? (
                  <Image data-speed=".8" src={project.heroImage2} alt={project.title} width={1920} height={1080} style={{ width: '100%', height: 'auto' }} />
                ) : (
                  <Image data-speed=".8" src={full_image_2} alt="port-img" style={{ height: 'auto' }} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>}
      {/* full image 2 */}

      {/* details area – The Goal */}
      {!(project?.galleryImages && project.galleryImages.length > 0) && (
        <div className="showcase-details-2-area pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                  <h4 className="showcase-details-2-section-title tp-char-animation">
                    {project?.sections.section2.title ?? 'The Goal'}
                  </h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                  <span className="ab-inner-subtitle mb-25">
                    <Leaf />
                    {project?.sections.section2.leftText || 'An introduction'}
                  </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                  {(project?.sections.section2.bodyText && project.sections.section2.bodyText.length > 0) ? (
                    project.sections.section2.bodyText.map((para: string, i: number) => (
                      <p key={i} className="pb-25">{para}</p>
                    ))
                  ) : (
                    <>
                      <p className="pb-25">Gozde website was using a generic template, felt quite outdated and not in-line with the quality of his work.</p>
                      <p>Each case study gets its own identity through the styling options in the custom content management system.</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* details area – The Goal */}

      {/* midFullImage2 – full-width single or stacked images after The Goal */}
      {project?.midFullImage2 && (
        <div className="tp-project-details-3-thumb mb-90">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                {(Array.isArray(project.midFullImage2) ? project.midFullImage2 : [project.midFullImage2]).map((imgSrc, idx) => (
                  <div key={idx} className="tp-project-details-3-thumb-box" style={{ overflow: 'visible', height: 'auto', marginBottom: idx !== (Array.isArray(project.midFullImage2) ? project.midFullImage2.length : 1) - 1 ? '8px' : '0' }}>
                    <Image src={imgSrc} alt={`${project.title} mid image 2 part ${idx + 1}`} width={1920} height={800} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* midFullImage2 */}

      {/* midImages1 – under section1 */}
      {project?.midImages1 && project.midImages1.length >= 2 && (
        <div className="tp-project-details-3-thumb mb-90">
          <div className="container">
            {/* row 1: items 0 & 1 */}
            <div className="row">
              <div className="col-xl-6">
                <div className="tp-project-details-3-thumb-box mb-30" style={{ height: 'auto', overflow: 'visible' }}>
                  <Image className="w-100" src={project.midImages1[0]} alt={project.title} width={800} height={1200} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="tp-project-details-3-thumb-box mb-30" style={{ height: 'auto', overflow: 'visible' }}>
                  <Image className="w-100" src={project.midImages1[1]} alt={project.title} width={800} height={1200} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>
            </div>
            {/* row 2: items 2 & 3 (optional) */}
            {project.midImages1.length >= 4 && (
              <div className="row">
                <div className="col-xl-6">
                  <div className="tp-project-details-3-thumb-box mb-30" style={{ height: 'auto', overflow: 'visible' }}>
                    <Image className="w-100" src={project.midImages1[2]} alt={project.title} width={800} height={1200} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="tp-project-details-3-thumb-box mb-30" style={{ height: 'auto', overflow: 'visible' }}>
                    <Image className="w-100" src={project.midImages1[3]} alt={project.title} width={800} height={1200} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* midImages1 – under section1 */}

      {/* details area – repeat section — skipped when galleryImages present */}
      {!(project?.galleryImages && project.galleryImages.length > 0) && (
        <div className="showcase-details-2-area pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                  <h4 className="showcase-details-2-section-title tp-char-animation">
                    {project?.sections.section3?.title ?? 'Execution'}
                  </h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                  <span className="ab-inner-subtitle mb-25">
                    <Leaf />
                    {project?.sections.section3?.leftText || 'An introduction'}
                  </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                  {(project?.sections.section3?.bodyText && project.sections.section3.bodyText.length > 0) ? (
                    project.sections.section3.bodyText.map((para: string, i: number) => (
                      <p key={i} className="pb-25">{para}</p>
                    ))
                  ) : (
                    <>
                      <p className="pb-25">Body text coming soon.</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* details area – repeat section */}

      {/* midImages2 – under The Solution */}
      {project?.midImages2 && project.midImages2.length >= 2 && (
        <div className="tp-project-details-3-thumb mb-90">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="tp-project-details-3-thumb-box mb-30" style={{ height: 'auto', overflow: 'visible' }}>
                  <Image className="w-100" src={project.midImages2[0]} alt={project.title} width={800} height={1200} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="tp-project-details-3-thumb-box mb-30" style={{ height: 'auto', overflow: 'visible' }}>
                  <Image className="w-100" src={project.midImages2[1]} alt={project.title} width={800} height={1200} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* midImages2 – under The Solution */}



      {/* midImages3 – below midImages2 */}
      {project?.midImages3 && project.midImages3.length >= 2 && (
        <div className="tp-project-details-3-thumb mb-90">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="tp-project-details-3-thumb-box mb-30" style={{ height: 'auto', overflow: 'visible' }}>
                  <Image className="w-100" src={project.midImages3[0]} alt={project.title} width={800} height={1200} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="tp-project-details-3-thumb-box mb-30" style={{ height: 'auto', overflow: 'visible' }}>
                  <Image className="w-100" src={project.midImages3[1]} alt={project.title} width={800} height={1200} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* midImages3 – below midImages2 */}

      {/* midFullImage – full-width single or stacked images after midImages3 */}
      {project?.midFullImage && (
        <div className="tp-project-details-3-thumb mb-90">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                {(Array.isArray(project.midFullImage) ? project.midFullImage : [project.midFullImage]).map((imgSrc, idx) => (
                  <div key={idx} className="tp-project-details-3-thumb-box" style={{ overflow: 'visible', height: 'auto', marginBottom: idx !== (Array.isArray(project.midFullImage) ? project.midFullImage.length : 1) - 1 ? '8px' : '0' }}>
                    <Image src={imgSrc} alt={`${project.title} mid image part ${idx + 1}`} width={1920} height={800} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* midFullImage */}

      {/* midImages4 – side-by-side pair after midFullImage */}
      {project?.midImages4 && project.midImages4.length >= 2 && (
        <div className="tp-project-details-3-thumb mb-90">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="tp-project-details-3-thumb-box mb-30" style={{ height: 'auto', overflow: 'visible' }}>
                  <Image className="w-100" src={project.midImages4[0]} alt={project.title} width={800} height={1200} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="tp-project-details-3-thumb-box mb-30" style={{ height: 'auto', overflow: 'visible' }}>
                  <Image className="w-100" src={project.midImages4[1]} alt={project.title} width={800} height={1200} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* midImages4 */}

      {/* section4 (Impact) – only when present, appears after all mid images */}
      {!(project?.galleryImages && project.galleryImages.length > 0) && project?.sections.section4 && (
        <div className="showcase-details-2-area pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                  <h4 className="showcase-details-2-section-title tp-char-animation">
                    {project.sections.section4.title}
                  </h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                  <span className="ab-inner-subtitle mb-25">
                    <Leaf />
                    {project.sections.section4.leftText}
                  </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                  {project.sections.section4.bodyText.map((para: string, i: number) => (
                    <p key={i} className="pb-25">{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* section4 (Impact) */}

      {/* slider images — skipped when galleryImages present */}
      {!(project?.galleryImages && project.galleryImages.length > 0) && (
        <div className="pd-visual-slider-wrap pb-40">
          <Swiper {...slider_setting} modules={[Autoplay]} className="swiper-container pd-visual-slider-active">
            {sliderImages.map((imgSrc, index) => (
              <SwiperSlide key={index}>
                {/* 4:3 aspect-ratio box — matches 800×600 slide images */}
                <div className="pd-visual-slider-thumb fix" style={{ position: 'relative', width: '100%', paddingTop: '75%', overflow: 'hidden' }}>
                  {typeof imgSrc === 'string' ? (
                    <Image src={imgSrc} alt={`${project?.title ?? 'project'} slide ${index + 1}`} fill style={{ objectFit: 'contain' }} />
                  ) : (
                    <Image src={imgSrc} alt="port-img" fill style={{ objectFit: 'contain' }} />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      {/* slider images */}

      {/* prev / next navigation */}
      <div className="pd-navigation-area pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
                <Link className="project-details-1-prev" href={prevSlug ? `/portfolio/${prevSlug}` : '#'}>
                  <i className="fa-sharp fa-regular fa-arrow-left"></i>
                  <span>Prev</span>
                </Link>
                <Link href="/portfolio-masonry">
                  <span className="pd-dots">&#8226;&#8226;&#8226;</span>
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
