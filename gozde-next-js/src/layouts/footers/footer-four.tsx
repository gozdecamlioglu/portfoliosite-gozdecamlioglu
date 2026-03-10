import React from 'react';
import Image from 'next/image';
import logo from '@/assets/img/logo-gozde/logo-white.png';
import Link from 'next/link';
import ContactOne from '@/components/contact/contact-one';

interface Props {
  hideContactOne?: boolean;
}

export default function FooterFour({ hideContactOne }: Props = {}) {
  return (
    <footer>
      {!hideContactOne && <ContactOne />}
      <div className="tp-footer-3-area dark-bg pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">Website map</h4>
                  <div className="tp-footer-3-menu">
                    <ul>
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/about-me">About</Link></li>
                      <li><Link href="/portfolio-masonry">Portfolio</Link></li>
                      <li><Link href="/contact">Contact</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget text-md-center footer-col-3-2">
                <div className="tp-footer-3-logo-box">
                  <p className="mb-100">
                    Have a project in mind? <br />
                    Let&apos;s work together!
                  </p>
                  <Link className="tp-footer-3-logo p-relative" href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                  <p className="tp-footer-3-copyright">
                    {new Date().getFullYear()} Gozde Camlioglu <br /> © All rights reserved
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3">
                <div className="tp-footer-3-widget mb-30">
                  <h4 className="tp-footer-3-title">Contact</h4>
                  <div className="tp-footer-2-contact-item d-flex align-items-center">
                    <span className="me-1">P:</span>
                    <span><Link href="tel:+16479063039">+1 647 906 3039</Link></span>
                  </div>
                  <div className="tp-footer-2-contact-item d-flex align-items-center mt-2">
                    <span className="me-1">E:</span>
                    <span><Link href="mailto:gozdecamlioglu@gmail.com">gozdecamlioglu@gmail.com</Link></span>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Follow</h4>
                  <div className="tp-footer-3-social">
                    <Link href="https://www.linkedin.com/in/gozdecamlioglu/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
