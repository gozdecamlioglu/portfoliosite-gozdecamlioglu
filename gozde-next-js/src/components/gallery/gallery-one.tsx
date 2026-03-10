import React, { CSSProperties } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
// images
import shape_1 from '@/assets/img/home-03/gallery/gal-shape-1.png';
import shape_d_1 from '@/assets/img/home-03/gallery/gal-shape-dark-1.png';
import shape_2 from '@/assets/img/home-03/gallery/gal-shape-2.png';
import shape_d_2 from '@/assets/img/home-03/gallery/gal-shape-dark-2.png';

const g_1 = '/assets/img/home-gozde/gallery/gal-1.png';
const g_2 = '/assets/img/home-gozde/gallery/gal-2.png';
const g_3 = '/assets/img/home-gozde/gallery/gal-3.png';
const g_4 = '/assets/img/home-gozde/gallery/gal-4.png';
const g_5 = '/assets/img/home-gozde/gallery/gal-5.png';
const g_6 = '/assets/img/home-gozde/gallery/gal-6.png';


const gallery_images = [
  g_1, g_2, g_3, g_4, g_5, g_6, g_1, g_2, g_3, g_4, g_5, g_6
]

const imgStyle: CSSProperties = { height: "auto" };

export default function GalleryOne() {
  return (
    <div className="tp-gallery-area fix p-relative">
      <div className="tp-gallery-shape-1">
        <Image className="img-1" src={shape_1} alt="shape" style={imgStyle} />
        <Image className="img-2" src={shape_d_1} alt="shape" style={imgStyle} />
      </div>
      <div className="tp-gallery-shape-2">
        <Image className="img-1" src={shape_2} alt="shape" style={imgStyle} />
        <Image className="img-2" src={shape_d_2} alt="shape" style={imgStyle} />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-gallery-slider-wrap">
              <div className="swiper-container tp-gallery-slider-active">
                <Marquee className="tp-gallery-titming" speed={100} direction='left'>

                  {gallery_images.map((g, i) => (

                    <div key={i}>
                      <div className="tp-gallery-item mr-10">
                        <Image src={g} alt="gallery-img" width={420} height={740} style={{ height: 'auto' }} />
                      </div>
                    </div>
                  ))}

                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
