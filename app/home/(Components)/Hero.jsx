import React from "react";

const Hero = () => {
  return (
    <section className="hero-section hero-1">
      <div className="array-button">
        <button className="array-prev">
          <i className="fal fa-arrow-left" />
        </button>
        <button className="array-next">
          <i className="fal fa-arrow-right" />
        </button>
      </div>
      <div className="swiper hero-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div
              className="hero-image bg-cover"
              style={{
                backgroundImage:
                  'url("https://reenergy.baseecom.com/assets/img/hero/hero-2.jpg")',
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
                    >
                      WELCOME TO THE SOLAR SOLEN{" "}
                    </h6>
                    <h1
                      data-animation="slideInRight"
                      data-duration="2s"
                      data-delay=".5s"
                    >
                      Powering the Future With Renewable.
                    </h1>
                    <p
                      data-animation="slideInRight"
                      data-duration="2s"
                      data-delay=".7s"
                    >
                      Transmds is the world’s driving worldwide coordinations
                      supplier we uphold <br /> industry and exchange the
                      worldwide trade of merchandi
                    </p>
                    <div className="hero-button">
                      <a
                        href="index.html"
                        className="theme-btn theme-color-2"
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".9s"
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
          <div className="swiper-slide">
            <div
              className="hero-image bg-cover"
              style={{
                backgroundImage:
                  'url("https://reenergy.baseecom.com/assets/img/hero/hero-4.jpg")',
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
                    >
                      {" "}
                      WELCOME TO THE SOLAR SOLEN{" "}
                    </h6>
                    <h1
                      data-animation="slideInRight"
                      data-duration="2s"
                      data-delay=".5s"
                    >
                      Powering the Future With Renewable.
                    </h1>
                    <p
                      data-animation="slideInRight"
                      data-duration="2s"
                      data-delay=".7s"
                    >
                      Transmds is the world’s driving worldwide coordinations
                      supplier we uphold <br /> industry and exchange the
                      worldwide trade of merchandi
                    </p>
                    <div className="hero-button">
                      <a
                        href="index.html"
                        className="theme-btn theme-color-2"
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".9s"
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
      </div>
    </section>
  );
};

export default Hero;
