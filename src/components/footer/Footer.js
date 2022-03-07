import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer-area footer-bg">
        <div className="container">
          <div className="footer-top pt-100 pb-70">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-widget-color-2">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img width={50}
                        src="../assets/images/logos/logo-2.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <p>
                    We are one of the best &amp; quality full in market. Let's
                    join.
                  </p>
                  <ul className="footer-list-contact">
                    <li>
                      <i className="bx bx-home" />
                      <a href="#">Virgil A Stanton, Virginia, USA</a>
                    </li>
                    <li>
                      <i className="bx bx-phone-call" />
                      <a href="tel:+1(123)-456-7890">+1 (123) 456 7890</a>
                    </li>
                    <li>
                      <i className="bx bx-envelope" />
                      <a href="/cdn-cgi/l/email-protection#d3bbb6bfbfbc93bbbabfbcfdb0bcbe">
                        <span
                          className="__cf_email__"
                          data-cfemail="1078757c7c7f5078797c7f3e737f7d"
                        >
                          [email&nbsp;protected]
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-widget-color-2">
                  <h3>Services</h3>
                  <ul className="footer-list">
                    <li>
                      <a href="wordpress-hosting.html" target="_blank">
                        My Account
                      </a>
                    </li>
                    <li>
                      <a href="tracking-order.html" target="_blank">
                        Tracking Order
                      </a>
                    </li>
                    <li>
                      <a href="customer-services.html" target="_blank">
                        Customer Services
                      </a>
                    </li>
                    <li>
                      <a href="compare.html" target="_blank">
                        Compare
                      </a>
                    </li>
                    <li>
                      <a href="wishlist.html" target="_blank">
                        Wishlist
                      </a>
                    </li>
                    <li>
                      <a href="privacy-policy.html" target="_blank">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-widget-color-2">
                  <h3>Information</h3>
                  <ul className="footer-list">
                    <li>
                      <a href="index.html" target="_blank">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="about.html" target="_blank">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html" target="_blank">
                        Blog Details
                      </a>
                    </li>
                    <li>
                      <a href="shop-details.html" target="_blank">
                        Shop Details
                      </a>
                    </li>
                    <li>
                      <a href="testimonials.html" target="_blank">
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a href="team.html" target="_blank">
                        Team
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-widget-color-2">
                  <h3>Follow Us</h3>
                  <p>
                    We are one of the best &amp; quality full in market. Let's
                    join.
                  </p>
                  <form className="footer-form-area">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                    <button className="subscribe-btn" type="submit">
                      <i className="bx bx-paper-plane" />
                    </button>
                  </form>
                  <ul className="social-link">
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copy-right-area-three">
            <div className="copy-right-text">
              <p>
                Copyright ©2021 Hilo. All Rights Reserved by
                <a href="https://hibootstrap.com/" target="_blank">
                  HiBootstrap
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
