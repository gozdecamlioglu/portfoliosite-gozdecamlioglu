"use client";
import { gsap } from "gsap";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";

import FooterFour from '@/layouts/footers/footer-four';
import PortfolioMasonryArea from "@/components/portfolio/portfolio-masonry-area";
// animation
import { hoverBtn } from "@/utils/hover-btn";
import { charAnimation, titleAnimation } from "@/utils/title-animation";

const PortfolioMasonryMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      hoverBtn();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio hero */}
            <div className="tm-hero-area tm-hero-ptb">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content">
                      
                      <h4 className="tm-hero-title tp-char-animation">
                        Projects
                      </h4>
                    </div>
                    <div className="tm-hero-text tp_title_anim">
                      <p>
                        This portfolio showcases selected work across product design, brand systems, and spatial thinking. I focus on clarity, scalable systems, and thoughtful decision-making to create intuitive products that solve complex problems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* portfolio hero */}

            {/* portfolio area */}
            <PortfolioMasonryArea />
            {/* portfolio area */}

            {/* big text */}
            <div className="pt-80">

            </div>
            {/* big text */}
          </main>

          {/* footer area */}
          <FooterFour />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioMasonryMain;
