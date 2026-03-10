import React from "react";
import Image from "next/image";
import { Hand } from "../svg";
import shape from '@/assets/img/inner-about/about/shape-1.png';

export default function AboutMeArea() {
  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-about-content p-relative tp_fade_bottom">
              <span>
                <Hand />
                Hi!
              </span>
              <p className="tp-dropcap" style={{ fontSize: "36px", lineHeight: "1.4" }}>
                My journey into product design began in interior architecture, where I learned to think in systems and structure. Today, I apply that mindset to digital environments — designing complex B2B platforms, scalable design systems, and AI-powered features with clarity and intention. For me, great design isn’t just about how something looks, but how thoughtfully and reliably it works.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
                <div className="ab-about-category-title-box tp_fade_bottom ab-2-about-title-style p-relative">
                  <h4 className="ab-about-category-title">
                    Something <br />
                    <span>About me</span>
                  </h4>
                  <Image
                    className="ab-about-shape-1 d-none d-md-block"
                    src={shape}
                    alt="shape"
                  />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-8">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40 tp_fade_bottom">
                    <div className="ab-about-category-list category-space-1">
                      <span className="ab-about-category-title mb-30">
                        WHAT I DO
                      </span>
                      <ul>
                        <li>Product & Interaction Design</li>
                        <li>Brand Identity Systems</li>
                        <li>Complex Workflow Design</li>
                        <li>Data-Driven Interfaces</li>
                        <li>Spatial Experience Design</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40 tp_fade_bottom">
                    <div className="ab-about-category-list category-space-2">
                      <span className="ab-about-category-title mb-30">
                        CORE SKILLS
                      </span>
                      <ul>
                        <li>Complex System Design</li>
                        <li>B2B SaaS & FinTech</li>
                        <li>Scalable Design Systems</li>
                        <li>AI-Driven Features</li>
                        <li>Data-Heavy Interfaces</li>
                      </ul>
                    </div>
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
