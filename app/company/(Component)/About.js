import React from "react";

const About = () => {
  return (
     <section
        className="about-section section-padding fix bg-cover"
        style={{
          backgroundImage:
            'url("https://reenergy.baseecom.com/assets/img/service/service-bg-2.jpg")',
        }}
      >
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <div className="circle-shape">
                    <img
                      src="https://reenergy.baseecom.com/assets/img/about/circle.png"
                      alt="shape-img"
                    />
                  </div>
                  <div className="counter-shape float-bob-y">
                    <div className="icon">
                      <img src="assets/img/about/icon-1.svg" alt="icon-img" />
                    </div>
                    <div className="content">
                      <h3>
                        <span className="count">25</span>Years
                      </h3>
                      <p>Of Experience</p>
                    </div>
                  </div>
                  <div
                    className="about-image-1 bg-cover wow fadeInLeft"
                    data-wow-delay=".3s"
                    style={{
                      backgroundImage:
                        'url("https://reenergy.baseecom.com/assets/img/about/03.png")',
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <div
                      className="about-image-2 wow fadeInUp"
                      data-wow-delay=".5s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.5s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <img src="assets/img/about/04.jpg" alt="about-img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="about-content">
                  <div className="section-title">
                    <span
                      className="wow fadeInUp"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInUp",
                      }}
                    >
                      About Us
                    </span>
                    <h2
                      className="wow fadeInUp"
                      data-wow-delay=".3s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "fadeInUp",
                      }}
                    >
                      Welcome To Solaren Solar Power <span>Energy System</span>
                    </h2>
                  </div>
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.5s",
                      animationName: "fadeInUp",
                    }}
                  >
                    It is a long established fact that a reader will be
                    distracted the readable <br /> content of a page when
                    looking at layout the point.
                  </p>
                  <div className="about-icon-items">
                    <div
                      className="icon-items wow fadeInUp"
                      data-wow-delay=".7s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.7s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="icon">
                        <img src="assets/img/about/icon-4.svg" alt="icon-img" />
                      </div>
                      <div className="content">
                        <h4>BrightSun Support</h4>
                        <p>Aliquam erat volutpat Nullam imperdiet</p>
                      </div>
                    </div>
                    <div
                      className="icon-items wow fadeInUp"
                      data-wow-delay=".9s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.9s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="icon">
                        <img src="assets/img/about/icon-5.svg" alt="icon-img" />
                      </div>
                      <div className="content">
                        <h4>Ronald Richards</h4>
                        <p>Ut vehiculadictumst. Maecenas ante.</p>
                      </div>
                    </div>
                  </div>
                  <div className="about-author">
                    <div
                      className="about-button wow fadeInUp"
                      data-wow-delay=".5s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.5s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <a href="about.html" className="theme-btn">
                        Explore More
                        <i className="fa-solid fa-arrow-right-long" />
                      </a>
                    </div>
                    <div
                      className="author-image wow fadeInUp"
                      data-wow-delay=".7s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.7s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <img
                        src="https://reenergy.baseecom.com/assets/img/about/author.png"
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
  );
};

export default About;
