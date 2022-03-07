import React from "react";
import Banner from "./Banner";
import Product from "./Product";
import Loading from "../../utils/Loading/Loading";

function Home() {
  return (
    <>
    <Loading/>
      <Banner />
      <Product />
      <div className="newsletter-area-section-3 newsletter-area-section-bg pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <span>
                  Get 35% Discount, <b> Subscribe Now</b>
                </span>
                <h2>Subscribe to Our Newsletters</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquy erat, sed diam voluptua. At vero eos et.
                </p>
              </div>
              <div className="newsletter-area-two newsletter-area-three">
                <form
                  className="newsletter-form"
                  data-toggle="validator"
                  method="POST"
                  noValidate="true"
                >
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    name="EMAIL"
                    required
                    autoComplete="off"
                  />
                  <button
                    className="subscribe-btn disabled"
                    type="submit"
                    style={{ pointerEvents: "all", cursor: "pointer" }}
                  >
                    Subscribe
                  </button>
                  <div id="validator-newsletter" className="form-result" />
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="newsletter-img">
                <img src="assets/images/newsletter-img.jpg" alt="Images" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
