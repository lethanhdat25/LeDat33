import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import { getAllProduct } from "../../../redux/actions/productAction";
import { Link } from "react-router-dom";
import {
  getCartItems,
  removeCartItems,
  setCartItems,
} from "../../../utils/storeSession";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fCurrency } from "../../utils/FormatCost";
import { getToTalCart } from "../../../redux/actions/productAction";
import {getProduct} from '../../../redux/reducers/productReducer';
import {unwrapResult} from '@reduxjs/toolkit';


const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch=useDispatch();
  const [top8NewProduct,setTop8NewProduct]=useState([]);
  useEffect(() => {
    getData();
  }, []);
  console.log('tun');
  const getData = async () => {
    try {
      const res = await dispatch(getProduct());
      const product=res.payload.map(item=>({...item.product,image:item.image}));
      setProducts(product);
      unwrapResult(res);
      setTop8NewProduct(product.sort((a,b)=>new Date(b?.createdDate)-new Date(a?.createdDate)).splice(0,8));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);

  console.log(top8NewProduct);

  const handleAddToCart = (item) => {
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
      getToTalCart(getCartItems())
    } else {
      cartItems.push({
        id: item.product.id,
        amount: 1,
        name: item.product.name,
        image: item.image,
        price: price,
      });
      toast.success("Thêm giỏ hàng thành công");
      getToTalCart(getCartItems())
    }

    removeCartItems();
    setCartItems(cartItems);
  };
  return (
    <div className="latest-product-area pt-100 pb-70">
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

      <div className="container">
        <div className="section-title text-center">
          <h2>Sản phẩm mới nhất</h2>
        </div>
        <div className="row pt-45">
          {top8NewProduct &&
              top8NewProduct.map((item, index) => {
                return (
                  <>
                    <div
                      className="col-lg-3 col-sm-6 mix "
                      style={{ display: "inline-block" }}
                      data-bound
                    >
                      <div className="popular-product-item" height={'300px'}>
                      <Link className={'image-product'} to={`/detail-products/${item.id}`}>
                          <img
                            src={`https://localhost:44349/uploads/${item.image}`}
                            alt="Product Images"
                          />
                        </Link>
                        {/* <div className="popular-product-tag tag-bg2">
                          <h3>12%</h3>
                        </div> */}
                        <div className="content">
                          <h3>
                          <Link to={`/detail-products/${item.id}`}>{item.name}</Link>
                          </h3>
                          {/*<span>{item.priceSale > 0 ? <>{fCurrency(item.priceSale * 1000)} / {item.dvt} / {item.weight}  <del>{fCurrency(item.price * 1000)}</del></> : <>{fCurrency(item.product.price * 1000)} / {item.product.dvt} / {item.product.weight} </>}</span>*/}
                          <ul className="popular-product-action">
                            <li>
                            <Link to={`/detail-products/${item.id}`}>
                                <i className="bx bx-zoom-in" />
                              </Link>
                            </li>
                            <li>
                              <a onClick={()=>handleAddToCart(item)}>
                                <i className="bx bx-cart" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  </>
                );
            })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  listProducts: state.product,
});

const mapDispatchToProps = {
  getAllProduct,
  getToTalCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
