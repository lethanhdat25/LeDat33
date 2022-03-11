import React from "react";
import Banner from "./Banner";
import Product from "./Product";
import Loading from "../../utils/Loading/Loading";
import Brand from "./Brand";
import Offer from "./Offer";
import PopularProduct from "./PopularProduct";
import Choose from "./Choose";
import Blog from "./Blog";

function Home() {
  return (
    <>
    <Loading/>
      <Banner />
      {/*<Brand/>*/}
      <Offer/>
      <PopularProduct/>
      <Choose/>
      <Product />
      <div className="newsletter-area-section-3 newsletter-area-section-bg pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <span>
                  Giảm đến 35%, <b> Đăng ký ngay</b>
                </span>
                <h2>Đăng ký thông báo thông tin về sản phẩm mới của chúng tôi</h2>

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
      <Blog/>
    </>
  );
}

export default Home;
