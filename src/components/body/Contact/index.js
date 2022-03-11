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
        <h2>Hãy gửi cho chúng tôi những ý kiến đóng góp của bạn !</h2>
      </div>
      <div className="row pt-45 align-items-center">
        <div className="col-lg-6">
          <div className="contact-img">
            <img src="assets/images/contact-img.jpg" alt="Images" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-form">
            <h2>Gửi tin nhắn của bạn</h2>
            <form id="contactForm">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Tên của bạn</label>
                    <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Tên của bạn" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Email của bạn</label>
                    <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Email của bạn" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Số điện thoại của bạn</label>
                    <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" placeholder="Số điện thoại của bạn" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Vấn đề của bạnt</label>
                    <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" placeholder="Vấn đề của bạn" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Lời nhắn gửi đến chúng tôi</label>
                    <textarea name="message" className="form-control" id="message" cols={30} rows={8} required data-error="Write your message" placeholder="Lời nhắn gửi đến chúng tôi..." defaultValue={""} />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                {/*<div className="col-lg-12 col-md-12">*/}
                {/*  <div className="agree-label">*/}
                {/*    <input type="checkbox" id="chb1" />*/}
                {/*    <label htmlFor="chb1">*/}
                {/*      Accept <a href="terms-condition.html">Terms &amp; Conditions</a> And <a href="privacy-policy.html">Privacy Policy.</a>*/}
                {/*    </label>*/}
                {/*  </div>*/}
                {/*</div>*/}
                <div className="col-lg-12 col-md-12">
                  <button type="submit" className="default-btn btn-bg-three">
                    Gửi
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
        <h2>Liên lạc</h2>
      </div>
      <div className="row pt-45">
        <div className="col-lg-4 col-sm-6">
          <div className="contact-card">
            <i className="bx bx-phone-call" />
            <h3>Số điện thoại</h3>
            <span><a href="tel:0916218666">+84 916 21 8666</a></span>
            <span><a href="tel:0378828686">+84 378 82 8686</a></span>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="contact-card">
            <i className="bx bxs-map" />
            <h3>Địa chỉ</h3>
            <span>52 Văn Trì, P.Minh Khai, Nam Từ Liêm, Hà Nộ Hà Nội 100000</span>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
          <div className="contact-card">
            <i className="bx bx-message" />
            <h3>Email</h3>
            <span><a href="mailto: knightstork.work@gmail.com"><span className="__cf_email__" data-cfemail="5e363b3232311e36373231703d3133">knightstork.work@gmail.com</span></a></span>
            <span><a href="mailto: dieplongjsc@gmail.com"><span className="__cf_email__" data-cfemail="5e363b3232311e36373231703d3133">dieplongjsc@gmail.com</span></a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="map-area">
    <div className="container-fluid m-0 p-0">
      <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1hAq3gtaICmSrnS_fRoQiBvD8zSIgMSy1&ehbc=2E312F" ></iframe>
    </div>
  </div>
</div>

    </>
  )
}

export default Contact
