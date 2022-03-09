import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brand = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
  };
  return (
    <div className="brand-area pt-100">
      <div className="container">
        <div className="brand-slider owl-carousel owl-theme owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <Slider {...settings}
              className="owl-stage"
              style={{
                transform: "translate3d(-1814px, 0px, 0px)",
                transition: "all 0.25s ease 0s",
                width: 4148,
              }}
            >
              <div className="owl-item cloned" style={{ width: "259.2px" }}>
                <div className="brand-item">
                  <img
                    src="assets/images/brand-logo/brand-logo2.png"
                    alt="Images"
                  />
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: "259.2px" }}>
                <div className="brand-item">
                  <img
                    src="assets/images/brand-logo/brand-logo3.png"
                    alt="Images"
                  />
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: "259.2px" }}>
                <div className="brand-item">
                  <img
                    src="assets/images/brand-logo/brand-logo4.png"
                    alt="Images"
                  />
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: "259.2px" }}>
                <div className="brand-item">
                  <img
                    src="assets/images/brand-logo/brand-logo5.png"
                    alt="Images"
                  />
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: "259.2px" }}>
                <div className="brand-item">
                  <img
                    src="assets/images/brand-logo/brand-logo2.png"
                    alt="Images"
                  />
                </div>
              </div>
              <div className="owl-item" style={{ width: "259.2px" }}>
                <div className="brand-item">
                  <img
                    src="assets/images/brand-logo/brand-logo1.png"
                    alt="Images"
                  />
                </div>
              </div>
              <div className="owl-item" style={{ width: "259.2px" }}>
                <div className="brand-item">
                  <img
                    src="assets/images/brand-logo/brand-logo2.png"
                    alt="Images"
                  />
                </div>
              </div>
              <div className="owl-item active" style={{ width: "259.2px" }}>
                <div className="brand-item">
                  <img
                    src="assets/images/brand-logo/brand-logo3.png"
                    alt="Images"
                  />
                </div>
              </div>
              <div className="owl-item active" style={{ width: "259.2px" }}>
                <div className="brand-item">
                  <img
                    src="assets/images/brand-logo/brand-logo4.png"
                    alt="Images"
                  />
                </div>
              </div>
              <div className="owl-item active" style={{ width: "259.2px" }}>
                <div className="brand-item">
                  <img
                    src="assets/images/brand-logo/brand-logo5.png"
                    alt="Images"
                  />
                </div>
              </div>
              <div className="owl-item active" style={{ width: "259.2px" }}>
                <div className="brand-item">
                  <img
                    src="assets/images/brand-logo/brand-logo2.png"
                    alt="Images"
                  />
                </div>
              </div>
              <div
                className="owl-item cloned active"
                style={{ width: "259.2px" }}
              >
                <div className="brand-item">
                  <img
                    src="assets/images/brand-logo/brand-logo1.png"
                    alt="Images"
                  />
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: "259.2px" }}>
                <div className="brand-item">
                  <img
                    src="assets/images/brand-logo/brand-logo2.png"
                    alt="Images"
                  />
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: "259.2px" }}>
                <div className="brand-item">
                  <img
                    src="assets/images/brand-logo/brand-logo3.png"
                    alt="Images"
                  />
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: "259.2px" }}>
                <div className="brand-item">
                  <img
                    src="assets/images/brand-logo/brand-logo4.png"
                    alt="Images"
                  />
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: "259.2px" }}>
                <div className="brand-item">
                  <img
                    src="assets/images/brand-logo/brand-logo5.png"
                    alt="Images"
                  />
                </div>
              </div>
            </Slider>
          </div>
          <div className="owl-nav disabled">
            <button type="button" role="presentation" className="owl-prev">
              <span aria-label="Previous">‹</span>
            </button>
            <button type="button" role="presentation" className="owl-next">
              <span aria-label="Next">›</span>
            </button>
          </div>
          <div className="owl-dots disabled" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
