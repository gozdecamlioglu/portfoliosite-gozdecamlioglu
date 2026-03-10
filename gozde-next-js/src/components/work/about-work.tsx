import React from "react";
import Image from "next/image";
import shape from '@/assets/img/inner-about/about/shape-1.png';

const work_data = [
  {
    id: 1,
    title: "Product Designer",
    subtitle: "Mortgage Automator",
    text: "Worked on end-to-end product design for a complex FinTech SaaS platform serving 400+ B2B clients. Designed data-heavy workflows, integrated AI-driven features, and helped scale the internal design system.",
  },
  {
    id: 2,
    title: "Jr.Product Designer",
    subtitle: "Brix",
    text: "Designed mobile-first training and operations workflows for a workforce SaaS platform. Shaped both worker and admin experiences in close collaboration with product team.",
  },
  {
    id: 3,
    title: "Brand & Digital Designer",
    subtitle: "Starfall Web Design",
    text: "Designed brand identity and website systems grounded in research and user insight. Delivered cohesive visual direction from concept through launch.",
  },
  {
    id: 4,
    title: "Interior Designer",
    subtitle: "GeoID",
    text: "Contributed to large-scale hospitality and residential projects, applying spatial systems thinking to complex architectural environments.",
  },
  {
    id: 5,
    title: "Interior Designer",
    subtitle: "Freelance",
    text: "Led independent projects from concept to implementation, overseeing spatial strategy, visualization, and execution.",
  },
  {
    id: 6,
    title: "Interior Designer",
    subtitle: "MD Construction",
    text: "Supported multidisciplinary public building projects, ensuring design alignment and regulatory compliance throughout execution.",
  },
];
export default function AboutWork() {
  return (
    <div className="ab-2-work-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5">
            <div className="ab-2-work-title-box p-relative">
              <h4 className="ab-2-work-title tp_title_anim">
                Work <br /> Experience
              </h4>
              <span className="ab-2-work-subtitle tp_title_anim">
                Professional Journey
              </span>
              <Image
                className="ab-2-work-shape d-none d-lg-block"
                src={shape}
                alt="shape"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            {work_data.map((item) => (
              <div key={item.id} className="ab-2-work-item tp_fade_bottom">
                <div className="sv-service-content">
                  <div className="sv-service-title-box">
                    <span className="sv-service-subtitle">
                      <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                      {item.subtitle}
                    </span>
                    <h4 className="sv-service-title">{item.title}</h4>
                  </div>
                  <div className="sv-service-space-wrap">
                    <div className="sv-service-text">
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
