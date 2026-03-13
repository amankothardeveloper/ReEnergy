import React from "react";
import images from "../../utils/imagePaths";
import servicesContent from "../(Data)/Services.json";

const Services = () => {
  const { section, services, footerText } = servicesContent;
  console.log(services);
  return (
    <section
      className="service-section fix section-padding bg-cover"
      style={{
        backgroundImage:
          'url("https://reenergy.baseecom.com/assets/img/service/service-bg.jpg")',
      }}
    >
      <div className="container">
        {/* Section Title */}
        <div className="section-title-area">
          <div className="section-title">
            <span className="wow fadeInUp">{section.tag}</span>

            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              {section.title.line1}
              <br />
              {section.title.line2}
            </h2>
          </div>

          <div className="array-button">
            <button className="array-prev">
              <i className="fal fa-arrow-right" />
            </button>
            <button className="array-next">
              <i className="fal fa-arrow-left" />
            </button>
          </div>
        </div>

        {/* Service Slider */}
        <div className="service-wrapper">
          <div className="swiper service-slider">
            <div className="swiper-wrapper">
              {services.map((service) => (
                <div key={service.id} className="swiper-slide">
                  <div className="service-box-items">
                    <div className="icon">
                      <img src={images[service.icon]} alt={service.title} />
                    </div>

                    <div className="content">
                      <h4>
                        <a href={service.url}>{service.title}</a>
                      </h4>

                      <p>{service.description}</p>

                      <a href={service.url} className="theme-btn-2 mt-3">
                        Read More
                        <i className="fa-solid fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Text */}
          <div className="service-text wow fadeInUp">
            <h6>
              {footerText.prefix}{" "}
              <a href={footerText.url}>{footerText.linkText}</a>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
