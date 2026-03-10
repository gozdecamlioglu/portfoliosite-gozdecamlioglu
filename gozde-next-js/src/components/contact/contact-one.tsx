"use client";
import React from "react";
import Image from "next/image";
import { ProjectShape, RightArrow } from "../svg";
import cta from '@/assets/img/home-03/cta/cta-1.png';
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ctaAnimation } from "@/utils/cta-anim";
import { fadeAnimation } from "@/utils/title-animation";

export default function ContactOne() {
  useGSAP(() => {
    const timer = setTimeout(() => {
      ctaAnimation();
      fadeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });
  return (
    <div className="tp-cta-area black-bg pt-120 pb-120 z-index fix">
      <div className="container">
        <div className="col-xl-12">
          <div className="tp-cta-title-box p-relative">
            <h4 className="tp-cta-title cta-text">
              Let’s talk
              <span>about it</span>
            </h4>
            <p className="tp_fade_bottom">
              Interested in collaborating or discussing opportunities?
              <br />
              <span>Let’s connect and build thoughtful digital products together.</span>
            </p>
            <div className="tp-cta-icon">
              <Image src={cta} alt="cta-img" />
            </div>
            <div className="tp-cta-btn-box">
              <Link className="tp-btn-zikzak p-relative" href="/contact">
                <span className="zikzak-content">
                  Get <br /> In Touch
                  <RightArrow clr="#19191A" />
                </span>
                <ProjectShape />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
