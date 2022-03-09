import React from 'react'
import { Link } from 'react-router-dom'

const Offer = () => {
  return (
    <>
    <div className="offer-style-area pt-100 pb-70">
  <div className="container">
    <div className="row">
      <div className="col-lg-7">
        <div className="row">
          <div className="col-lg-12">
            <div className="offer-style-item">
              <div className="line" />
              <span>Get 35% Discount</span>
              <h3>Natural Fresh Fruits</h3>
              <Link to="/products" className="shop-btn">Shop It Now</Link>
              <img src="assets/images/offer-img/offer-style-1.png" alt="Images" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="offer-style-item-2">
              <div className="line" />
              <h3>Fruits Collection</h3>
              <Link to="/products" className="shop-btn">Shop It Now</Link>
              <img src="assets/images/offer-img/offer-style-2.png" alt="Images" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="offer-style-item-3">
              <img src="assets/images/offer-img/offer-style-3.png" alt="Images" />
              <div className="line" />
              <h3>Vintage Capsicum</h3>
              <Link to="/products" className="shop-btn">Shop It Now</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="offer-style-item-4">
          <div className="line" />
          <h3>Fruits Collection</h3>
          <Link to="/products" className="shop-btn">Shop It Now</Link>
          <img src="assets/images/offer-img/offer-style-4.png" alt="Images" />
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Offer