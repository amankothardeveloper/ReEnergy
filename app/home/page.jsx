"use client";

import React from "react";
import images from "../utils/imagePaths";
import useHomeEffects from "./useHomeEffects";
import Hero from "./(Components)/Hero";
import LogoMarque from "./(Components)/LogoMarque";
import AboutSection from "./(Components)/AboutSection";
import BrandSection from "./(Components)/BrandSection";

const Home = () => {
  // Initialize all interactive features
  useHomeEffects();
  return (
    <>
      {/*<< Hero Section Start >>*/}
      <Hero />
      <LogoMarque />
      {/* About Section Start */}
      <AboutSection />
      {/* Brand Section Start */}
      <BrandSection />
      {/* Service Section Start */}
      <section
        className="service-section fix section-padding bg-cover"
        style={{
          backgroundImage: 'url("https://reenergy.baseecom.com/assets/img/service/service-bg.jpg")',
        }}
      >
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span
                className="wow fadeInUp"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                Services We Offer
              </span>
              <h2
                className="wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  visibility: "hidden",
                  animationDelay: "0.3s",
                  animationName: "none",
                }}
              >
                Complete solar solution <br /> with repair services
              </h2>
            </div>
            <div className="array-button">
              <button
                className="array-prev"
                tabIndex={0}
                aria-label="Next slide"
                aria-controls="swiper-wrapper-118f5ac86c5adfad"
              >
                <i className="fal fa-arrow-right" />
              </button>
              <button
                className="array-next"
                tabIndex={0}
                aria-label="Previous slide"
                aria-controls="swiper-wrapper-118f5ac86c5adfad"
              >
                <i className="fal fa-arrow-left" />
              </button>
            </div>
          </div>
          <div className="service-wrapper">
            <div className="swiper service-slider swiper-initialized swiper-horizontal swiper-pointer-events">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-118f5ac86c5adfad"
                aria-live="off"
                style={{
                  transform: "translate3d(-1980px, 0px, 0px)",
                  transitionDuration: "1500ms",
                }}
              >
                <div
                  className="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index={0}
                  role="group"
                  aria-label="1 / 4"
                  style={{ width: 300, marginRight: 30 }}
                >
                  <div className="service-box-items">
                    <div className="icon">
                      <img src={images.sIcon1} alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="https://reenergy.baseecom.com/service-details.html">
                          Solar Power System
                        </a>
                      </h4>
                      <p>For your car we will do everything advice repairs</p>
                      <a
                        href="https://reenergy.baseecom.com/service-details.html"
                        className="theme-btn-2 mt-3"
                      >
                        read More
                        <i className="fa-solid fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                  data-swiper-slide-index={1}
                  role="group"
                  aria-label="2 / 4"
                  style={{ width: 300, marginRight: 30 }}
                >
                  <div className="service-box-items">
                    <div className="icon">
                      <img src={images.sIcon2} alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="https://reenergy.baseecom.com/service-details.html">
                          Household solar panel
                        </a>
                      </h4>
                      <p>For your car we will do everything advice repairs</p>
                      <a
                        href="https://reenergy.baseecom.com/service-details.html"
                        className="theme-btn-2 mt-3"
                      >
                        read More
                        <i className="fa-solid fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                  data-swiper-slide-index={2}
                  role="group"
                  aria-label="3 / 4"
                  style={{ width: 300, marginRight: 30 }}
                >
                  <div className="service-box-items">
                    <div className="icon">
                      <img src={images.sIcon3} alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="https://reenergy.baseecom.com/service-details.html">
                          Solar Renewal
                        </a>
                      </h4>
                      <p>For your car we will do everything advice repairs</p>
                      <a
                        href="https://reenergy.baseecom.com/service-details.html"
                        className="theme-btn-2 mt-3"
                      >
                        read More
                        <i className="fa-solid fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                  data-swiper-slide-index={3}
                  role="group"
                  aria-label="4 / 4"
                  style={{ width: 300, marginRight: 30 }}
                >
                  <div className="service-box-items">
                    <div className="icon">
                      <img src={images.sIcon4} alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="https://reenergy.baseecom.com/service-details.html">
                          SolarEdge Services
                        </a>
                      </h4>
                      <p>For your car we will do everything advice repairs</p>
                      <a
                        href="https://reenergy.baseecom.com/service-details.html"
                        className="theme-btn-2 mt-3"
                      >
                        read More
                        <i className="fa-solid fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  data-swiper-slide-index={0}
                  role="group"
                  aria-label="1 / 4"
                  style={{ width: 300, marginRight: 30 }}
                >
                  <div className="service-box-items">
                    <div className="icon">
                      <img src={images.sIcon1} alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="https://reenergy.baseecom.com/service-details.html">
                          Solar Power System
                        </a>
                      </h4>
                      <p>For your car we will do everything advice repairs</p>
                      <a
                        href="https://reenergy.baseecom.com/service-details.html"
                        className="theme-btn-2 mt-3"
                      >
                        read More
                        <i className="fa-solid fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-prev"
                  data-swiper-slide-index={1}
                  role="group"
                  aria-label="2 / 4"
                  style={{ width: 300, marginRight: 30 }}
                >
                  <div className="service-box-items">
                    <div className="icon">
                      <img src={images.sIcon2} alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="https://reenergy.baseecom.com/service-details.html">
                          Household solar panel
                        </a>
                      </h4>
                      <p>For your car we will do everything advice repairs</p>
                      <a
                        href="https://reenergy.baseecom.com/service-details.html"
                        className="theme-btn-2 mt-3"
                      >
                        read More
                        <i className="fa-solid fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-active"
                  data-swiper-slide-index={2}
                  role="group"
                  aria-label="3 / 4"
                  style={{ width: 300, marginRight: 30 }}
                >
                  <div className="service-box-items">
                    <div className="icon">
                      <img src={images.sIcon3} alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="https://reenergy.baseecom.com/service-details.html">
                          Solar Renewal
                        </a>
                      </h4>
                      <p>For your car we will do everything advice repairs</p>
                      <a
                        href="https://reenergy.baseecom.com/service-details.html"
                        className="theme-btn-2 mt-3"
                      >
                        read More
                        <i className="fa-solid fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-next"
                  data-swiper-slide-index={3}
                  role="group"
                  aria-label="4 / 4"
                  style={{ width: 300, marginRight: 30 }}
                >
                  <div className="service-box-items">
                    <div className="icon">
                      <img src={images.sIcon4} alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="https://reenergy.baseecom.com/service-details.html">
                          SolarEdge Services
                        </a>
                      </h4>
                      <p>For your car we will do everything advice repairs</p>
                      <a
                        href="https://reenergy.baseecom.com/service-details.html"
                        className="theme-btn-2 mt-3"
                      >
                        read More
                        <i className="fa-solid fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index={0}
                  role="group"
                  aria-label="1 / 4"
                  style={{ width: 300, marginRight: 30 }}
                >
                  <div className="service-box-items">
                    <div className="icon">
                      <img src={images.sIcon1} alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="https://reenergy.baseecom.com/service-details.html">
                          Solar Power System
                        </a>
                      </h4>
                      <p>For your car we will do everything advice repairs</p>
                      <a
                        href="https://reenergy.baseecom.com/service-details.html"
                        className="theme-btn-2 mt-3"
                      >
                        read More
                        <i className="fa-solid fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                  data-swiper-slide-index={1}
                  role="group"
                  aria-label="2 / 4"
                  style={{ width: 300, marginRight: 30 }}
                >
                  <div className="service-box-items">
                    <div className="icon">
                      <img src={images.sIcon2} alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="https://reenergy.baseecom.com/service-details.html">
                          Household solar panel
                        </a>
                      </h4>
                      <p>For your car we will do everything advice repairs</p>
                      <a
                        href="https://reenergy.baseecom.com/service-details.html"
                        className="theme-btn-2 mt-3"
                      >
                        read More
                        <i className="fa-solid fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                  data-swiper-slide-index={2}
                  role="group"
                  aria-label="3 / 4"
                  style={{ width: 300, marginRight: 30 }}
                >
                  <div className="service-box-items">
                    <div className="icon">
                      <img src={images.sIcon3} alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="https://reenergy.baseecom.com/service-details.html">
                          Solar Renewal
                        </a>
                      </h4>
                      <p>For your car we will do everything advice repairs</p>
                      <a
                        href="https://reenergy.baseecom.com/service-details.html"
                        className="theme-btn-2 mt-3"
                      >
                        read More
                        <i className="fa-solid fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                  data-swiper-slide-index={3}
                  role="group"
                  aria-label="4 / 4"
                  style={{ width: 300, marginRight: 30 }}
                >
                  <div className="service-box-items">
                    <div className="icon">
                      <img src={images.sIcon4} alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="https://reenergy.baseecom.com/service-details.html">
                          SolarEdge Services
                        </a>
                      </h4>
                      <p>For your car we will do everything advice repairs</p>
                      <a
                        href="https://reenergy.baseecom.com/service-details.html"
                        className="theme-btn-2 mt-3"
                      >
                        read More
                        <i className="fa-solid fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </div>
            <div
              className="service-text wow fadeInUp"
              data-wow-delay=".4s"
              style={{
                visibility: "hidden",
                animationDelay: "0.4s",
                animationName: "none",
              }}
            >
              <h6>
                Solar Power System.{" "}
                <a href="https://reenergy.baseecom.com/service.html">
                  View Services{" "}
                </a>
              </h6>
            </div>
          </div>
        </div>
      </section>
      {/* Achievement Section Start */}
      <section className="achievement-section fix section-padding pt-0">
        <div className="container">
          <div className="achievement-wrapper">
            <div className="section-title mb-0">
              <span
                className="text-white wow fadeInUp"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                Talk to US
              </span>
              <h2
                className="text-white wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  visibility: "hidden",
                  animationDelay: "0.3s",
                  animationName: "none",
                }}
              >
                Powering the Future <br />
                with the Renew
              </h2>
            </div>
            <div className="counter-area">
              <div
                className="counter-items wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  visibility: "hidden",
                  animationDelay: "0.3s",
                  animationName: "none",
                }}
              >
                <div className="icon">
                  <img src={images.counter01} alt="icon-img" />
                </div>
                <div className="content">
                  <h2>
                    <span className="count">6,561</span>+
                  </h2>
                  <p>Team members</p>
                </div>
              </div>
              <div
                className="counter-items wow fadeInUp"
                data-wow-delay=".5s"
                style={{
                  visibility: "hidden",
                  animationDelay: "0.5s",
                  animationName: "none",
                }}
              >
                <div className="icon">
                  <img src={images.counter02} alt="icon-img" />
                </div>
                <div className="content">
                  <h2>
                    <span className="count">600</span>+
                  </h2>
                  <p>Completed Projects</p>
                </div>
              </div>
              <div
                className="counter-items wow fadeInUp"
                data-wow-delay=".7s"
                style={{
                  visibility: "hidden",
                  animationDelay: "0.7s",
                  animationName: "none",
                }}
              >
                <div className="icon">
                  <img src={images.counter03} alt="icon-img" />
                </div>
                <div className="content">
                  <h2>
                    <span className="count">250</span>+
                  </h2>
                  <p>Winning award</p>
                </div>
              </div>
              <div
                className="counter-items wow fadeInUp"
                data-wow-delay=".9s"
                style={{
                  visibility: "hidden",
                  animationDelay: "0.9s",
                  animationName: "none",
                }}
              >
                <div className="icon">
                  <img src={images.counter04} alt="icon-img" />
                </div>
                <div className="content">
                  <h2>
                    <span className="count">5,90</span>+
                  </h2>
                  <p>Clients Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Section Start */}
      <section className="project-section section-padding pt-0 fix">
        <div className="swiper project-slider swiper-initialized swiper-horizontal swiper-pointer-events">
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-d910394dea1d8ecf6"
            aria-live="off"
            style={{
              transform: "translate3d(-2343px, 0px, 0px)",
              transitionDuration: "1500ms",
            }}
          >
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index={0}
              role="group"
              aria-label="1 / 4"
              style={{ width: "360.5px", marginRight: 30 }}
            >
              <div className="project-items">
                <div className="project-image">
                  <img src={images.project01} alt="project-img" />
                  <div className="project-content">
                    <p>Solar energy</p>
                    <h4>
                      <a href="https://reenergy.baseecom.com/project-details.html">
                        Solar Industry in UK
                      </a>
                    </h4>
                    <a
                      href="https://reenergy.baseecom.com/project-details.html"
                      className="icon"
                    >
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
              data-swiper-slide-index={1}
              role="group"
              aria-label="2 / 4"
              style={{ width: "360.5px", marginRight: 30 }}
            >
              <div className="project-items">
                <div className="project-image">
                  <img src={images.project02} alt="project-img" />
                  <div className="project-content">
                    <p>Solar energy</p>
                    <h4>
                      <a href="https://reenergy.baseecom.com/project-details.html">
                        Greener Planet
                      </a>
                    </h4>
                    <a
                      href="https://reenergy.baseecom.com/project-details.html"
                      className="icon"
                    >
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
              data-swiper-slide-index={2}
              role="group"
              aria-label="3 / 4"
              style={{ width: "360.5px", marginRight: 30 }}
            >
              <div className="project-items">
                <div className="project-image">
                  <img src={images.project03} alt="project-img" />
                  <div className="project-content">
                    <p>Solar energy</p>
                    <h4>
                      <a href="https://reenergy.baseecom.com/project-details.html">
                        Solar Industry in USA
                      </a>
                    </h4>
                    <a
                      href="https://reenergy.baseecom.com/project-details.html"
                      className="icon"
                    >
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
              data-swiper-slide-index={3}
              role="group"
              aria-label="4 / 4"
              style={{ width: "360.5px", marginRight: 30 }}
            >
              <div className="project-items">
                <div className="project-image">
                  <img src={images.project04} alt="project-img" />
                  <div className="project-content">
                    <p>Hybrid energy</p>
                    <h4>
                      <a href="https://reenergy.baseecom.com/project-details.html">
                        Solar Power in UAE
                      </a>
                    </h4>
                    <a
                      href="https://reenergy.baseecom.com/project-details.html"
                      className="icon"
                    >
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={0}
              role="group"
              aria-label="1 / 4"
              style={{ width: "360.5px", marginRight: 30 }}
            >
              <div className="project-items">
                <div className="project-image">
                  <img src={images.project01} alt="project-img" />
                  <div className="project-content">
                    <p>Solar energy</p>
                    <h4>
                      <a href="https://reenergy.baseecom.com/project-details.html">
                        Solar Industry in UK
                      </a>
                    </h4>
                    <a
                      href="https://reenergy.baseecom.com/project-details.html"
                      className="icon"
                    >
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-prev"
              data-swiper-slide-index={1}
              role="group"
              aria-label="2 / 4"
              style={{ width: "360.5px", marginRight: 30 }}
            >
              <div className="project-items">
                <div className="project-image">
                  <img src={images.project02} alt="project-img" />
                  <div className="project-content">
                    <p>Solar energy</p>
                    <h4>
                      <a href="https://reenergy.baseecom.com/project-details.html">
                        Greener Planet
                      </a>
                    </h4>
                    <a
                      href="https://reenergy.baseecom.com/project-details.html"
                      className="icon"
                    >
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-active"
              data-swiper-slide-index={2}
              role="group"
              aria-label="3 / 4"
              style={{ width: "360.5px", marginRight: 30 }}
            >
              <div className="project-items">
                <div className="project-image">
                  <img src={images.project03} alt="project-img" />
                  <div className="project-content">
                    <p>Solar energy</p>
                    <h4>
                      <a href="https://reenergy.baseecom.com/project-details.html">
                        Solar Industry in USA
                      </a>
                    </h4>
                    <a
                      href="https://reenergy.baseecom.com/project-details.html"
                      className="icon"
                    >
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-next"
              data-swiper-slide-index={3}
              role="group"
              aria-label="4 / 4"
              style={{ width: "360.5px", marginRight: 30 }}
            >
              <div className="project-items">
                <div className="project-image">
                  <img src={images.project04} alt="project-img" />
                  <div className="project-content">
                    <p>Hybrid energy</p>
                    <h4>
                      <a href="https://reenergy.baseecom.com/project-details.html">
                        Solar Power in UAE
                      </a>
                    </h4>
                    <a
                      href="https://reenergy.baseecom.com/project-details.html"
                      className="icon"
                    >
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index={0}
              role="group"
              aria-label="1 / 4"
              style={{ width: "360.5px", marginRight: 30 }}
            >
              <div className="project-items">
                <div className="project-image">
                  <img src={images.project01} alt="project-img" />
                  <div className="project-content">
                    <p>Solar energy</p>
                    <h4>
                      <a href="https://reenergy.baseecom.com/project-details.html">
                        Solar Industry in UK
                      </a>
                    </h4>
                    <a
                      href="https://reenergy.baseecom.com/project-details.html"
                      className="icon"
                    >
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
              data-swiper-slide-index={1}
              role="group"
              aria-label="2 / 4"
              style={{ width: "360.5px", marginRight: 30 }}
            >
              <div className="project-items">
                <div className="project-image">
                  <img src={images.project02} alt="project-img" />
                  <div className="project-content">
                    <p>Solar energy</p>
                    <h4>
                      <a href="https://reenergy.baseecom.com/project-details.html">
                        Greener Planet
                      </a>
                    </h4>
                    <a
                      href="https://reenergy.baseecom.com/project-details.html"
                      className="icon"
                    >
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
              data-swiper-slide-index={2}
              role="group"
              aria-label="3 / 4"
              style={{ width: "360.5px", marginRight: 30 }}
            >
              <div className="project-items">
                <div className="project-image">
                  <img src={images.project03} alt="project-img" />
                  <div className="project-content">
                    <p>Solar energy</p>
                    <h4>
                      <a href="https://reenergy.baseecom.com/project-details.html">
                        Solar Industry in USA
                      </a>
                    </h4>
                    <a
                      href="https://reenergy.baseecom.com/project-details.html"
                      className="icon"
                    >
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
              data-swiper-slide-index={3}
              role="group"
              aria-label="4 / 4"
              style={{ width: "360.5px", marginRight: 30 }}
            >
              <div className="project-items">
                <div className="project-image">
                  <img src={images.project04} alt="project-img" />
                  <div className="project-content">
                    <p>Hybrid energy</p>
                    <h4>
                      <a href="https://reenergy.baseecom.com/project-details.html">
                        Solar Power in UAE
                      </a>
                    </h4>
                    <a
                      href="https://reenergy.baseecom.com/project-details.html"
                      className="icon"
                    >
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-dot-2">
            <div className="dot-3 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span
                className="swiper-pagination-bullet"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 1"
              />
              <span
                className="swiper-pagination-bullet"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 2"
              />
              <span
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 3"
                aria-current="true"
              />
              <span
                className="swiper-pagination-bullet"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 4"
              />
            </div>
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          />
        </div>
      </section>
      {/*<< Marque Section Start >>*/}
      <div className="marque-section">
        <div className="container-fluid">
          <div className="marquee-wrapper style-2 text-slider">
            <div className="marquee-inner to-left">
              <ul className="marqee-list d-flex">
                <li className="marquee-item style-2">
                  <span className="text-slider">
                    <img src={images.asterisk} alt="img" />
                  </span>
                  <span className="text-slider text-style">Solar Power</span>
                  <span className="text-slider">
                    <img src={images.asterisk} alt="img" />
                  </span>
                  <span className="text-slider text-style">Solar Pane</span>
                  <span className="text-slider">
                    <img src={images.asterisk} alt="img" />
                  </span>
                  <span className="text-slider text-style">Solar Energy</span>
                  <span className="text-slider">
                    <img src={images.asterisk} alt="img" />
                  </span>
                  <span className="text-slider text-style">Solar Power</span>
                  <span className="text-slider">
                    <img src={images.asterisk} alt="img" />
                  </span>
                  <span className="text-slider text-style">Solar Power</span>
                  <span className="text-slider">
                    <img src={images.asterisk} alt="img" />
                  </span>
                  <span className="text-slider text-style">Solar Pane</span>
                  <span className="text-slider">
                    <img src={images.asterisk} alt="img" />
                  </span>
                  <span className="text-slider text-style">Solar Energy</span>
                  <span className="text-slider">
                    <img src={images.asterisk} alt="img" />
                  </span>
                  <span className="text-slider text-style">Solar Power</span>
                  <span className="text-slider">
                    <img src={images.asterisk} alt="img" />
                  </span>
                  <span className="text-slider text-style">Solar Power</span>
                  <span className="text-slider">
                    <img src={images.asterisk} alt="img" />
                  </span>
                  <span className="text-slider text-style">Solar Pane</span>
                  <span className="text-slider">
                    <img src={images.asterisk} alt="img" />
                  </span>
                  <span className="text-slider text-style">Solar Energy</span>
                  <span className="text-slider">
                    <img src={images.asterisk} alt="img" />
                  </span>
                  <span className="text-slider text-style">Solar Power</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*<< Testimonial Section Start >>*/}
      <section className="testimonial-section section-padding fix">
        <div className="container">
          <div className="testimonial-wrapper">
            <div className="swiper testimonial-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-e29a50da30051088c"
                aria-live="off"
                style={{
                  transitionDuration: "1500ms",
                  transform: "translate3d(-3390px, 0px, 0px)",
                }}
              >
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                  data-swiper-slide-index={3}
                  role="group"
                  aria-label="4 / 4"
                  style={{ width: 1130 }}
                >
                  <div className="testimonial-items">
                    <div
                      className="tesimonial-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/testimonial/01.jpg")',
                      }}
                    >
                      <div className="star">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <div className="section-title">
                        <span>Testimonials</span>
                        <h2>What’s Clients Say </h2>
                      </div>
                      <p className="mt-3 mt-md-0">
                        Nullam dignissim, ante scelerisque the is euismod
                        fermentum odio sem semper the is erat, a feugiat leo
                        urna eget eros. Duis Aenean a imperdiet risus. Aliquam
                        pellentesque nisi dui eget dapibus enim ornare eu. Morbi
                        nunc metus, maximus eu mauris.
                      </p>
                      <div className="author-details">
                        <h5>Kathryn Murphy</h5>
                        <span>Web Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  data-swiper-slide-index={0}
                  role="group"
                  aria-label="1 / 4"
                  style={{ width: 1130 }}
                >
                  <div className="testimonial-items">
                    <div
                      className="tesimonial-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/testimonial/01.jpg")',
                      }}
                    >
                      <div className="star">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <div className="section-title">
                        <span>Testimonials</span>
                        <h2>What’s Clients Say </h2>
                      </div>
                      <p className="mt-3 mt-md-0">
                        Nullam dignissim, ante scelerisque the is euismod
                        fermentum odio sem semper the is erat, a feugiat leo
                        urna eget eros. Duis Aenean a imperdiet risus. Aliquam
                        pellentesque nisi dui eget dapibus enim ornare eu. Morbi
                        nunc metus, maximus eu mauris.
                      </p>
                      <div className="author-details">
                        <h5>Kathryn Murphy</h5>
                        <span>Web Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-prev"
                  data-swiper-slide-index={1}
                  role="group"
                  aria-label="2 / 4"
                  style={{ width: 1130 }}
                >
                  <div className="testimonial-items">
                    <div
                      className="tesimonial-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/testimonial/01.jpg")',
                      }}
                    >
                      <div className="star">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <div className="section-title">
                        <span>Testimonials</span>
                        <h2>What’s Clients Say </h2>
                      </div>
                      <p className="mt-3 mt-md-0">
                        Nullam dignissim, ante scelerisque the is euismod
                        fermentum odio sem semper the is erat, a feugiat leo
                        urna eget eros. Duis Aenean a imperdiet risus. Aliquam
                        pellentesque nisi dui eget dapibus enim ornare eu. Morbi
                        nunc metus, maximus eu mauris.
                      </p>
                      <div className="author-details">
                        <h5>Kathryn Murphy</h5>
                        <span>Web Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-active"
                  data-swiper-slide-index={2}
                  role="group"
                  aria-label="3 / 4"
                  style={{ width: 1130 }}
                >
                  <div className="testimonial-items">
                    <div
                      className="tesimonial-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/testimonial/01.jpg")',
                      }}
                    >
                      <div className="star">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <div className="section-title">
                        <span>Testimonials</span>
                        <h2>What’s Clients Say </h2>
                      </div>
                      <p className="mt-3 mt-md-0">
                        Nullam dignissim, ante scelerisque the is euismod
                        fermentum odio sem semper the is erat, a feugiat leo
                        urna eget eros. Duis Aenean a imperdiet risus. Aliquam
                        pellentesque nisi dui eget dapibus enim ornare eu. Morbi
                        nunc metus, maximus eu mauris.
                      </p>
                      <div className="author-details">
                        <h5>Kathryn Murphy</h5>
                        <span>Web Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-next"
                  data-swiper-slide-index={3}
                  role="group"
                  aria-label="4 / 4"
                  style={{ width: 1130 }}
                >
                  <div className="testimonial-items">
                    <div
                      className="tesimonial-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/testimonial/01.jpg")',
                      }}
                    >
                      <div className="star">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <div className="section-title">
                        <span>Testimonials</span>
                        <h2>What’s Clients Say </h2>
                      </div>
                      <p className="mt-3 mt-md-0">
                        Nullam dignissim, ante scelerisque the is euismod
                        fermentum odio sem semper the is erat, a feugiat leo
                        urna eget eros. Duis Aenean a imperdiet risus. Aliquam
                        pellentesque nisi dui eget dapibus enim ornare eu. Morbi
                        nunc metus, maximus eu mauris.
                      </p>
                      <div className="author-details">
                        <h5>Kathryn Murphy</h5>
                        <span>Web Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index={0}
                  role="group"
                  aria-label="1 / 4"
                  style={{ width: 1130 }}
                >
                  <div className="testimonial-items">
                    <div
                      className="tesimonial-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/testimonial/01.jpg")',
                      }}
                    >
                      <div className="star">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <div className="section-title">
                        <span>Testimonials</span>
                        <h2>What’s Clients Say </h2>
                      </div>
                      <p className="mt-3 mt-md-0">
                        Nullam dignissim, ante scelerisque the is euismod
                        fermentum odio sem semper the is erat, a feugiat leo
                        urna eget eros. Duis Aenean a imperdiet risus. Aliquam
                        pellentesque nisi dui eget dapibus enim ornare eu. Morbi
                        nunc metus, maximus eu mauris.
                      </p>
                      <div className="author-details">
                        <h5>Kathryn Murphy</h5>
                        <span>Web Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </div>
            <div className="swiper-dot-2">
              <div className="dot-2 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                <span
                  className="swiper-pagination-bullet"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 1"
                />
                <span
                  className="swiper-pagination-bullet"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 2"
                />
                <span
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 3"
                  aria-current="true"
                />
                <span
                  className="swiper-pagination-bullet"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Team Section Start >>*/}
      <section className="team-section section-padding pt-0 section-bg-2">
        <div className="line-shape">
          <img
            src="./ReEnergy - Solar and Renewable Energy HTML Template_files/line-shape.png"
            alt="shape-img"
          />
        </div>
        <div className="mask-shape">
          <img
            src="./ReEnergy - Solar and Renewable Energy HTML Template_files/mask-shape.png"
            alt="shape-img"
          />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span
                className="text-white wow fadeInUp"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                EXPERT PEOPLE
              </span>
              <h2
                className="text-white wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  visibility: "hidden",
                  animationDelay: "0.3s",
                  animationName: "none",
                }}
              >
                Dedicated Team Members
              </h2>
            </div>
            <a
              href="https://reenergy.baseecom.com/team.html"
              className="theme-btn hover-white wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                visibility: "hidden",
                animationDelay: "0.5s",
                animationName: "none",
              }}
            >
              All Member
              <i className="fa-solid fa-arrow-right-long" />
            </a>
          </div>
          <div className="team-wrapper">
            <div
              className="team-items bor-top bor-bottom wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "hidden",
                animationDelay: "0.3s",
                animationName: "none",
              }}
            >
              <div className="team-title">
                <span>Scrum Master</span>
                <h4>
                  <a href="https://reenergy.baseecom.com/team-details.html">
                    Cameron Williamson
                  </a>
                </h4>
              </div>
              <p>
                Integer at sapien nec sapien <br />
                sollicitudin ultrices in ut nisl.
              </p>
              <div
                className="team-hover d-none d-md-block bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/team/hover-1.png")',
                }}
              />
              <div className="social-profile">
                <ul>
                  <li>
                    <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
                <span className="plus-btn">
                  <i className="fa-solid fa-plus" />
                </span>
              </div>
            </div>
            <div
              className="team-items bor-bottom pt-0 wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                visibility: "hidden",
                animationDelay: "0.5s",
                animationName: "none",
              }}
            >
              <div className="team-title">
                <span>Engineering</span>
                <h4>
                  <a href="https://reenergy.baseecom.com/team-details.html">
                    Leslie Alexander
                  </a>
                </h4>
              </div>
              <p>
                Integer at sapien nec sapien <br />
                sollicitudin ultrices in ut nisl.
              </p>
              <div
                className="team-hover d-none d-md-block bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/team/hover-1.png")',
                }}
              />
              <div className="social-profile">
                <ul>
                  <li>
                    <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
                <span className="plus-btn">
                  <i className="fa-solid fa-plus" />
                </span>
              </div>
            </div>
            <div
              className="team-items bor-bottom pt-0 wow fadeInUp"
              data-wow-delay=".7s"
              style={{
                visibility: "hidden",
                animationDelay: "0.7s",
                animationName: "none",
              }}
            >
              <div className="team-title">
                <span>UI/UX Designer</span>
                <h4>
                  <a href="https://reenergy.baseecom.com/team-details.html">
                    Ronald Richards
                  </a>
                </h4>
              </div>
              <p>
                Integer at sapien nec sapien <br />
                sollicitudin ultrices in ut nisl.
              </p>
              <div
                className="team-hover d-none d-md-block bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/team/hover-1.png")',
                }}
              />
              <div className="social-profile">
                <ul>
                  <li>
                    <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
                <span className="plus-btn">
                  <i className="fa-solid fa-plus" />
                </span>
              </div>
            </div>
            <div
              className="team-items bor-bottom pt-0 wow fadeInUp"
              data-wow-delay=".9s"
              style={{
                visibility: "hidden",
                animationDelay: "0.9s",
                animationName: "none",
              }}
            >
              <div className="team-title">
                <span>Web Designer</span>
                <h4>
                  <a href="https://reenergy.baseecom.com/team-details.html">
                    Darrell Steward
                  </a>
                </h4>
              </div>
              <p>
                Integer at sapien nec sapien <br />
                sollicitudin ultrices in ut nisl.
              </p>
              <div
                className="team-hover d-none d-md-block bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/team/hover-1.png")',
                }}
              />
              <div className="social-profile">
                <ul>
                  <li>
                    <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
                <span className="plus-btn">
                  <i className="fa-solid fa-plus" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Pricing Section Start >>*/}
      <section className="pricing-section section-bg fix section-padding">
        <div className="left-shape">
          <img
            src="./ReEnergy - Solar and Renewable Energy HTML Template_files/pricing-left-shape.png"
            alt="shape-img"
          />
        </div>
        <div className="right-shape">
          <img
            src="./ReEnergy - Solar and Renewable Energy HTML Template_files/pricing-right-shape.png"
            alt="shape-img"
          />
        </div>
        <div className="container">
          <div className="pricing-wrapper">
            <div className="section-title-area">
              <div className="section-title">
                <span
                  className="wow fadeInUp"
                  style={{ visibility: "hidden", animationName: "none" }}
                >
                  Our Pricing
                </span>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay=".3s"
                  style={{
                    visibility: "hidden",
                    animationDelay: "0.3s",
                    animationName: "none",
                  }}
                >
                  Choose Your Best Offer
                </h2>
              </div>
              <ul className="nav" role="tablist">
                <li
                  className="nav-item wow fadeInUp"
                  data-wow-delay=".3s"
                  role="presentation"
                  style={{
                    visibility: "hidden",
                    animationDelay: "0.3s",
                    animationName: "none",
                  }}
                >
                  <a
                    href="https://reenergy.baseecom.com/?storefront=envato-elements#monthly"
                    data-bs-toggle="tab"
                    className="nav-link active"
                    aria-selected="true"
                    role="tab"
                  >
                    Monthly
                  </a>
                </li>
                <li
                  className="nav-item wow fadeInUp"
                  data-wow-delay=".5s"
                  role="presentation"
                  style={{
                    visibility: "hidden",
                    animationDelay: "0.5s",
                    animationName: "none",
                  }}
                >
                  <a
                    href="https://reenergy.baseecom.com/?storefront=envato-elements#yearly"
                    data-bs-toggle="tab"
                    className="nav-link"
                    aria-selected="false"
                    role="tab"
                    tabIndex={-1}
                  >
                    Yearly
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div
                id="monthly"
                className="tab-pane fade show active"
                role="tabpanel"
              >
                <div className="row">
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{
                      visibility: "hidden",
                      animationDelay: "0.3s",
                      animationName: "none",
                    }}
                  >
                    <div className="pricing-items">
                      <div className="tag">
                        <h6>Basic Plan</h6>
                      </div>
                      <div className="pricing-header">
                        <h2>$149</h2>
                        <span>Par month</span>
                        <p>
                          Lnteger sapien nec sapien sollicitudin ultrices Cras
                          tempor id lorem et
                        </p>
                      </div>
                      <ul className="pricing-list">
                        <li>
                          <i className="fa-solid fa-check" />
                          Branding and design Identity
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Web site Marketing Solutions
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Free 15 GB Linux Hosting
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          24/7 system Monitoring
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          unlimited Download Data
                        </li>
                      </ul>
                      <div className="pricing-button">
                        <p>Up to 10 users + 1.99 per user</p>
                        <a
                          href="https://reenergy.baseecom.com/contact.html"
                          className="pricing-btn mt-4"
                        >
                          choose Plan
                          <i className="fa-solid fa-arrow-right-long" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{
                      visibility: "hidden",
                      animationDelay: "0.5s",
                      animationName: "none",
                    }}
                  >
                    <div className="pricing-items active">
                      <div className="tag">
                        <h6>Most Popular</h6>
                      </div>
                      <div className="pricing-header">
                        <h2>$179</h2>
                        <span>Par month</span>
                        <p>
                          Lnteger sapien nec sapien sollicitudin ultrices Cras
                          tempor id lorem et
                        </p>
                      </div>
                      <ul className="pricing-list">
                        <li>
                          <i className="fa-solid fa-check" />
                          Branding and design Identity
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Web site Marketing Solutions
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Free 15 GB Linux Hosting
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          24/7 system Monitoring
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          unlimited Download Data
                        </li>
                      </ul>
                      <div className="pricing-button">
                        <p>Up to 10 users + 1.99 per user</p>
                        <a
                          href="https://reenergy.baseecom.com/contact.html"
                          className="pricing-btn mt-4"
                        >
                          choose Plan
                          <i className="fa-solid fa-arrow-right-long" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".7s"
                    style={{
                      visibility: "hidden",
                      animationDelay: "0.7s",
                      animationName: "none",
                    }}
                  >
                    <div className="pricing-items">
                      <div className="tag">
                        <h6>Premium</h6>
                      </div>
                      <div className="pricing-header">
                        <h2>$199</h2>
                        <span>Par month</span>
                        <p>
                          Lnteger sapien nec sapien sollicitudin ultrices Cras
                          tempor id lorem et
                        </p>
                      </div>
                      <ul className="pricing-list">
                        <li>
                          <i className="fa-solid fa-check" />
                          Branding and design Identity
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Web site Marketing Solutions
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Free 15 GB Linux Hosting
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          24/7 system Monitoring
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          unlimited Download Data
                        </li>
                      </ul>
                      <div className="pricing-button">
                        <p>Up to 10 users + 1.99 per user</p>
                        <a
                          href="https://reenergy.baseecom.com/contact.html"
                          className="pricing-btn mt-4"
                        >
                          choose Plan
                          <i className="fa-solid fa-arrow-right-long" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="yearly" className="tab-pane fade" role="tabpanel">
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="pricing-items">
                      <div className="tag">
                        <h6>Basic Plan</h6>
                      </div>
                      <div className="pricing-header">
                        <h2>$149</h2>
                        <span>Par month</span>
                        <p>
                          Lnteger sapien nec sapien sollicitudin ultrices Cras
                          tempor id lorem et
                        </p>
                      </div>
                      <ul className="pricing-list">
                        <li>
                          <i className="fa-solid fa-check" />
                          Branding and design Identity
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Web site Marketing Solutions
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Free 15 GB Linux Hosting
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          24/7 system Monitoring
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          unlimited Download Data
                        </li>
                      </ul>
                      <div className="pricing-button">
                        <p>Up to 10 users + 1.99 per user</p>
                        <a
                          href="https://reenergy.baseecom.com/contact.html"
                          className="pricing-btn mt-4"
                        >
                          choose Plan
                          <i className="fa-solid fa-arrow-right-long" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="pricing-items active">
                      <div className="tag">
                        <h6>Most Popular</h6>
                      </div>
                      <div className="pricing-header">
                        <h2>$179</h2>
                        <span>Par month</span>
                        <p>
                          Lnteger sapien nec sapien sollicitudin ultrices Cras
                          tempor id lorem et
                        </p>
                      </div>
                      <ul className="pricing-list">
                        <li>
                          <i className="fa-solid fa-check" />
                          Branding and design Identity
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Web site Marketing Solutions
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Free 15 GB Linux Hosting
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          24/7 system Monitoring
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          unlimited Download Data
                        </li>
                      </ul>
                      <div className="pricing-button">
                        <p>Up to 10 users + 1.99 per user</p>
                        <a
                          href="https://reenergy.baseecom.com/contact.html"
                          className="pricing-btn mt-4"
                        >
                          choose Plan
                          <i className="fa-solid fa-arrow-right-long" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="pricing-items">
                      <div className="tag">
                        <h6>Premium</h6>
                      </div>
                      <div className="pricing-header">
                        <h2>$199</h2>
                        <span>Par month</span>
                        <p>
                          Lnteger sapien nec sapien sollicitudin ultrices Cras
                          tempor id lorem et
                        </p>
                      </div>
                      <ul className="pricing-list">
                        <li>
                          <i className="fa-solid fa-check" />
                          Branding and design Identity
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Web site Marketing Solutions
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          Free 15 GB Linux Hosting
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          24/7 system Monitoring
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          unlimited Download Data
                        </li>
                      </ul>
                      <div className="pricing-button">
                        <p>Up to 10 users + 1.99 per user</p>
                        <a
                          href="https://reenergy.baseecom.com/contact.html"
                          className="pricing-btn mt-4"
                        >
                          choose Plan
                          <i className="fa-solid fa-arrow-right-long" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Faq Section Start >>*/}
      <section className="faq-section fix section-padding">
        <div className="right-shape">
          <img
            src="./ReEnergy - Solar and Renewable Energy HTML Template_files/right-shape.png"
            alt="shape-img"
          />
        </div>
        <div className="faq-shape-box">
          <div className="faq-shape">
            <img
              src="./ReEnergy - Solar and Renewable Energy HTML Template_files/shape.png"
              alt="shape-img"
            />
          </div>
        </div>
        <div className="container">
          <div className="faq-wrapper">
            <div className="row g-4">
              <div
                className="col-lg-6 wow fadeInUp"
                data-wow-delay=".4s"
                style={{
                  visibility: "hidden",
                  animationDelay: "0.4s",
                  animationName: "none",
                }}
              >
                <div className="faq-image">
                  <img
                    src="./ReEnergy - Solar and Renewable Energy HTML Template_files/faq.png"
                    alt="faq-img"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="section-title">
                    <span
                      className="wow fadeInUp"
                      style={{ visibility: "hidden", animationName: "none" }}
                    >
                      See Our Faqs
                    </span>
                    <h2
                      className="wow fadeInUp"
                      data-wow-delay=".3s"
                      style={{
                        visibility: "hidden",
                        animationDelay: "0.3s",
                        animationName: "none",
                      }}
                    >
                      Frequently asked question
                    </h2>
                  </div>
                  <div className="faq-accordion mt-4 mt-md-0">
                    <div className="accordion" id="accordion">
                      <div
                        className="accordion-item mb-3 wow fadeInUp"
                        data-wow-delay=".3s"
                        style={{
                          visibility: "hidden",
                          animationDelay: "0.3s",
                          animationName: "none",
                        }}
                      >
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq1"
                            aria-expanded="true"
                            aria-controls="faq1"
                          >
                            How to use Solaren?
                          </button>
                        </h5>
                        <div
                          id="faq1"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            There are many variations of passages Lorem Ipsum
                            but the majority have suffered alteration in some
                            form, by injected humor.
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item mb-3 wow fadeInUp"
                        data-wow-delay=".5s"
                        style={{
                          visibility: "hidden",
                          animationDelay: "0.5s",
                          animationName: "none",
                        }}
                      >
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq2"
                            aria-expanded="false"
                            aria-controls="faq2"
                          >
                            What services does you offer?
                          </button>
                        </h5>
                        <div
                          id="faq2"
                          className="accordion-collapse show"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            There are many variations of passages Lorem Ipsum
                            but the majority have suffered alteration in some
                            form, by injected humor.
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item mb-3 wow fadeInUp"
                        data-wow-delay=".7s"
                        style={{
                          visibility: "hidden",
                          animationDelay: "0.7s",
                          animationName: "none",
                        }}
                      >
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq3"
                            aria-expanded="false"
                            aria-controls="faq3"
                          >
                            How to soft launch your business?
                          </button>
                        </h5>
                        <div
                          id="faq3"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            There are many variations of passages Lorem Ipsum
                            but the majority have suffered alteration in some
                            form, by injected humor.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< News Section Start >>*/}
      <section className="news-section section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <span
              className="wow fadeInUp"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              Recent Articles
            </span>
            <h2
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "hidden",
                animationDelay: "0.3s",
                animationName: "none",
              }}
            >
              Our Latest Blog
            </h2>
          </div>
        </div>
        <div className="news-wrapper">
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "hidden",
                animationDelay: "0.3s",
                animationName: "none",
              }}
            >
              <div className="single-news-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: `url(${images.news01})` }}
                >
                  <div className="post-date">
                    <span>Feb, 2024</span>
                  </div>
                </div>
                <div className="news-content">
                  <h3>
                    <a href="https://reenergy.baseecom.com/news-details.html">
                      Harnessing the Sun The <br />
                      Future of The Solar Power.
                    </a>
                  </h3>
                  <p>
                    Nulla ut turpis a nisi vulputate varius non ut lectus. Ut
                    vulputate tempus tincidunt. Duis mi tellus,
                  </p>
                  <a
                    href="https://reenergy.baseecom.com/news-details.html"
                    className="theme-btn-2 mt-3"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                visibility: "hidden",
                animationDelay: "0.5s",
                animationName: "none",
              }}
            >
              <div className="single-news-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: `url(${images.news03})` }}
                >
                  <div className="post-date">
                    <span>May, 2024</span>
                  </div>
                </div>
                <div className="news-content">
                  <h3>
                    <a href="https://reenergy.baseecom.com/news-details.html">
                      How to Choose the Right
                      <br /> Solar Panels for Your Home.
                    </a>
                  </h3>
                  <p>
                    Nulla ut turpis a nisi vulputate varius non ut lectus. Ut
                    vulputate tempus tincidunt. Duis mi tellus,
                  </p>
                  <a
                    href="https://reenergy.baseecom.com/news-details.html"
                    className="theme-btn-2 mt-3"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
              style={{
                visibility: "hidden",
                animationDelay: "0.7s",
                animationName: "none",
              }}
            >
              <div className="single-news-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: `url(${images.news02})` }}
                >
                  <div className="post-date">
                    <span>July, 2024</span>
                  </div>
                </div>
                <div className="news-content">
                  <h3>
                    <a href="https://reenergy.baseecom.com/news-details.html">
                      DIY Solar Can You Really <br />
                      Install Solar Panels Yourself.
                    </a>
                  </h3>
                  <p>
                    Nulla ut turpis a nisi vulputate varius non ut lectus. Ut
                    vulputate tempus tincidunt. Duis mi tellus,
                  </p>
                  <a
                    href="https://reenergy.baseecom.com/news-details.html"
                    className="theme-btn-2 mt-3"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
