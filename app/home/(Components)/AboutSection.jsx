import React from "react";
import images from "../../utils/imagePaths";

const AboutSection = () => {
  return (
    <section className="about-section section-padding fix">
      <div className="container">
        <div className="about-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-image-items">
                <div className="counter-shape float-bob-y">
                  <div className="icon">
                    <img src={images.icon1} alt="icon-img" />
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
                    <img src={images.about02} alt="about-img" />
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
                  Solar companies can offer solar panels, inverters, batteries,
                  and other related services to help individuals businesses
                  transition to energy sources businesses transition to energy
                  sources and sustainable energy alternative.
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
                      <img src={images.icon2} alt="icon-img" />
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
                      <img src={images.icon3} alt="icon-img" />
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
                    <img src={images.author} alt="author-img" />
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

export default AboutSection;
