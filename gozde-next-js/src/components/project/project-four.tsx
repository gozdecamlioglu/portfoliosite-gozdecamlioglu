import React from "react";
import Image from "next/image";

import { ProjectShape, RightArrow } from "../svg";
// images — served from public/assets
const port_1 = '/assets/img/home-gozde/portfolio/port-1.png';
const port_2 = '/assets/img/home-gozde/portfolio/port-2.png';
const port_3 = '/assets/img/home-gozde/portfolio/port-3.png';
const port_4 = '/assets/img/home-gozde/portfolio/port-4.png';
const port_5 = '/assets/img/home-gozde/portfolio/port-5.png';
const port_6 = '/assets/img/home-gozde/portfolio/port-6.png';
const port_7 = '/assets/img/home-gozde/portfolio/port-7.png';
const port_8 = '/assets/img/home-gozde/portfolio/port-8.png';
import Link from "next/link";

// portfolio data
const project_data = [
  {
    id: 1,
    slug: "mortgage-automator",
    img_1: port_1,
    img_2: port_2,
    meta: "MAR 2026 . FinTech SaaS",
    title: "Mortgage Automator",
  },
  {
    id: 2,
    slug: "brix",
    img_1: port_3,
    img_2: port_4,
    meta: "MAR 2024 . B2B SaaS",
    title: "Brix",
  },
  {
    id: 3,
    slug: "investpie",
    img_1: port_5,
    img_2: port_6,
    meta: "OCT 2023 . FinTech",
    title: "Investpie",
  },
  {
    id: 4,
    slug: "iconiq",
    img_1: port_7,
    img_2: port_8,
    meta: "JUN 2023 . E-Commerce",
    title: "Iconiq",
  },
];

// prop type
type IProps = {
  style_2?: boolean;
};
export default function ProjectFour({ style_2 = false }: IProps) {
  return (
    <div className={`tp-project-3-area ${style_2 ? "pt-60 pw-project-style" : "pt-130 black-bg"}`}>
      <div className="container container-1720">
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-project-3-title-box p-relative mb-150">
                <h4 className="tp-section-title-200 tp_reveal_anim">
                  Selected <span>Projects</span>
                </h4>
                <div className="tp-project-3-btn-box">
                  <Link
                    className="tp-btn-zikzak p-relative"
                    href="/portfolio-masonry"
                  >
                    <span className="zikzak-content">
                      See All
                      <RightArrow clr="#19191A" />
                    </span>
                    <ProjectShape />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-xl-12">
            {project_data.map((item, i) => (
              <div key={item.id} className="tp-project-3-wrap">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-project-3-thumb pro-img-1">
                      <Image
                        src={item.img_1}
                        alt="port-img"
                        width={600}
                        height={400}
                        style={{ height: "auto", width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                    <div className="tp-project-3-content text-center">
                      <span className="tp-project-3-meta">{item.meta} </span>
                      <h4 className="tp-project-3-title-sm">
                        <Link href={`/portfolio/${item.slug}`}>{item.title}</Link>
                      </h4>
                      <Link
                        className="tp-btn-project-sm"
                        href={`/portfolio/${item.slug}`}
                      >
                        See Project
                      </Link>
                    </div>
                    <div className="tp-project-3-border color-1 text-center">
                      <span></span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                    <div className="tp-project-3-thumb pro-img-2">
                      <Image
                        src={item.img_2}
                        alt="port-img"
                        width={600}
                        height={400}
                        style={{ height: "auto", width: "100%" }}
                      />
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
