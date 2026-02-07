"use client";

import React from "react";
import images from "../utils/imagePaths";
import useHomeEffects from "./useHomeEffects";

const Home = () => {
  // Initialize all interactive features
  useHomeEffects();
  return (
    <>
      {/* Preloader Start */}
      <div
        id="preloader"
        className="preloader loaded"
        style={{ display: "none" }}
      >
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text-preloader="R" className="letters-loading">
              R
            </span>
            <span data-text-preloader="E" className="letters-loading">
              E
            </span>
            <span data-text-preloader="E" className="letters-loading">
              E
            </span>
            <span data-text-preloader="N" className="letters-loading">
              N
            </span>
            <span data-text-preloader="E" className="letters-loading">
              E
            </span>
            <span data-text-preloader="R" className="letters-loading">
              R
            </span>
            <span data-text-preloader="G" className="letters-loading">
              G
            </span>
            <span data-text-preloader="Y" className="letters-loading">
              Y
            </span>
          </div>
          <p className="text-center">Loading</p>
        </div>
        <div className="loader">
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-left">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg" />
            </div>
          </div>
        </div>
      </div>
      {/*<< Mouse Cursor Start >>*/}
      <div
        className="mouse-cursor cursor-outer"
        style={{
          visibility: "visible",
          transform: "translate(811px, 297px)",
        }}
      />
      <div
        className="mouse-cursor cursor-inner"
        style={{
          visibility: "visible",
          transform: "translate(811px, 297px)",
        }}
      />
      {/* Offcanvas Area Start */}
      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a href="https://reenergy.baseecom.com/index.html">
                    <img
                      src={images.blackLogo}
                      alt="logo-img"
                    />
                  </a>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <p className="text d-none d-lg-block">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio
                sem semper the is erat, a feugiat leo urna eget eros. Duis
                Aenean a imperdiet risus.
              </p>
              <div className="mobile-menu fix mb-3" />
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a
                        target="_blank"
                        href="https://reenergy.baseecom.com/?storefront=envato-elements#"
                      >
                        Main Street, Melbourne, Australia
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@azent.com">
                        <span className="mailto:info@example.com">
                          info@example.com
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a
                        target="_blank"
                        href="https://reenergy.baseecom.com/?storefront=envato-elements#"
                      >
                        Mod-friday, 09am -05pm
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+11002345909">+11002345909</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <a
                    href="https://reenergy.baseecom.com/contact.html"
                    className="theme-btn text-center"
                  >
                    <span>
                      get A Quote
                      <i className="fa-solid fa-arrow-right-long" />
                    </span>
                  </a>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay" />
      {/* Header Section Start */}
      <header>
        <div className="header-top-section fix">
          <div className="container-fluid">
            <div className="header-top-wrapper">
              <ul className="contact-list">
                <li>
                  <i className="far fa-envelope" />
                  <a href="mailto:info@example.com" className="link">
                    info@example.com
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-phone-volume" />
                  <a href="tel:2086660112">+208-666-0112</a>
                </li>
              </ul>
              <div className="top-right">
                <div className="social-icon d-flex align-items-center">
                  <span>Follow Us:</span>
                  <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                    <i className="fa-brands fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="header-sticky" className="header-1">
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main style-2">
                <div className="header-left">
                  <div className="logo">
                    <a
                      href="https://reenergy.baseecom.com/index.html"
                      className="header-logo"
                    >
                      <img
                        src={images.blackLogo}
                        alt="logo-img"
                      />
                    </a>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <nav id="mobile-menu" style={{ display: "block" }}>
                        <ul>
                          <li className="has-dropdown active menu-thumb">
                            <a href="https://reenergy.baseecom.com/index.html">
                              Home
                              <i className="fas fa-angle-down" />
                            </a>
                            <ul className="submenu has-homemenu">
                              <li>
                                <div className="homemenu-items">
                                  <div className="homemenu">
                                    <div className="homemenu-thumb">
                                      <img
                                        src={images.home1}
                                        alt="img"
                                      />
                                      <div className="demo-button">
                                        <a
                                          href="https://reenergy.baseecom.com/index.html"
                                          className="theme-btn"
                                        >
                                          <span>Multi Page</span>
                                        </a>
                                        <a
                                          href="https://reenergy.baseecom.com/index-one-page.html"
                                          className="theme-btn"
                                        >
                                          <span>One Page</span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="homemenu-content text-center">
                                      <h4 className="homemenu-title">
                                        Solar Energy
                                      </h4>
                                    </div>
                                  </div>
                                  <div className="homemenu">
                                    <div className="homemenu-thumb mb-15">
                                      <img
                                        src={images.home2}
                                        alt="img"
                                      />
                                      <div className="demo-button">
                                        <a
                                          href="https://reenergy.baseecom.com/index-2.html"
                                          className="theme-btn"
                                        >
                                          <span>Multi Page</span>
                                        </a>
                                        <a
                                          href="https://reenergy.baseecom.com/index-two-page.html"
                                          className="theme-btn"
                                        >
                                          <span>One Page</span>
                                        </a>
                                        z{" "}
                                      </div>
                                    </div>
                                    <div className="homemenu-content text-center">
                                      <h4 className="homemenu-title">
                                        Wind Energy
                                      </h4>
                                    </div>
                                  </div>
                                  <div className="homemenu">
                                    <div className="homemenu-thumb mb-15">
                                      <img
                                        src={images.home3}
                                        alt="img"
                                      />
                                      <div className="demo-button">
                                        <a
                                          href="https://reenergy.baseecom.com/index-3.html"
                                          className="theme-btn"
                                        >
                                          <span>Multi Page</span>
                                        </a>
                                        <a
                                          href="https://reenergy.baseecom.com/index-three-page.html"
                                          className="theme-btn"
                                        >
                                          <span>One Page</span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="homemenu-content text-center">
                                      <h4 className="homemenu-title">
                                        Water Energy
                                      </h4>
                                    </div>
                                  </div>
                                  <div className="homemenu">
                                    <div className="homemenu-thumb mb-15">
                                      <img
                                        src={images.home4}
                                        alt="img"
                                      />
                                      <div className="demo-button">
                                        <a
                                          href="https://reenergy.baseecom.com/index-4.html"
                                          className="theme-btn"
                                        >
                                          <span>Multi Page</span>
                                        </a>
                                        <a
                                          href="https://reenergy.baseecom.com/index-four-page.html"
                                          className="theme-btn"
                                        >
                                          <span>One Page</span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="homemenu-content text-center">
                                      <h4 className="homemenu-title">
                                        Biomass Energy
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="https://reenergy.baseecom.com/about.html">
                              About
                            </a>
                          </li>
                          <li>
                            <a href="https://reenergy.baseecom.com/news.html">
                              Services
                              <i className="fas fa-angle-down" />
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="https://reenergy.baseecom.com/service.html">
                                  Services
                                </a>
                              </li>
                              <li>
                                <a href="https://reenergy.baseecom.com/service-carousel.html">
                                  Service Carousel
                                </a>
                              </li>
                              <li>
                                <a href="https://reenergy.baseecom.com/service-details.html">
                                  Service Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <a href="https://reenergy.baseecom.com/news.html">
                              Pages
                              <i className="fas fa-angle-down" />
                            </a>
                            <ul className="submenu">
                              <li className="has-dropdown">
                                <a href="https://reenergy.baseecom.com/project.html">
                                  Projects
                                  <i className="fas fa-angle-down" />
                                </a>
                                <ul className="submenu">
                                  <li>
                                    <a href="https://reenergy.baseecom.com/project.html">
                                      Project
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://reenergy.baseecom.com/project-carousel.html">
                                      Project Carousel
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://reenergy.baseecom.com/project-details.html">
                                      Project Details
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="has-dropdown">
                                <a href="https://reenergy.baseecom.com/team.html">
                                  Team
                                  <i className="fas fa-angle-down" />
                                </a>
                                <ul className="submenu">
                                  <li>
                                    <a href="https://reenergy.baseecom.com/team.html">
                                      Our Team
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://reenergy.baseecom.com/team-carousel.html">
                                      Team Carousel
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://reenergy.baseecom.com/team-details.html">
                                      Team Details
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="https://reenergy.baseecom.com/pricing.html">
                                  Pricing
                                </a>
                              </li>
                              <li>
                                <a href="https://reenergy.baseecom.com/faq.html">
                                  Faq's
                                </a>
                              </li>
                              <li>
                                <a href="https://reenergy.baseecom.com/404.html">
                                  404 Page
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="https://reenergy.baseecom.com/news.html">
                              Blog
                              <i className="fas fa-angle-down" />
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="https://reenergy.baseecom.com/news.html">
                                  Blog Grid
                                </a>
                              </li>
                              <li>
                                <a href="https://reenergy.baseecom.com/news-standard.html">
                                  Blog Standard
                                </a>
                              </li>
                              <li>
                                <a href="https://reenergy.baseecom.com/news-details.html">
                                  Blog Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="https://reenergy.baseecom.com/contact.html">
                              Contact
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <a
                    href="https://reenergy.baseecom.com/?storefront=envato-elements#0"
                    className="search-trigger search-icon"
                  >
                    <i className="fal fa-search" />
                  </a>
                  <div className="header-button">
                    <a
                      href="https://reenergy.baseecom.com/contact.html"
                      className="theme-btn"
                    >
                      <span>
                        get A Quote
                        <i className="fa-solid fa-arrow-right-long" />
                      </span>
                    </a>
                  </div>
                  <div className="header__hamburger d-xl-block my-auto">
                    <div className="sidebar__toggle">
                      <i className="fas fa-bars" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Search Area Start */}
      <div className="search-wrap">
        <div className="search-inner">
          <i className="fas fa-times search-close" id="search-close" />
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input
                  type="search"
                  className="main-search-input"
                  placeholder="Search..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*<< Hero Section Start >>*/}
      <section className="hero-section hero-1">
        <div className="array-button">
          <button
            className="array-prev"
            tabIndex={0}
            aria-label="Next slide"
            aria-controls="swiper-wrapper-118f5ac86c5adfad"
          >
            <i className="fal fa-arrow-left" />
          </button>
          <button
            className="array-next"
            tabIndex={0}
            aria-label="Previous slide"
            aria-controls="swiper-wrapper-118f5ac86c5adfad"
          >
            <i className="fal fa-arrow-right" />
          </button>
        </div>
        <div className="swiper hero-slider swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress swiper-backface-hidden">
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-e723842cdcbfbe03"
            aria-live="off"
            style={{ transitionDuration: "0ms" }}
          >
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
              data-swiper-slide-index={1}
              role="group"
              aria-label="2 / 2"
              style={{
                width: 1532,
                transitionDuration: "0ms",
                opacity: 1,
                transform: "translate3d(0px, 0px, 0px)",
              }}
            >
              <div
                className="hero-image bg-cover"
                style={{
                  backgroundImage: `url(${images.home4})`,
                }}
              />
              <div className="container">
                <div className="row g-4">
                  <div className="col-lg-8">
                    <div className="hero-content">
                      <h6
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".3s"
                        className=""
                        style={{
                          animationDelay: "0.3s",
                          animationDuration: "2s",
                        }}
                      >
                        {" "}
                        WELCOME TO THE SOLAR SOLEN{" "}
                      </h6>
                      <h1
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".5s"
                        className=""
                        style={{
                          animationDelay: "0.5s",
                          animationDuration: "2s",
                        }}
                      >
                        Powering the Future With Renewable.
                      </h1>
                      <p
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".7s"
                        className=""
                        style={{
                          animationDelay: "0.7s",
                          animationDuration: "2s",
                        }}
                      >
                        Transmds is the world’s driving worldwide coordinations
                        supplier we uphold <br /> industry and exchange the
                        worldwide trade of merchandi
                      </p>
                      <div className="hero-button">
                        <a
                          href="https://reenergy.baseecom.com/index.html"
                          className="theme-btn theme-color-2"
                          data-animation="slideInRight"
                          data-duration="2s"
                          data-delay=".9s"
                          style={{
                            animationDelay: "0.9s",
                            animationDuration: "2s",
                          }}
                        >
                          <span>
                            Learn More <i className="fas fa-chevron-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-prev swiper-slide-duplicate-next"
              data-swiper-slide-index={0}
              role="group"
              aria-label="1 / 2"
              style={{
                width: 1532,
                transitionDuration: "0ms",
                opacity: 1,
                transform: "translate3d(-1532px, 0px, 0px)",
              }}
            >
              <div
                className="hero-image bg-cover"
                style={{
                  backgroundImage: `url(${images.home2})`,
                }}
              />
              <div className="container">
                <div className="row g-4">
                  <div className="col-lg-8">
                    <div className="hero-content">
                      <h6
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".3s"
                        className=""
                        style={{
                          animationDelay: "0.3s",
                          animationDuration: "2s",
                        }}
                      >
                        WELCOME TO THE SOLAR SOLEN{" "}
                      </h6>
                      <h1
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".5s"
                        className=""
                        style={{
                          animationDelay: "0.5s",
                          animationDuration: "2s",
                        }}
                      >
                        Powering the Future With Renewable.
                      </h1>
                      <p
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".7s"
                        className=""
                        style={{
                          animationDelay: "0.7s",
                          animationDuration: "2s",
                        }}
                      >
                        Transmds is the world’s driving worldwide coordinations
                        supplier we uphold <br /> industry and exchange the
                        worldwide trade of merchandi
                      </p>
                      <div className="hero-button">
                        <a
                          href="https://reenergy.baseecom.com/index.html"
                          className="theme-btn theme-color-2"
                          data-animation="slideInRight"
                          data-duration="2s"
                          data-delay=".9s"
                          style={{
                            animationDelay: "0.9s",
                            animationDuration: "2s",
                          }}
                        >
                          <span>
                            Learn More <i className="fas fa-chevron-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-visible swiper-slide-active"
              data-swiper-slide-index={1}
              role="group"
              aria-label="2 / 2"
              style={{
                width: 1532,
                transitionDuration: "0ms",
                opacity: 1,
                transform: "translate3d(-3064px, 0px, 0px)",
              }}
            >
              <div
                className="hero-image bg-cover"
                style={{
                  backgroundImage: `url(${images.home4})`,
                }}
              />
              <div className="container">
                <div className="row g-4">
                  <div className="col-lg-8">
                    <div className="hero-content">
                      <h6
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".3s"
                        className=""
                        style={{
                          animationDelay: "0.3s",
                          animationDuration: "2s",
                        }}
                      >
                        {" "}
                        WELCOME TO THE SOLAR SOLEN{" "}
                      </h6>
                      <h1
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".5s"
                        className=""
                        style={{
                          animationDelay: "0.5s",
                          animationDuration: "2s",
                        }}
                      >
                        Powering the Future With Renewable.
                      </h1>
                      <p
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".7s"
                        className=""
                        style={{
                          animationDelay: "0.7s",
                          animationDuration: "2s",
                        }}
                      >
                        Transmds is the world’s driving worldwide coordinations
                        supplier we uphold <br /> industry and exchange the
                        worldwide trade of merchandi
                      </p>
                      <div className="hero-button">
                        <a
                          href="https://reenergy.baseecom.com/index.html"
                          className="theme-btn theme-color-2"
                          data-animation="slideInRight"
                          data-duration="2s"
                          data-delay=".9s"
                          style={{
                            animationDelay: "0.9s",
                            animationDuration: "2s",
                          }}
                        >
                          <span>
                            Learn More <i className="fas fa-chevron-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
              data-swiper-slide-index={0}
              role="group"
              aria-label="1 / 2"
              style={{
                width: 1532,
                transitionDuration: "0ms",
                opacity: 0,
                transform: "translate3d(-4596px, 0px, 0px)",
              }}
            >
              <div
                className="hero-image bg-cover"
                style={{
                  backgroundImage: `url(${images.home2})`,
                }}
              />
              <div className="container">
                <div className="row g-4">
                  <div className="col-lg-8">
                    <div className="hero-content">
                      <h6
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".3s"
                        className=""
                        style={{
                          animationDelay: "0.3s",
                          animationDuration: "2s",
                        }}
                      >
                        WELCOME TO THE SOLAR SOLEN{" "}
                      </h6>
                      <h1
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".5s"
                        className=""
                        style={{
                          animationDelay: "0.5s",
                          animationDuration: "2s",
                        }}
                      >
                        Powering the Future With Renewable.
                      </h1>
                      <p
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".7s"
                        className=""
                        style={{
                          animationDelay: "0.7s",
                          animationDuration: "2s",
                        }}
                      >
                        Transmds is the world’s driving worldwide coordinations
                        supplier we uphold <br /> industry and exchange the
                        worldwide trade of merchandi
                      </p>
                      <div className="hero-button">
                        <a
                          href="https://reenergy.baseecom.com/index.html"
                          className="theme-btn theme-color-2"
                          data-animation="slideInRight"
                          data-duration="2s"
                          data-delay=".9s"
                          style={{
                            animationDelay: "0.9s",
                            animationDuration: "2s",
                          }}
                        >
                          <span>
                            Learn More <i className="fas fa-chevron-right" />
                          </span>
                        </a>
                      </div>
                    </div>
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
      </section>
      <div className="marque-section">
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider">Solar Pane</span>
                <span className="text-slider">
                  <img
                    src={images.star}
                    alt="img"
                  />
                </span>
                <span className="text-slider">Water Heating</span>
                <span className="text-slider">
                  <img
                    src={images.star}
                    alt="img"
                  />
                </span>
                <span className="text-slider">Solar Financing</span>
                <span className="text-slider">
                  <img
                    src={images.star}
                    alt="img"
                  />
                </span>
                <span className="text-slider">Hydro Power</span>
                <span className="text-slider">
                  <img
                    src={images.star}
                    alt="img"
                  />
                </span>
                <span className="text-slider">Solar Energy</span>
                <span className="text-slider">
                  <img
                    src={images.star}
                    alt="img"
                  />
                </span>
                <span className="text-slider">Solar Pane</span>
                <span className="text-slider">
                  <img
                    src={images.star}
                    alt="img"
                  />
                </span>
                <span className="text-slider">Water Heating</span>
                <span className="text-slider">
                  <img
                    src={images.star}
                    alt="img"
                  />
                </span>
                <span className="text-slider">Solar Financing</span>
                <span className="text-slider">
                  <img
                    src={images.star}
                    alt="img"
                  />
                </span>
                <span className="text-slider">Hydro Power</span>
                <span className="text-slider">
                  <img
                    src={images.star}
                    alt="img"
                  />
                </span>
                <span className="text-slider">Solar Energy</span>
                <span className="text-slider">
                  <img
                    src={images.star}
                    alt="img"
                  />
                </span>
                <span className="text-slider">Solar Pane</span>
                <span className="text-slider">
                  <img
                    src={images.star}
                    alt="img"
                  />
                </span>
                <span className="text-slider">Water Heating</span>
                <span className="text-slider">
                  <img
                    src={images.star}
                    alt="img"
                  />
                </span>
                <span className="text-slider">Solar Financing</span>
                <span className="text-slider">
                  <img
                    src={images.star}
                    alt="img"
                  />
                </span>
                <span className="text-slider">Hydro Power</span>
                <span className="text-slider">
                  <img
                    src={images.star}
                    alt="img"
                  />
                </span>
                <span className="text-slider">Solar Energy</span>
                <span className="text-slider">
                  <img
                    src={images.star}
                    alt="img"
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* About Section Start */}
      <section className="about-section section-padding fix">
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <div className="counter-shape float-bob-y">
                    <div className="icon">
                      <img
                        src={images.icon1}
                        alt="icon-img"
                      />
                    </div>
                    <div className="content">
                      <h3>
                        <span className="count">6,561</span>+
                      </h3>
                    </div>
                  </div>
                  <div className="video-box">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-buttton video-popup"
                    >
                      <i className="fa-solid fa-play" />
                      <img
                        src={images.circleText}
                        alt="text-img"
                        className="text-circle"
                      />
                    </a>
                  </div>
                  <div
                    className="about-image-1 bg-cover wow fadeInLeft"
                    data-wow-delay=".3s"
                    style={{
                      backgroundImage: 'url("assets/img/about/01.jpg")',
                      visibility: "hidden",
                      animationDelay: "0.3s",
                      animationName: "none",
                    }}
                  >
                    <div
                      className="about-image-2 wow fadeInUp"
                      data-wow-delay=".5s"
                      style={{
                        visibility: "hidden",
                        animationDelay: "0.5s",
                        animationName: "none",
                      }}
                    >
                      <img
                        src={images.about02}
                        alt="about-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="about-content">
                  <div className="section-title">
                    <span
                      className="wow fadeInUp"
                      style={{ visibility: "hidden", animationName: "none" }}
                    >
                      About Us
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
                      About Green Energy Solar <br /> &amp; energy
                    </h2>
                  </div>
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{
                      visibility: "hidden",
                      animationDelay: "0.5s",
                      animationName: "none",
                    }}
                  >
                    Solar companies can offer solar panels, inverters,
                    batteries, and other related services to help individuals
                    businesses transition to energy sources businesses
                    transition to energy sources and sustainable energy
                    alternative.
                  </p>
                  <div className="about-icon-items">
                    <div
                      className="icon-items wow fadeInUp"
                      data-wow-delay=".7s"
                      style={{
                        visibility: "hidden",
                        animationDelay: "0.7s",
                        animationName: "none",
                      }}
                    >
                      <div className="icon">
                        <img
                          src={images.icon2}
                          alt="icon-img"
                        />
                      </div>
                      <div className="content">
                        <h4>Solar Power</h4>
                        <p>
                          Lorem ipsum dolor sit amet cut co sect. Proin viverra
                        </p>
                      </div>
                    </div>
                    <div
                      className="icon-items wow fadeInUp"
                      data-wow-delay=".9s"
                      style={{
                        visibility: "hidden",
                        animationDelay: "0.9s",
                        animationName: "none",
                      }}
                    >
                      <div className="icon">
                        <img
                          src={images.icon3}
                          alt="icon-img"
                        />
                      </div>
                      <div className="content">
                        <h4>BrightSun Support</h4>
                        <p>
                          Lorem ipsum dolor sit amet cut co sect. Proin viverra
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="about-author">
                    <div
                      className="about-button wow fadeInUp"
                      data-wow-delay=".5s"
                      style={{
                        visibility: "hidden",
                        animationDelay: "0.5s",
                        animationName: "none",
                      }}
                    >
                      <a
                        href="https://reenergy.baseecom.com/about.html"
                        className="theme-btn"
                      >
                        Explore More
                        <i className="fa-solid fa-arrow-right-long" />
                      </a>
                    </div>
                    <div
                      className="author-image wow fadeInUp"
                      data-wow-delay=".7s"
                      style={{
                        visibility: "hidden",
                        animationDelay: "0.7s",
                        animationName: "none",
                      }}
                    >
                      <img
                        src={images.author}
                        alt="author-img"
                      />
                      <div className="content">
                        <h6>Ronald Richards</h6>
                        <p>Co, Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Brand Section Start */}
      <div className="brand-section fix section-padding pt-0">
        <div className="container">
          <div className="brand-wrapper">
            <h6
              className="text-center wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "hidden",
                animationDelay: "0.3s",
                animationName: "none",
              }}
            >
              1k + Brands Trust Us
            </h6>
            <div className="swiper brand-slider swiper-initialized swiper-horizontal swiper-pointer-events">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-afd795abe7fb5101b"
                aria-live="off"
                style={{
                  transitionDuration: "1300ms",
                  transform: "translate3d(-2112px, 0px, 0px)",
                }}
              >
                <div
                  className="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index={0}
                  role="group"
                  aria-label="1 / 5"
                  style={{ width: 234, marginRight: 30 }}
                >
                  <div className="brand-image">
                    <img
                      src={images.brand}
                      alt="brand-img"
                    />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index={1}
                  role="group"
                  aria-label="2 / 5"
                  style={{ width: 234, marginRight: 30 }}
                >
                  <div className="brand-image">
                    <img
                      src={images.brand}
                      alt="brand-img"
                    />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index={2}
                  role="group"
                  aria-label="3 / 5"
                  style={{ width: 234, marginRight: 30 }}
                >
                  <div className="brand-image">
                    <img
                      src={images.brand}
                      alt="brand-img"
                    />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index={3}
                  role="group"
                  aria-label="4 / 5"
                  style={{ width: 234, marginRight: 30 }}
                >
                  <div className="brand-image">
                    <img
                      src={images.brand}
                      alt="brand-img"
                    />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                  data-swiper-slide-index={4}
                  role="group"
                  aria-label="5 / 5"
                  style={{ width: 234, marginRight: 30 }}
                >
                  <div className="brand-image">
                    <img
                      src={images.brand}
                      alt="brand-img"
                    />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate-active"
                  data-swiper-slide-index={0}
                  role="group"
                  aria-label="1 / 5"
                  style={{ width: 234, marginRight: 30 }}
                >
                  <div className="brand-image">
                    <img
                      src={images.brand}
                      alt="brand-img"
                    />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate-next"
                  data-swiper-slide-index={1}
                  role="group"
                  aria-label="2 / 5"
                  style={{ width: 234, marginRight: 30 }}
                >
                  <div className="brand-image">
                    <img
                      src={images.brand}
                      alt="brand-img"
                    />
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  data-swiper-slide-index={2}
                  role="group"
                  aria-label="3 / 5"
                  style={{ width: 234, marginRight: 30 }}
                >
                  <div className="brand-image">
                    <img
                      src={images.brand}
                      alt="brand-img"
                    />
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  data-swiper-slide-index={3}
                  role="group"
                  aria-label="4 / 5"
                  style={{ width: 234, marginRight: 30 }}
                >
                  <div className="brand-image">
                    <img
                      src={images.brand}
                      alt="brand-img"
                    />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-prev"
                  data-swiper-slide-index={4}
                  role="group"
                  aria-label="5 / 5"
                  style={{ width: 234, marginRight: 30 }}
                >
                  <div className="brand-image">
                    <img
                      src={images.brand}
                      alt="brand-img"
                    />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-active"
                  data-swiper-slide-index={0}
                  role="group"
                  aria-label="1 / 5"
                  style={{ width: 234, marginRight: 30 }}
                >
                  <div className="brand-image">
                    <img
                      src={images.brand}
                      alt="brand-img"
                    />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-next"
                  data-swiper-slide-index={1}
                  role="group"
                  aria-label="2 / 5"
                  style={{ width: 234, marginRight: 30 }}
                >
                  <div className="brand-image">
                    <img
                      src={images.brand}
                      alt="brand-img"
                    />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index={2}
                  role="group"
                  aria-label="3 / 5"
                  style={{ width: 234, marginRight: 30 }}
                >
                  <div className="brand-image">
                    <img
                      src={images.brand}
                      alt="brand-img"
                    />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index={3}
                  role="group"
                  aria-label="4 / 5"
                  style={{ width: 234, marginRight: 30 }}
                >
                  <div className="brand-image">
                    <img
                      src={images.brand}
                      alt="brand-img"
                    />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                  data-swiper-slide-index={4}
                  role="group"
                  aria-label="5 / 5"
                  style={{ width: 234, marginRight: 30 }}
                >
                  <div className="brand-image">
                    <img
                      src={images.brand}
                      alt="brand-img"
                    />
                  </div>
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Service Section Start */}
      <section
        className="service-section fix section-padding bg-cover"
        style={{
          backgroundImage: 'url("assets/img/service/service-bg.jpg")',
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
                      <img
                        src={images.sIcon1}
                        alt="icon-img"
                      />
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
                      <img
                        src={images.sIcon2}
                        alt="icon-img"
                      />
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
                      <img
                        src={images.sIcon3}
                        alt="icon-img"
                      />
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
                      <img
                        src={images.sIcon4}
                        alt="icon-img"
                      />
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
                      <img
                        src={images.sIcon1}
                        alt="icon-img"
                      />
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
                      <img
                        src={images.sIcon2}
                        alt="icon-img"
                      />
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
                      <img
                        src={images.sIcon3}
                        alt="icon-img"
                      />
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
                      <img
                        src={images.sIcon4}
                        alt="icon-img"
                      />
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
                      <img
                        src={images.sIcon1}
                        alt="icon-img"
                      />
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
                      <img
                        src={images.sIcon2}
                        alt="icon-img"
                      />
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
                      <img
                        src={images.sIcon3}
                        alt="icon-img"
                      />
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
                      <img
                        src={images.sIcon4}
                        alt="icon-img"
                      />
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
                  <img
                    src={images.counter01}
                    alt="icon-img"
                  />
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
                  <img
                    src={images.counter02}
                    alt="icon-img"
                  />
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
                  <img
                    src={images.counter03}
                    alt="icon-img"
                  />
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
                  <img
                    src={images.counter04}
                    alt="icon-img"
                  />
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
                  <img
                    src={images.project01}
                    alt="project-img"
                  />
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
                  <img
                    src={images.project02}
                    alt="project-img"
                  />
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
                  <img
                    src={images.project03}
                    alt="project-img"
                  />
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
                  <img
                    src={images.project04}
                    alt="project-img"
                  />
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
                  <img
                    src={images.project01}
                    alt="project-img"
                  />
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
                  <img
                    src={images.project02}
                    alt="project-img"
                  />
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
                  <img
                    src={images.project03}
                    alt="project-img"
                  />
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
                  <img
                    src={images.project04}
                    alt="project-img"
                  />
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
                  <img
                    src={images.project01}
                    alt="project-img"
                  />
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
                  <img
                    src={images.project02}
                    alt="project-img"
                  />
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
                  <img
                    src={images.project03}
                    alt="project-img"
                  />
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
                  <img
                    src={images.project04}
                    alt="project-img"
                  />
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
                    <img
                      src={images.asterisk}
                      alt="img"
                    />
                  </span>
                  <span className="text-slider text-style">Solar Power</span>
                  <span className="text-slider">
                    <img
                      src={images.asterisk}
                      alt="img"
                    />
                  </span>
                  <span className="text-slider text-style">Solar Pane</span>
                  <span className="text-slider">
                    <img
                      src={images.asterisk}
                      alt="img"
                    />
                  </span>
                  <span className="text-slider text-style">Solar Energy</span>
                  <span className="text-slider">
                    <img
                      src={images.asterisk}
                      alt="img"
                    />
                  </span>
                  <span className="text-slider text-style">Solar Power</span>
                  <span className="text-slider">
                    <img
                      src={images.asterisk}
                      alt="img"
                    />
                  </span>
                  <span className="text-slider text-style">Solar Power</span>
                  <span className="text-slider">
                    <img
                      src={images.asterisk}
                      alt="img"
                    />
                  </span>
                  <span className="text-slider text-style">Solar Pane</span>
                  <span className="text-slider">
                    <img
                      src={images.asterisk}
                      alt="img"
                    />
                  </span>
                  <span className="text-slider text-style">Solar Energy</span>
                  <span className="text-slider">
                    <img
                      src={images.asterisk}
                      alt="img"
                    />
                  </span>
                  <span className="text-slider text-style">Solar Power</span>
                  <span className="text-slider">
                    <img
                      src={images.asterisk}
                      alt="img"
                    />
                  </span>
                  <span className="text-slider text-style">Solar Power</span>
                  <span className="text-slider">
                    <img
                      src={images.asterisk}
                      alt="img"
                    />
                  </span>
                  <span className="text-slider text-style">Solar Pane</span>
                  <span className="text-slider">
                    <img
                      src={images.asterisk}
                      alt="img"
                    />
                  </span>
                  <span className="text-slider text-style">Solar Energy</span>
                  <span className="text-slider">
                    <img
                      src={images.asterisk}
                      alt="img"
                    />
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
      {/*<< Footer Section Start >>*/}
      <footer className="footer-section footer-bg">
        <div className="container">
          <div className="contact-info-area">
            <div
              className="contact-info-items wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "hidden",
                animationDelay: "0.3s",
                animationName: "none",
              }}
            >
              <div className="icon">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.7891 1.81641H16.7578C13.3658 1.81641 10.6055 4.5767 10.6055 7.96875C10.6055 11.063 12.9015 13.631 15.8789 14.0585V16.7578C15.8788 16.9317 15.9303 17.1016 16.0268 17.2462C16.1234 17.3907 16.2607 17.5033 16.4214 17.5697C16.7456 17.705 17.1258 17.6325 17.3793 17.3792L20.6374 14.1211H23.7891C27.1811 14.1211 30 11.3608 30 7.96875C30 4.5767 27.1811 1.81641 23.7891 1.81641ZM16.7578 8.84754C16.2723 8.84754 15.8789 8.45402 15.8789 7.96863C15.8789 7.48324 16.2723 7.08973 16.7578 7.08973C17.2432 7.08973 17.6367 7.48324 17.6367 7.96863C17.6367 8.45402 17.2432 8.84754 16.7578 8.84754ZM20.2734 8.84754C19.7879 8.84754 19.3945 8.45402 19.3945 7.96863C19.3945 7.48324 19.7879 7.08973 20.2734 7.08973C20.7588 7.08973 21.1523 7.48324 21.1523 7.96863C21.1523 8.45402 20.7588 8.84754 20.2734 8.84754ZM23.7891 8.84754C23.3036 8.84754 22.9102 8.45402 22.9102 7.96863C22.9102 7.48324 23.3036 7.08973 23.7891 7.08973C24.2745 7.08973 24.668 7.48324 24.668 7.96863C24.668 8.45402 24.2745 8.84754 23.7891 8.84754Z"
                    fill="#4AAB3D"
                  />
                  <path
                    d="M19.7461 28.1836C21.2 28.1836 22.3828 27.0008 22.3828 25.5469V22.0312C22.3828 21.6527 22.1408 21.3171 21.782 21.1978L16.5209 19.44C16.2634 19.3533 15.9819 19.3928 15.7553 19.5421L13.5186 21.033C11.1496 19.9035 8.33871 17.0925 7.20914 14.7236L8.7 12.4868C8.77415 12.3754 8.82189 12.2485 8.83958 12.1158C8.85728 11.9831 8.84447 11.8482 8.80213 11.7212L7.04432 6.46014C6.98611 6.28516 6.87428 6.13295 6.72469 6.02512C6.5751 5.91728 6.39534 5.85929 6.21094 5.85938H2.63672C1.18277 5.85938 0 7.02979 0 8.48373C0 18.61 9.6198 28.1836 19.7461 28.1836Z"
                    fill="#4AAB3D"
                  />
                </svg>
              </div>
              <div className="content">
                <p>Call Us 7/24</p>
                <h3>
                  <a href="tel:+2085550112">+208-555-0112</a>
                </h3>
              </div>
            </div>
            <div
              className="contact-info-items wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                visibility: "hidden",
                animationDelay: "0.5s",
                animationName: "none",
              }}
            >
              <div className="icon">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6498 10.8272C12.8023 10.914 12.976 10.9569 13.1514 10.9509C13.3312 10.9344 13.5053 10.8798 13.6623 10.7906L24.9217 4.22062C24.677 3.79416 24.3245 3.43955 23.8994 3.19239C23.4744 2.94523 22.9918 2.81422 22.5001 2.8125H3.75014C3.2583 2.81406 2.77554 2.94499 2.35032 3.19216C1.9251 3.43932 1.5724 3.79402 1.32764 4.22062L12.6498 10.8272Z"
                    fill="#4AAB3D"
                  />
                  <path
                    d="M25.3125 6.15918V12.6748C24.4104 12.3501 23.4587 12.1852 22.5 12.1873C20.2633 12.1908 18.1192 13.0808 16.5376 14.6624C14.956 16.244 14.066 18.3881 14.0625 20.6248C14.0623 20.9382 14.0811 21.2512 14.1188 21.5623H3.75C3.00476 21.5601 2.29069 21.263 1.76372 20.7361C1.23676 20.2091 0.939726 19.495 0.9375 18.7498V6.15918L11.7094 12.4498C12.1434 12.6872 12.6303 12.8116 13.125 12.8116C13.6197 12.8116 14.1066 12.6872 14.5406 12.4498L25.3125 6.15918Z"
                    fill="#4AAB3D"
                  />
                  <path
                    d="M22.5 14.0625C20.7595 14.0625 19.0903 14.7539 17.8596 15.9846C16.6289 17.2153 15.9375 18.8845 15.9375 20.625C15.9375 22.3655 16.6289 24.0347 17.8596 25.2654C19.0903 26.4961 20.7595 27.1875 22.5 27.1875C22.7486 27.1875 22.9871 27.0887 23.1629 26.9129C23.3387 26.7371 23.4375 26.4986 23.4375 26.25C23.4375 26.0014 23.3387 25.7629 23.1629 25.5871C22.9871 25.4113 22.7486 25.3125 22.5 25.3125C21.5729 25.3125 20.6666 25.0376 19.8958 24.5225C19.1249 24.0074 18.5241 23.2754 18.1693 22.4188C17.8145 21.5623 17.7217 20.6198 17.9026 19.7105C18.0834 18.8012 18.5299 17.966 19.1854 17.3104C19.841 16.6549 20.6762 16.2084 21.5855 16.0276C22.4948 15.8467 23.4373 15.9395 24.2938 16.2943C25.1504 16.6491 25.8824 17.2499 26.3975 18.0208C26.9126 18.7916 27.1875 19.6979 27.1875 20.625V21.5625C27.1875 21.8111 27.0887 22.0496 26.9129 22.2254C26.7371 22.4012 26.4986 22.5 26.25 22.5C26.0014 22.5 25.7629 22.4012 25.5871 22.2254C25.4113 22.0496 25.3125 21.8111 25.3125 21.5625V20.625C25.3125 20.0687 25.1476 19.525 24.8385 19.0625C24.5295 18.5999 24.0902 18.2395 23.5763 18.0266C23.0624 17.8137 22.4969 17.758 21.9513 17.8665C21.4057 17.9751 20.9046 18.2429 20.5113 18.6363C20.1179 19.0296 19.8501 19.5307 19.7415 20.0763C19.633 20.6219 19.6887 21.1874 19.9016 21.7013C20.1145 22.2152 20.4749 22.6545 20.9375 22.9635C21.4 23.2726 21.9437 23.4375 22.5 23.4375C22.9843 23.4344 23.4594 23.3048 23.8781 23.0616C24.2022 23.578 24.6856 23.9748 25.2552 24.1921C25.8248 24.4094 26.4496 24.4353 27.0353 24.266C27.621 24.0967 28.1356 23.7412 28.5013 23.2535C28.867 22.7657 29.064 22.1721 29.0625 21.5625V20.625C29.0605 18.8851 28.3685 17.2171 27.1382 15.9868C25.9079 14.7565 24.2399 14.0645 22.5 14.0625ZM22.5 21.5625C22.3146 21.5625 22.1333 21.5075 21.9792 21.4045C21.825 21.3015 21.7048 21.1551 21.6339 20.9838C21.5629 20.8125 21.5443 20.624 21.5805 20.4421C21.6167 20.2602 21.706 20.0932 21.8371 19.9621C21.9682 19.831 22.1352 19.7417 22.3171 19.7055C22.499 19.6693 22.6875 19.6879 22.8588 19.7589C23.0301 19.8298 23.1765 19.95 23.2795 20.1042C23.3825 20.2583 23.4375 20.4396 23.4375 20.625C23.4375 20.8736 23.3387 21.1121 23.1629 21.2879C22.9871 21.4637 22.7486 21.5625 22.5 21.5625Z"
                    fill="#4AAB3D"
                  />
                </svg>
              </div>
              <div className="content">
                <p>Make a Quote</p>
                <h3>
                  <a href="mailto:infotech@gmail.com">Solar@gmail.com</a>
                </h3>
              </div>
            </div>
            <div
              className="contact-info-items wow fadeInUp"
              data-wow-delay=".7s"
              style={{
                visibility: "hidden",
                animationDelay: "0.7s",
                animationName: "none",
              }}
            >
              <div className="icon">
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 1.6665C11.036 1.6665 7 5.7385 7 10.7612C7 12.4625 7.74933 14.5732 8.84 16.6785C11.2413 21.3145 15.2413 25.9838 15.2413 25.9838C15.3352 26.0932 15.4516 26.1809 15.5826 26.2411C15.7135 26.3012 15.8559 26.3324 16 26.3324C16.1441 26.3324 16.2865 26.3012 16.4174 26.2411C16.5484 26.1809 16.6648 26.0932 16.7587 25.9838C16.7587 25.9838 20.7587 21.3145 23.16 16.6785C24.2507 14.5732 25 12.4625 25 10.7612C25 5.7385 20.964 1.6665 16 1.6665ZM16 6.99984C15.0447 7.0256 14.1371 7.42322 13.4705 8.10804C12.8039 8.79286 12.4309 9.71081 12.4309 10.6665C12.4309 11.6222 12.8039 12.5401 13.4705 13.225C14.1371 13.9098 15.0447 14.3074 16 14.3332C16.9553 14.3074 17.8629 13.9098 18.5295 13.225C19.1961 12.5401 19.5691 11.6222 19.5691 10.6665C19.5691 9.71081 19.1961 8.79286 18.5295 8.10804C17.8629 7.42322 16.9553 7.0256 16 6.99984Z"
                    fill="#4AAB3D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.3788 23.1693C23.4628 23.4946 24.3562 23.8973 24.9735 24.3693C25.3735 24.6733 25.6668 24.9706 25.6668 25.3333C25.6668 25.5466 25.5455 25.74 25.3748 25.9333C25.0922 26.252 24.6722 26.5386 24.1522 26.8053C22.3148 27.7453 19.3442 28.3333 16.0002 28.3333C12.6562 28.3333 9.6855 27.7453 7.84816 26.8053C7.32816 26.5386 6.90816 26.252 6.6255 25.9333C6.45483 25.74 6.3335 25.5466 6.3335 25.3333C6.3335 24.9706 6.62683 24.6733 7.02683 24.3693C7.64416 23.8973 8.5375 23.4946 9.6215 23.1693C9.87557 23.0929 10.0889 22.9187 10.2146 22.6851C10.3402 22.4514 10.3679 22.1774 10.2915 21.9233C10.2151 21.6692 10.0409 21.4559 9.80726 21.3302C9.57359 21.2046 9.29957 21.1769 9.0455 21.2533C7.39483 21.7506 6.11216 22.432 5.3415 23.1853C4.66416 23.8453 4.3335 24.584 4.3335 25.3333C4.3335 26.2693 4.86283 27.2026 5.93883 27.9813C7.82683 29.3466 11.6188 30.3333 16.0002 30.3333C20.3815 30.3333 24.1735 29.3466 26.0615 27.9813C27.1375 27.2026 27.6668 26.2693 27.6668 25.3333C27.6668 24.584 27.3362 23.8453 26.6588 23.1853C25.8882 22.432 24.6055 21.7506 22.9548 21.2533C22.829 21.2155 22.697 21.2028 22.5663 21.216C22.4356 21.2292 22.3088 21.268 22.1931 21.3302C22.0774 21.3925 21.9751 21.4769 21.892 21.5786C21.8089 21.6804 21.7467 21.7975 21.7088 21.9233C21.671 22.0491 21.6583 22.1811 21.6715 22.3118C21.6847 22.4425 21.7236 22.5694 21.7858 22.6851C21.848 22.8008 21.9324 22.9031 22.0341 22.9862C22.1359 23.0692 22.253 23.1315 22.3788 23.1693Z"
                    fill="#4AAB3D"
                  />
                </svg>
              </div>
              <div className="content">
                <p>Location</p>
                <h3>4517 Washington ave.</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-widgets-wrapper">
          <div className="shape-1">
            <img
              src="./ReEnergy - Solar and Renewable Energy HTML Template_files/footer-shape-1.png"
              alt="shape-img"
            />
          </div>
          <div className="container">
            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  visibility: "hidden",
                  animationDelay: "0.3s",
                  animationName: "none",
                }}
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <a href="https://reenergy.baseecom.com/index.html">
                      <img
                        src={images.whiteLogo}
                        alt="logo-img"
                      />
                    </a>
                  </div>
                  <div className="footer-content">
                    <p>
                      Phasellus ultricies aliquam volutpat ullamcorper laoreet
                      neque, a lacinia curabitur lacinia mollis
                    </p>
                    <div className="social-icon d-flex align-items-center">
                      <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                      <a href="https://reenergy.baseecom.com/?storefront=envato-elements#">
                        <i className="fa-brands fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
                data-wow-delay=".5s"
                style={{
                  visibility: "hidden",
                  animationDelay: "0.5s",
                  animationName: "none",
                }}
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Quick Links</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <a href="https://reenergy.baseecom.com/about.html">
                        <i className="fa-solid fa-chevron-right" />
                        Solar About
                      </a>
                    </li>
                    <li>
                      <a href="https://reenergy.baseecom.com/service.html">
                        <i className="fa-solid fa-chevron-right" />
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a href="https://reenergy.baseecom.com/news.html">
                        <i className="fa-solid fa-chevron-right" />
                        Our Blogs
                      </a>
                    </li>
                    <li>
                      <a href="https://reenergy.baseecom.com/faq.html">
                        <i className="fa-solid fa-chevron-right" />
                        FAQ’S
                      </a>
                    </li>
                    <li>
                      <a href="https://reenergy.baseecom.com/contact.html">
                        <i className="fa-solid fa-chevron-right" />
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
                data-wow-delay=".5s"
                style={{
                  visibility: "hidden",
                  animationDelay: "0.5s",
                  animationName: "none",
                }}
              >
                <div className="single-footer-widget style-margin">
                  <div className="widget-head">
                    <h3>Services</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <a href="https://reenergy.baseecom.com/service-details.html">
                        <i className="fa-solid fa-chevron-right" />
                        Consultancy
                      </a>
                    </li>
                    <li>
                      <a href="https://reenergy.baseecom.com/service-details.html">
                        <i className="fa-solid fa-chevron-right" />
                        Solar System
                      </a>
                    </li>
                    <li>
                      <a href="https://reenergy.baseecom.com/service-details.html">
                        <i className="fa-solid fa-chevron-right" />
                        Solar Panel
                      </a>
                    </li>
                    <li>
                      <a href="https://reenergy.baseecom.com/service-details.html">
                        <i className="fa-solid fa-chevron-right" />
                        Style Guide
                      </a>
                    </li>
                    <li>
                      <a href="https://reenergy.baseecom.com/service-details.html">
                        <i className="fa-solid fa-chevron-right" />
                        License
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
                style={{
                  visibility: "hidden",
                  animationDelay: "0.7s",
                  animationName: "none",
                }}
              >
                <div className="single-footer-widget style-margin">
                  <div className="widget-head">
                    <h3>Recent Posts</h3>
                  </div>
                  <div className="recent-post-area">
                    <div className="recent-post-items">
                      <div className="thumb">
                        <img
                          src={images.pp1}
                          alt="post-img"
                        />
                      </div>
                      <div className="content">
                        <ul className="post-date">
                          <li>
                            <i className="fa-solid fa-calendar-days me-2" />
                            20 Feb, 2024
                          </li>
                        </ul>
                        <h6>
                          <a href="https://reenergy.baseecom.com/news-details.html">
                            2021 Batterman Award
                            <br /> honorsBrad Burkhart
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="recent-post-items mb-0">
                      <div className="thumb">
                        <img
                          src={images.pp2}
                          alt="post-img"
                        />
                      </div>
                      <div className="content">
                        <ul className="post-date">
                          <li>
                            <i className="fa-solid fa-calendar-days me-2" />
                            15 Dec, 2024
                          </li>
                        </ul>
                        <h6>
                          <a href="https://reenergy.baseecom.com/news-details.html">
                            2021 Batterman Award
                            <br /> honorsBrad Burkhart
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom style-2">
          <div className="container">
            <div className="footer-wrapper d-flex align-items-center justify-content-between">
              <p
                className="wow fadeInLeft color-2"
                data-wow-delay=".3s"
                style={{
                  visibility: "hidden",
                  animationDelay: "0.3s",
                  animationName: "none",
                }}
              >
                © All Copyright 2024 by{" "}
                <a href="https://reenergy.baseecom.com/index.html">ReEnergy</a>
              </p>
              <ul
                className="footer-menu wow fadeInRight"
                data-wow-delay=".5s"
                style={{
                  visibility: "hidden",
                  animationDelay: "0.5s",
                  animationName: "none",
                }}
              >
                <li>
                  <a href="https://reenergy.baseecom.com/contact.html">
                    Terms &amp; Condition
                  </a>
                </li>
                <li>
                  <a href="https://reenergy.baseecom.com/contact.html">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a
            href="https://reenergy.baseecom.com/?storefront=envato-elements#"
            id="scrollUp"
            className="scroll-icon"
          >
            <i className="far fa-arrow-up" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
