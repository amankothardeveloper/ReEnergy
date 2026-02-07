import React from "react";
import images from "../../utils/imagePaths";

const BrandSection = () => {
  return (
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
                  <img src={images.brand} alt="brand-img" />
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
                  <img src={images.brand} alt="brand-img" />
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
                  <img src={images.brand} alt="brand-img" />
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
                  <img src={images.brand} alt="brand-img" />
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
                  <img src={images.brand} alt="brand-img" />
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
                  <img src={images.brand} alt="brand-img" />
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
                  <img src={images.brand} alt="brand-img" />
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
                  <img src={images.brand} alt="brand-img" />
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
                  <img src={images.brand} alt="brand-img" />
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
                  <img src={images.brand} alt="brand-img" />
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
                  <img src={images.brand} alt="brand-img" />
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
                  <img src={images.brand} alt="brand-img" />
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
                  <img src={images.brand} alt="brand-img" />
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
                  <img src={images.brand} alt="brand-img" />
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
                  <img src={images.brand} alt="brand-img" />
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
  );
};

export default BrandSection;
