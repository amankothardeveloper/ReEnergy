import React from "react";
import images from "../../utils/imagePaths";
import aboutUsContent from "../(Data)/About.json";

const AboutSection = () => {
  const { badge, content, features, cta, author } = aboutUsContent;

  return (
    <section className="about-section section-padding fix">
      <div className="container">
        <div className="about-wrapper">
          <div className="row">
            {/* LEFT SIDE */}
            <div className="col-lg-6">
              <div className="about-image-items">
                {/* Counter Badge */}
                <div className="counter-shape float-bob-y">
                  <div className="icon">
                    <img src={images.icon1} alt="icon" />
                  </div>
                  <div className="content">
                    <h3>
                      <span className="count">{badge.number}</span>{" "}
                      {badge.label}
                    </h3>
                  </div>
                </div>

                {/* Video Button */}
                <div className="video-box">
                  <a
                    href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                    className="video-buttton video-popup"
                  >
                    <i className="fa-solid fa-play" />
                    <img
                      src={images.circleText}
                      alt="circle-text"
                      className="text-circle"
                    />
                  </a>
                </div>

                {/* Main Image */}
                <div
                  className="about-image-1 bg-cover wow fadeInLeft"
                  data-wow-delay=".3s"
                  style={{
                    backgroundImage: `url(${images.about01})`,
                  }}
                >
                  <div
                    className="about-image-2 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <img src={images.about02} alt="about" />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="about-content">
                {/* Section Title */}
                <div className="section-title">
                  <span className="wow fadeInUp">{content.tag}</span>

                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    {content.title.line1}
                    <br />
                    {content.title.line2}
                  </h2>
                </div>

                {/* Description */}
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  {content.description}
                </p>

                {/* Features */}
                <div className="about-icon-items">
                  {features.slice(0, 2).map((feature, index) => (
                    <div
                      key={feature.id}
                      className="icon-items wow fadeInUp"
                      data-wow-delay={`${0.7 + index * 0.2}s`}
                    >
                      <div className="icon">
                        <img
                          src={images[`icon${index + 2}`]}
                          alt="feature-icon"
                        />
                      </div>
                      <div className="content">
                        <h4>{feature.title}</h4>
                        {/* <p>{feature.description}</p> */}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA + Author */}
                <div className="about-author">
                  <div
                    className="about-button wow fadeInUp"
                    data-wow-delay="1s"
                  >
                    <a href={cta.url} className="theme-btn">
                      {cta.text}
                      <i className="fa-solid fa-arrow-right-long" />
                    </a>
                  </div>

                  {author && (
                    <div
                      className="author-image wow fadeInUp"
                      data-wow-delay="1.2s"
                    >
                      <img src={images.author} alt="author" />
                      <div className="content">
                        <h6>{author.name}</h6>
                        <p>{author.designation}</p>
                      </div>
                    </div>
                  )}
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
