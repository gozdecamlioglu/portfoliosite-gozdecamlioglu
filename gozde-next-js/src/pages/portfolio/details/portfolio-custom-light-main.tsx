"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import PortfolioDetailsCustomLightArea from "@/components/portfolio/details/portfolio-details-custom-light-area";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, fadeAnimation, titleAnimation } from "@/utils/title-animation";
import type { Project } from "@/types/project-d-t";
import FooterThree from "@/layouts/footers/footer-three";

interface Props {
  project?: Project;
  prevSlug?: string | null;
  nextSlug?: string | null;
}

const PortfolioDetailsCustomLightMain = ({ project, prevSlug, nextSlug }: Props) => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      titleAnimation();
      charAnimation();
      fadeAnimation();
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio details area */}
            <PortfolioDetailsCustomLightArea project={project} prevSlug={prevSlug} nextSlug={nextSlug} />
            {/* portfolio details area */}
          </main>

          {/* footer area */}
          <FooterThree />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioDetailsCustomLightMain;
