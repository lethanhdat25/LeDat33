import React from 'react'
import Loading from '../../utils/Loading/Loading'

const Contact = () => {
  return (
    <>
    <Loading/>
    <div>
  <div className="inner-banner-area">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 col-md-4">
          <div className="inner-content">
            <h2>Liên hệ chúng tôi</h2>
            <ul>
              <li><a href="index.html">Trang chủ</a></li>
              <li>Liên hệ chúng tôi</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-7 col-md-8">
          <div className="inner-img">
            <img src="assets/images/inner-banner/inner-banner2.png" alt="Images" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="contact-form-area pt-100 pb-70">
    <div className="container">
      <div className="section-title text-center">
        <h2>Let's Send Us a Message Below</h2>
      </div>
      <div className="row pt-45 align-items-center">
        <div className="col-lg-6">
          <div className="contact-img">
            <img src="assets/images/contact-img.jpg" alt="Images" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form id="contactForm">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Name" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Your Email</label>
                    <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Email" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" placeholder="Phone" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Your Subject</label>
                    <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" placeholder="Your Subject" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea name="message" className="form-control" id="message" cols={30} rows={8} required data-error="Write your message" placeholder="Your Message" defaultValue={""} />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="agree-label">
                    <input type="checkbox" id="chb1" />
                    <label htmlFor="chb1">
                      Accept <a href="terms-condition.html">Terms &amp; Conditions</a> And <a href="privacy-policy.html">Privacy Policy.</a>
                    </label>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <button type="submit" className="default-btn btn-bg-three">
                    Send Message
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden" />
                  <div className="clearfix" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="contact-area pb-70">
    <div className="container">
      <div className="section-title text-center">
        <h2>Get in Touch</h2>
      </div>
      <div className="row pt-45">
        <div className="col-lg-4 col-sm-6">
          <div className="contact-card">
            <i className="bx bx-phone-call" />
            <h3>Call Number</h3>
            <span><a href="tel:+1-(123)-456-7890">+1 (123) 456 7890</a></span>
            <span><a href="tel:+1-(123)-656-6790">+1 (123) 656 6790</a></span>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="contact-card">
            <i className="bx bxs-map" />
            <h3>Address</h3>
            <span>124 Virgil A Virginia, USA</span>
            <span>194 Virgil B Virginia, USA</span>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
          <div className="contact-card">
            <i className="bx bx-message" />
            <h3>Contact Info</h3>
            <span><a href="/cdn-cgi/l/email-protection#68000d0404072800010407460b0705"><span className="__cf_email__" data-cfemail="5e363b3232311e36373231703d3133">[email&nbsp;protected]</span></a></span>
            <span><a href="/cdn-cgi/l/email-protection#61080f070e2109080d0e4f020e0c"><span className="__cf_email__" data-cfemail="0d64636b624d65646162236e6260">[email&nbsp;protected]</span></a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="map-area">
    <div className="container-fluid m-0 p-0">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.7518096941076!2d108.24853991477676!3d15.980868288935552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142108fec82aac7%3A0x5bfbc606b8eae2c9!2zMjAtNDIgTmd1eeG7hW4gVOG6oW8sIEhvw6AgSOG6o2ksIE5nxakgSMOgbmggU8ahbiwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaWV0bmFt!5e1!3m2!1sen!2sbd!4v1646582000832!5m2!1sen!2sbd"  />

    </div>
  </div>
</div>

    </>
  )
}

export default Contact