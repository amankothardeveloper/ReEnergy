import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  const swiperRef = useRef(null);

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="hero-section hero-1">
      <div className="array-button">
        <button className="array-prev" onClick={handlePrevSlide}>
          <i className="fal fa-arrow-left" />
        </button>
        <button className="array-next" onClick={handleNextSlide}>
          <i className="fal fa-arrow-right" />
        </button>
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        className="hero-slider"
      >
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
