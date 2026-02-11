"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Clients = () => {
  return (
    <div className="brand-section fix section-padding pt-0">
      <div className="container">
        <div className="brand-wrapper">
          <h6
            className="text-center wow fadeInUp"
            data-wow-delay=".3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            1k + Brands Trust Us
          </h6>
          <div className="brand-slider">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              loop={true}
              centeredSlides={true}
              autoplay={{ delay: 2200, disableOnInteraction: false }}
              slidesPerView={4}
              breakpoints={{
                320: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
              }}
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <SwiperSlide key={i}>
                  <div className="brand-image">
                    <img src="/Images/brand.png" alt={`brand-${i}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
