import React from "react";
import images from "../utils/imagePaths";

const Header = () => {
  return (
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
                    <img src={images.blackLogo} alt="logo-img" />
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
                                    <img src={images.home1} alt="img" />
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
                                    <img src={images.home2} alt="img" />
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
                                    <img src={images.home3} alt="img" />
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
                                    <img src={images.home4} alt="img" />
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
  );
};

export default Header;
