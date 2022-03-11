import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fCurrency } from "../../utils/FormatCost";
import {
  getCartItems,
  removeCartItems,
  setCartItems,
} from "../../../utils/storeSession";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAllProduct,
  getToTalCart,
} from "../../../redux/actions/productAction";
const PopularProduct = () => {
  const [products, setProducts] = useState([]);
  const [isAdd, setIsAdd] = useState(0);
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      let res = await axios.get("https://localhost:44349/api/Products");
      if (res && res.data) {
        setProducts(res.data.$values.splice(0,8));
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleAddToCart = (item) => {
    let isCart = isAdd + 1;
    setIsAdd(isCart);
    let id = item.product.id;
    let price = 0;

    if (item.product.priceSale > 0) {
      price = item.product.priceSale;
    } else {
      price = item.product.price;
    }

    const cartItems = getCartItems();

    let indexItemInCart = cartItems.findIndex((item) => item.id === id);

    if (indexItemInCart > -1) {
      cartItems.splice(indexItemInCart, 1, {
        id: item.product.id,
        amount: cartItems[indexItemInCart].amount + 1,
        name: item.product.name,
        image: item.image,
        price: price,
      });

      toast.success("Cập nhật giỏ hàng");

      getToTalCart();
    } else {
      cartItems.push({
        id: item.product.id,
        amount: 1,
        name: item.product.name,
        image: item.image,
        price: price,
      });

      toast.success("Thêm giỏ hàng thành công");
      getToTalCart();
    }

    removeCartItems();
    setCartItems(cartItems);
  };

  return (
    <div className="list-item-area pb-70">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="section-title">
              <h2>Sản phẩm phổ biến</h2>
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop:30}}>
          {products && (
              products.map((item, index) => {
                if (item.product.name) {
                  return (
                      <div key={index} className="col-lg-3 col-sm-6">
                        <div className="product-item">
                          <div className="product-img">
                            <Link to={`/detail-products/${item.product.id}`}>
                              <img
                                  src={`https://localhost:44349/uploads/${item.image}`}
                                  alt="Product Images"
                              />
                            </Link>
                            {item.product.priceSale >0 && (
                                <div className="product-item-tag">
                                  <h3>
                                    {(100 - (item.product.priceSale * 100 / item.product.price )).toFixed(0)}%
                                  </h3>
                                </div>
                            )}
                            <ul className="product-item-action">
                              <li>
                                <Link
                                    to={`/detail-products/${item.product.id}`}
                                >
                                  <i className="bx bx-zoom-in" />
                                </Link>
                              </li>
                              <li>
                                <a
                                    href="#"
                                    onClick={() => handleAddToCart(item)}
                                >
                                  <i className="bx bx-cart" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="content">
                            <h3>
                              <Link to={`/detail-products/${item.product.id}`}>
                                {item.product.name}{" "}
                              </Link>
                            </h3>
                            <span>

                                <>
                                  {fCurrency(item.product.price * 1000)} /{" "}
                                  {item.product.dvt} / {item.product.weight}{" "}
                                </>

                            </span>
                          </div>
                        </div>
                      </div>
                  );
                }
              })
          ) }
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
