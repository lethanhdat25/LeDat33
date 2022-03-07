import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RelatedProduct from "./RelatedProduct";
import {
  getCartItems,
  removeCartItems,
  setCartItems,
} from "../../../utils/storeSession";
import Loading from '../../utils/Loading/Loading'
import { fCurrency } from "../../utils/FormatCost";

const DetailProduct = ({ match }) => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const tangSoLuong = () => {
    setQuantity(quantity + 1);
  };
  const giamSoLuong = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const getDetailProduct = async () => {
    await axios
      .get(`https://localhost:44349/api/Products/${match.params.id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  useEffect(() => {
    getDetailProduct();
  }, [match.params.id]);

  const handleAddToCart = () => {
    const id = match.params.id;
    let price = 0;
    if (product.product.priceSale > 0) {
      price = product.product.priceSale;
    } else {
      price = product.product.price;
    }
    const cartItems = getCartItems();
    let indexItemInCart = cartItems.findIndex((item) => item.id === id);
    if (indexItemInCart > -1) {
      cartItems.splice(indexItemInCart, 1, {
        id,
        amount: cartItems[indexItemInCart].amount + 1,
        name: product.product.name,
        image: product.image.$values[0],
        price: price,
      });
      toast.success("Cập nhật giỏ hàng");
    } else {
      cartItems.push({
        id,
        amount: quantity,
        name: product.product.name,
        image: product.image.$values[0],
        price: price,
      });
      toast.success("Thêm giỏ hàng thành công");
    }

    removeCartItems();
    setCartItems(cartItems);
  };
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <Loading/>
      <div>
        <div className="inner-banner-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-4">
                <div className="inner-content">
                  <h2>Chi tiết sản phẩm</h2>
                  <ul>
                    <li>
                      <a href="index.html">Trang chủ</a>
                    </li>
                    <li>Chi tiết sản phẩm</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7 col-md-8">
                <div className="inner-img">
                  <img
                    src="../assets/images/inner-banner/inner-banner7.png"
                    alt="Images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-details-area pt-100 pb-70">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="product-detls-image">
                  <img
                    width={"100%"}
                    src={
                      product &&
                      `https://localhost:44349/uploads/${product.image.$values[0]}`
                    }
                    alt="Image"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="product-desc">
                  <h3>{product && product.product.name}</h3>
                  <div className="price">
                    {product && product.product.priceSale > 0 ? (
                      <>
                        <span className="new-price">
                          {product && fCurrency(product.product.priceSale *1000)}
                        </span>
                        <span className="old-price">
                          {product && fCurrency(product.product.price *1000)}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="new-price">
                          ${product && fCurrency(product.product.price * 1000)}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="input-count-area">
                    <h3>Số lượng</h3>
                    <div className="input-counter">
                      <span onClick={giamSoLuong} className="minus-btn">
                        <i className="bx bx-minus" />
                      </span>
                      <input type="text" value={quantity} />
                      <span onClick={tangSoLuong} className="plus-btn">
                        <i className="bx bx-plus" />
                      </span>
                    </div>
                  </div>
                  <div className="product-add-btn">
                    {/* <button type="submit" className="default-btn btn-bg-three">
                <i className="fas fa-cart-plus" /> Mua ngay
              </button> */}
                    <button
                      onClick={handleAddToCart}
                      type="submit"
                      className="default-btn btn-bg-three"
                    >
                      <i className="fas fa-cart-plus" /> Thêm giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-tab pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="tab products-details-tab">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <ul className="tabs">
                        <li>
                          <a href="#">Mô tả</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="tab_content current active pt-45">
                        <div className="tabs_item current">
                          <div className="products-tabs-decs">
                            <p> {product && product.product.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProduct
        categoryId={product && product.product.categoryId}
        id={match.params.id}
      />
    </>
  );
};

export default DetailProduct;
