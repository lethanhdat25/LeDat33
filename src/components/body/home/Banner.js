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
          <p>Mỗi một sản phẩm các bạn mua đều được trích chi phí làm từ thiện cho đồng bào khó khăn</p>
          <Link to="/products" className="default-btn btn-bg-three border-radius-5">Mua ngay</Link>
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