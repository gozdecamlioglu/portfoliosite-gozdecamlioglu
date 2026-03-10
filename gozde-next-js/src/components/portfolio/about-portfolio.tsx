import React from "react";
import Image from "next/image";
// images
const ab_1 = "/assets/img/about/stock1.jpg";
const ab_2 = "/assets/img/about/stock2.jpg";
const ab_3 = "/assets/img/about/stock3.png";

const portfolio_images = [ab_1, ab_2, ab_3];

export default function AboutPortfolio() {
  return (
    <div className="ab-2-portfolio-area pb-115">
      <div className="container-fluid ab-2-portfolio-thumb-wrap">
        <div className="row gx-5">
          {portfolio_images.map((imgSrc, i) => (
            <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-5">
              <div className="ab-2-portfolio-thumb fix">
                <Image src={imgSrc} alt="p-img" width={630} height={700} style={{ height: "auto", maxWidth: "100%" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
