import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="banner-area-two">
  <div className="container-fluid">
    <div className="row align-items-center">
      <div className="col-lg-5">
        <div className="banner-content-2">
          <span><b>Giảm giá đến 35%,</b> Mỗi sản phẩm </span>
          <h2>Chất lượng là hàng đầu</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscins elitr, seddiams nonumy eirmod.</p>
          <Link to="/products" className="default-btn btn-bg-three border-radius-5">Shop Now</Link>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="banner-img-2">
          <img src="assets/images/home-three.png" alt="Banner Images" />
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default Banner