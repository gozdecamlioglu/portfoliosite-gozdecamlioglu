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
import PortfolioDetailsThreeArea from "@/components/portfolio/details/portfolio-details-3-area";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import type { Project } from "@/types/project-d-t";
import FooterFour from '@/layouts/footers/footer-four';

interface Props {
  project?: Project;
  prevSlug?: string | null;
  nextSlug?: string | null;
}

const PortfolioDetailsThreeMain = ({ project, prevSlug, nextSlug }: Props) => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
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
            {/* portfolio details area */}
            <PortfolioDetailsThreeArea project={project} prevSlug={prevSlug} nextSlug={nextSlug} />
            {/* portfolio details area */}
          </main>

          {/* footer area */}
          <FooterFour />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioDetailsThreeMain;
