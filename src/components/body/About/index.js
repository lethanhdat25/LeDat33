import React from 'react'
import Loading from '../../utils/Loading/Loading'


const About = () => {
  return (
    <>
    <Loading/>
     <div>
  <div className="inner-banner-area">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 col-md-4">
          <div className="inner-content">
            <h2>Thông tin</h2>
            <ul>
              <li><a href="index.html">Trang chủ</a></li>
              <li>Thông tin</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-7 col-md-8">
          <div className="inner-img">
            <img src="assets/images/inner-banner/inner-banner1.png" alt="Images" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="about-area pt-100 pb-70">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-img">
            <img src="assets/images/about-img.jpg" alt="About Images" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-content">
            <div className="section-title">
              <h2>We Are One of the Best and Leading Agency in World</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam dut
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam dut
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="choose-area-three pt-100 pb-70">
    <div className="container">
      <div className="section-title text-center">
        <h2>Why You Choose Us</h2>
      </div>
      <div className="row pt-45">
        <div className="col-lg-4 col-sm-6">
          <div className="choose-card-two choose-card-two-color">
            <i className="flaticon-24-hours" />
            <h3>24/7 Online Support</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="choose-card-two choose-card-two-color">
            <i className="flaticon-leaf" />
            <h3>100% Pure Foods</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
          <div className="choose-card-two choose-card-two-color">
            <i className="flaticon-service" />
            <h3>Home Delivery</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="newsletter-area-section-3 pt-100 pb-70">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="section-title">
            <span>Get 35% Discount, <b> Subscribe Now</b></span>
            <h2>Subscribe to Our Newsletters</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquy
              erat, sed diam voluptua. At vero eos et.
            </p>
          </div>
          <div className="newsletter-area-two newsletter-area-border">
            <form className="newsletter-form" data-toggle="validator" method="POST">
              <input type="email" className="form-control" placeholder="Enter your email" name="EMAIL" required autoComplete="off" />
              <button className="subscribe-btn" type="submit">
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
</div>

    </>
  )
}

export default About