"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import BlogListBanner from "@/components/blog/blog-list-banner";
import BlogListArea from "@/components/blog/blog-list-area";

import FooterThree from '@/layouts/footers/footer-three';
// animation
import { charAnimation, zoomAnimation } from "@/utils/title-animation";

const BlogListMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      zoomAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven transparent={true} />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* blog list banner */}
            <BlogListBanner />
            {/* blog list banner */}

            {/* blog list area start */}
            <BlogListArea />
            {/* blog list area end */}

            {/* big text area */}

            {/* big text area */}
          </main>

          {/* footer area */}
          <FooterThree />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogListMain;
