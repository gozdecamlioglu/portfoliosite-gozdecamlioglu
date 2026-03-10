import React from "react";
import Image from "next/image";
import { Behance, CloseTwo, Dribble, InstagramTwo, Youtube, Leaf } from "../svg";

// images
import logo from "@/assets/img/logo-gozde/logo.png";
import g_1 from "@/assets/img/home-gozde/gallery/gal-1.png";
import g_2 from "@/assets/img/home-gozde/gallery/gal-2.png";
import g_3 from "@/assets/img/home-gozde/gallery/gal-3.png";
import g_4 from "@/assets/img/home-gozde/gallery/gal-4.png";
import MobileMenus from "./mobile-menus";
import Link from "next/link";

const gallery_images = [g_1, g_2, g_3, g_4];

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({ openOffcanvas, setOpenOffcanvas }: IProps) {
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <Link href="#">
                <Image src={logo} alt="logo" />
              </Link>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title">Let’s Connect!</h3>
              <p>Product Designer focused on complex systems and clean solutions. Always happy to connect — say hello! </p>
            </div>
            <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus />
            </div>
            <div className="tp-offcanvas-gallery">
              <div className="row gx-2">
                {gallery_images.map((item, i) => (
                  <div className="col-md-3 col-3" key={i}>
                    <div className="tp-offcanvas-gallery-img fix">
                      <Link href="#">
                        <Image style={{ width: "100%", height: "auto" }} src={item} alt="gallery-img" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-30">
                <Link
                  className="tp-btn-white background-black"
                  href="/Resume-Gozde Camlioglu Agilkaya.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  Download CV
                  <span>
                    <Leaf />
                  </span>
                </Link>
              </div>
            </div>
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Contact</h3>

              <ul>
                <li>
                  <Link href="tel:16479063039">+1 647 906 3039</Link>
                </li>
                <li>
                  <Link href="mailto:gozdecamlioglu@gmail.com">gozdecamlioglu@gmail.com</Link>
                </li>

              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Me</h3>
              <ul>
                <li>
                  <Link href="https://www.linkedin.com/in/gozdecamlioglu/" target="_blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div >

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}
