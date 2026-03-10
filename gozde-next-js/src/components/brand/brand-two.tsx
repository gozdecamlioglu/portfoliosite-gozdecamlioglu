import React from "react";
import Image from "next/image";
import { Leaf } from "../svg";
// images
const b_1 = "/assets/img/tools/figma.png";
const b_2 = "/assets/img/tools/antigravity.png";
const b_3 = "/assets/img/tools/jira.png";
const b_4 = "/assets/img/tools/github.png";
const b_5 = "/assets/img/tools/adobe.png";
const b_6 = "/assets/img/tools/azure.png";
const b_7 = "/assets/img/tools/v0.png";
const b_8 = "/assets/img/tools/tailwind.png";

// brand_data
const brand_data = [
  {
    id: 1,
    brand: b_1,
    texts: [
      "figma.com",
      "figma.com",
      "figma.com",
      "figma.com",
      "figma.com",
      "figma.com",
    ],
  },
  {
    id: 2,
    brand: b_2,
    texts: [
      "antigravity.google",
      "antigravity.google",
      "antigravity.google",
      "antigravity.google",
      "antigravity.google",
      "antigravity.google",
    ],
  },
  {
    id: 3,
    brand: b_3,
    texts: [
      "atlassian.com",
      "atlassian.com",
      "atlassian.com",
      "atlassian.com",
      "atlassian.com",
      "atlassian.com",
    ],
  },
  {
    id: 4,
    brand: b_4,
    texts: [
      "github.com",
      "github.com",
      "github.com",
      "github.com",
      "github.com",
      "github.com",
    ],
  },
  {
    id: 5,
    brand: b_5,
    texts: [
      "adobe.com",
      "adobe.com",
      "adobe.com",
      "adobe.com",
      "adobe.com",
      "adobe.com",
    ],
  },
  {
    id: 6,
    brand: b_6,
    texts: [
      "azure.microsoft.com",
      "azure.microsoft.com",
      "azure.microsoft.com",
      "azure.microsoft.com",
      "azure.microsoft.com",
      "azure.microsoft.com",
    ],
  },
  {
    id: 7,
    brand: b_7,
    texts: [
      "v0.dev",
      "v0.dev",
      "v0.dev",
      "v0.dev",
      "v0.dev",
      "v0.dev",
    ],
  },
  {
    id: 8,
    brand: b_8,
    texts: [
      "tailwindcss.com",
      "tailwindcss.com",
      "tailwindcss.com",
      "tailwindcss.com",
      "tailwindcss.com",
      "tailwindcss.com",
    ],
  },
];

// brand items
export function BrandItems() {
  return (
    <>
      {brand_data.map((item) => (
        <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
          <div className="tp-brand-4-item p-relative">
            {typeof item.brand === "string" ? (
              <Image
                src={item.brand}
                alt="brand"
                width={200}
                height={60}
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  height: "auto",
                  padding: "0 10px",
                  maxHeight: item.id === 1 || item.id === 2 || item.id === 8 ? "65px" : "45px",
                  transform: item.id === 1 || item.id === 2 || item.id === 8 ? "scale(1.2)" : "none"
                }}
              />
            ) : (
              <Image src={item.brand} alt="brand" style={{ height: "auto" }} />
            )}
            <div className="tp-brand-4-line-text d-flex align-items-center">
              {item.texts.map((text, index) => (
                <span key={index}>{text}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

const BrandTwo = () => {
  return (
    <div
      className="tp-brand-4-area mt-20 pt-120 pb-120 grey-bg-3"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="tp-service-4-title-box tp_fade_bottom mb-65">
              <span className="tp-section-subtitle-3">
                <span>
                  <Leaf />
                </span>
                Tools & Technologies
              </span>
              <h4 className="tp-section-title-40 font-style-2">
                My favorite tools and platforms for building digital experiences.
              </h4>
            </div>
          </div>
        </div>
        <div className="row gx-0">
          <BrandItems />
        </div>
      </div>
    </div>
  );
};

export default BrandTwo;
