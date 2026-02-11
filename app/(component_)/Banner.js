import React from "react";

const Banner = ({ title }) => {
  return (
    <div
      className="breadcrumb-wrapper bg-cover"
      style={{
        backgroundImage:
          'url("https://reenergy.baseecom.com/assets/img/breadcrumb.jpg")',
      }}
    >
      <div className="border-shape">
        <img
          src="https://reenergy.baseecom.com/assets/img/element.png"
          alt="shape-img"
        />
      </div>
      <div className="line-shape">
        <img
          src="https://reenergy.baseecom.com/assets/img/line-element.png"
          alt="shape-img"
        />
      </div>
      <div className="container">
        <div className="page-heading">
          <h1
            className="wow fadeInUp"
            data-wow-delay=".3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            {title}
          </h1>
          <ul
            className="breadcrumb-items wow fadeInUp"
            data-wow-delay=".5s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "fadeInUp",
            }}
          >
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <i className="fas fa-chevron-right" />
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
