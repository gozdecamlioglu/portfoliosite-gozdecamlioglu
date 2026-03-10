import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo-gozde/logo-white.png";
import logo_2 from "@/assets/img/logo-gozde/logo.png";
import ContactOne from '@/components/contact/contact-one';

// prop type
type IProps = {
  whiteFooter?: boolean;
  topCls?: string;
};

export default function FooterTwo({ whiteFooter = false, topCls = 'footer-top' }: IProps) {
  return (
    <footer className={`${topCls}`}>
      <ContactOne />
      <div
        className={`tp-footer-2-area pt-100 pb-20 ${whiteFooter ? "tp-footer-white" : "black-bg"
          }`}
      >
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-1">
                {!whiteFooter && (
                  <div className="tp-footer-2-widget-logo">
                    <Link href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                )}
                {whiteFooter && (
                  <div className="tp-footer-2-widget-logo tp-footer-dark">
                    <Link className="logo-1" href="/">
                      <Image src={logo_2} alt="logo" />
                    </Link>
                    <Link className="logo-2" href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                )}
                <div className="tp-footer-2-widget-text">
                  <p>
                    Drop us a line sed id semper <br /> risus in hend rerit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <h4 className="tp-footer-2-widget-title">Sitemap</h4>
                  <ul>
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Contact</Link></li>
                    <li> <Link href="#">Blog</Link></li>
                    <li><Link href="#">Landing</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <h4 className="tp-footer-2-widget-title">Office</h4>
                <div className="tp-footer-2-contact-item d-flex align-items-center">
                  <span className="me-1">P:</span>
                  <span>
                    <Link href="tel:+16479063039">+1 647 906 3039</Link>
                  </span>
                </div>
                <div className="tp-footer-2-contact-item d-flex align-items-center mt-2">
                  <span className="me-1">E:</span>
                  <span>
                    <Link href="mailto:gozdecamlioglu@gmail.com">gozdecamlioglu@gmail.com</Link>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div
        className={`tp-copyright-2-area tp-copyright-2-bdr-top ${whiteFooter ? "tp-copyright-white" : "black-bg"
          }`}
      >
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p>
                  All rights reserved — {new Date().getFullYear()} © Themepure
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="tp-copyright-2-social text-center text-lg-end">
                <Link className="mb-10" href="https://www.linkedin.com/in/gozdecamlioglu/" target="_blank" rel="noopener noreferrer">Linkedin</Link>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer area end --> */}
    </footer>
  );
}
