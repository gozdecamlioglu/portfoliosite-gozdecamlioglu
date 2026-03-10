
import React from 'react';
import Image from 'next/image';
import LineTextThree from '@/components/line-text/line-text-3';
import logo from '@/assets/img/logo-gozde/logo-white.png';
import Link from 'next/link';
import ContactOne from '@/components/contact/contact-one';

export default function FooterThree() {
  return (
    <footer>
      <ContactOne />
      <div className="tp-footer-4-area black-bg pt-70 pb-120" style={{ backgroundImage: "url(/assets/img/home-04/hero/overly.png)" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <LineTextThree />
            </div>
          </div>
        </div>
        <div className="container container-1480">
          <div className="tp-footer-4-top">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="tp-footer-4-top-left">
                  <p>Have a project in mind? <br /> Let&apos;s work together!</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="tp-footer-4-top-right text-start text-md-end">
                  <Link className="tp-btn-white-lg" href="/contact">{`Let's`} Talk!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-footer-2-area black-bg pb-20" style={{ backgroundImage: "url(/assets/img/home-04/hero/overly.png)" }}>
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-1">
                <div className="tp-footer-2-widget-logo">
                  <Link href="/">
                    <Image src={logo} alt="" />
                  </Link>
                </div>
                <div className="tp-footer-2-widget-text">
                  <p>Drop us a line sed id semper <br /> risus in hend rerit.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <h4 className="tp-footer-2-widget-title">Sitemap</h4>
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about-me">About</Link></li>
                    <li><Link href="/portfolio-masonry">Portfolio</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <h4 className="tp-footer-2-widget-title">Contact</h4>
                <div className="tp-footer-2-contact-item d-flex align-items-center">
                  <span className="me-1">P:</span>
                  <span><Link href="tel:+16479063039">+1 647 906 3039</Link></span>
                </div>
                <div className="tp-footer-2-contact-item d-flex align-items-center mt-2">
                  <span className="me-1">E:</span>
                  <span><Link href="mailto:gozdecamlioglu@gmail.com">gozdecamlioglu@gmail.com</Link></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-copyright-2-area tp-copyright-2-bdr-top black-bg" style={{ backgroundImage: "url(/assets/img/home-04/hero/overly.png)" }}>
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p>All rights reserved — {new Date().getFullYear()} © Gozde Camlioglu</p>
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

    </footer>
  )
}
