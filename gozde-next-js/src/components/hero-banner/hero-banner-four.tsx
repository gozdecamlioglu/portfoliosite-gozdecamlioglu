'use client';
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";

export default function HeroBannerFour() {
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative">
              <div className="tp-hero-3-circle-shape">
                <span></span>
              </div>
              <h4 className="tp-hero-3-title tp_reveal_anim">
                <span className="tp-reveal-line">Designing clarity for complex products</span>
              </h4>
              <p
                className="tp_reveal_anim mt-30"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  maxWidth: "800px",
                  margin: "30px auto 40px",
                  textTransform: "none",
                  letterSpacing: "normal"
                }}
              >
                Hello, I'm Gozde. I solve complex product problems by aligning systems, people, and pixels.
              </p>
              <Link className="tp-btn-black-2" href="/contact">
                Say Hello{" "}
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
