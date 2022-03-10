import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fCurrency } from "../../utils/FormatCost";

const PopularProduct = () => {
  const [products, setProducts] = useState([]);

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
                            {index < 5 && (
                                <div className="product-item-tag">
                                  <h3>Mới</h3>
                                </div>
                            )}
                          </div>
                          <div className="content">
                            <h3>
                              <Link to={`/detail-products/${item.product.id}`}>
                                {item.product.name}{" "}
                              </Link>
                            </h3>
                            <span>
                              {item.product.priceSale > 0 ? (
                                  <>
                                    {fCurrency(item.product.priceSale * 1000)} /{" "}
                                    {item.product.dvt} / {item.product.weight}{" "}
                                    <del style={{color:'red'}}>
                                      {fCurrency(item.product.price * 1000)}
                                    </del>

                                  </>
                              ) : (
                                  <>
                                    {fCurrency(item.product.price * 1000)} /{" "}
                                    {item.product.dvt} / {item.product.weight}{" "}
                                  </>
                              )}
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
