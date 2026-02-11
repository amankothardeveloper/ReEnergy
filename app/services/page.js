import Link from "next/link";
import React from "react";


const toSlug = (str) => {
  return str.toLowerCase().split(" ").join("-");
}
const services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Weed Extraction",
      description: "Mauris ultrices ligula eget volutpat aliquet nullam",
      icon: "https://reenergy.baseecom.com/assets/img/service/icon/s-icon-1.svg",
      delay: ".3s",
      isActive: false
    },
    {
      id: 2,
      title: "Pristine Garden",
      description: "Mauris ultrices ligula eget volutpat aliquet nullam",
      icon: "https://reenergy.baseecom.com/assets/img/service/icon/s-icon-2.svg",
      delay: ".5s",
      isActive: true
    },
    {
      id: 3,
      title: "Garden Renewal",
      description: "Mauris ultrices ligula eget volutpat aliquet nullam",
      icon: "https://reenergy.baseecom.com/assets/img/service/icon/s-icon-3.svg",
      delay: ".7s",
      isActive: false
    },
    {
      id: 4,
      title: "SolarEdge Services",
      description: "Mauris ultrices ligula eget volutpat aliquet nullam",
      icon: "https://reenergy.baseecom.com/assets/img/service/icon/s-icon-4.svg",
      delay: ".9s",
      isActive: false
    },
    {
      id: 5,
      title: "solar repair",
      description: "Mauris ultrices ligula eget volutpat aliquet nullam",
      icon: "https://reenergy.baseecom.com/assets/img/service/icon/s-icon-10.svg",
      delay: ".3s",
      isActive: false
    },
    {
      id: 6,
      title: "power storage",
      description: "Mauris ultrices ligula eget volutpat aliquet nullam",
      icon: "https://reenergy.baseecom.com/assets/img/service/icon/s-icon-11.svg",
      delay: ".5s",
      isActive: false
    },
    {
      id: 7,
      title: "solar energy",
      description: "Mauris ultrices ligula eget volutpat aliquet nullam",
      icon: "https://reenergy.baseecom.com/assets/img/service/icon/s-icon-1.svg",
      delay: ".7s",
      isActive: false
    },
    {
      id: 8,
      title: "SolarEdge Services",
      description: "Mauris ultrices ligula eget volutpat aliquet nullam",
      icon: "https://reenergy.baseecom.com/assets/img/service/icon/s-icon-2.svg",
      delay: ".9s",
      isActive: false
    }
  ];
 
  return (
    <section className="service-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span
            className="wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            Services We Offer
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
            Provide Comprehensive Ecological
            <br /> Service
          </h2>
        </div>
        <div className="service-wrapper mb-0">
          <div className="row">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={service.delay}
                style={{
                  visibility: "visible",
                  animationDelay: service.delay.replace('.', '0.'),
                  animationName: "fadeInUp",
                }}
              >
                <div className={`service-box-items box-shadow ${service.isActive ? 'active' : ''}`}>
                  <div className="icon">
                    <img
                      src={service.icon}
                      alt="icon-img"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href={`/services/${toSlug(service.title)}`}>{service.title}</Link>
                    </h4>
                    <p>{service.description}</p>
                    <Link href={`/services/${toSlug(service.title)}`} className="theme-btn-2 mt-3">
                      read More
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default services;
