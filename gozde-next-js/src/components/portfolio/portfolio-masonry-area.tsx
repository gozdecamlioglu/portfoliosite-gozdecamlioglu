import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIsotop } from "@/hooks/use-isotop";
import { UpArrow } from "../svg";
import projects from "@/data/projects.json";

export default function PortfolioMasonryArea() {
  const { initIsotop, isotopContainer } = useIsotop();

  useEffect(() => {
    initIsotop();
  }, [initIsotop]);

  // Sort by the `order` field to match the intended display order
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  return (
    <div className="pm-project-masonary-area">
      <div className="container container-1800">
        <div className="row gx-0 grid-2" ref={isotopContainer}>
          {sortedProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="col-xl-6 grid-item"
              >
                <div className="pm-project-masonary-item p-relative">
                  <div className="fix" style={{ position: 'relative', width: '100%', paddingTop: '66.67%', overflow: 'hidden' }}>
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="pm-project-masonary-content">
                    <span className="pm-project-masonary-subtitle">
                      {project.subtitle || project.tags[0]}
                    </span>
                    <h4 className="pm-project-masonary-title">
                      <Link href={`/portfolio/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
