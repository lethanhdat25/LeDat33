import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import {
  getCartItems,
  removeCartItems,
  setCartItems,
} from "../../../utils/storeSession";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Loading from '../../utils/Loading/Loading'
const Cart = () => {
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [ship, setShip] = useState(30);
  const [amount, setAmount] = useState([]);
  const resetCartItems = (id, amount) => {
    const newCartItems = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: amount,
        };
      }
      return item;
    });
    removeCartItems();
    setCartItems(newCartItems);
  };
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setAddress(value)
  };
  const getData = () => {
    const data = getCartItems();
    if (data) {
      setCart(data);
    }
  };

  useEffect(() => {
    cart.forEach((item) => {
      setAmount((state) => [...state, item.amount]);
    });
  }, [cart]);
  useEffect(() => {
    handleCacul();
  }, [cart, amount]);
  const removeItemCart = (index) => {
    const data = cart;
    data.splice(index, 1);
    console.log(data);
    removeCartItems();
    setCartItems(data);
    getData();
  };
  useEffect(() => {
    getData();
  }, []);
  const handleTangQuantity = (id, index, amount) => {
    let data = amount + 1;
    if (data > 0) {
      resetCartItems(id, data);
      setAmount((state) => {
        if (state[index] >= 0) {
          state.splice(index, 1, data);
        }
        return [...state];
      });
    }
  };
  const handleGiamQuantity = (id, index, amount) => {
    let data = amount - 1;
    if (data > 0) {
      resetCartItems(id, data);
      setAmount((state) => {
        if (state[index] >= 0) {
          state.splice(index, 1, data);
        }
        return [...state];
      });
    }
  };
  const handleCacul = () => {
    let data = 0;
    for (let index = 0; index < cart.length; index++) {
      data += cart[index].amount * cart[index].price;
    }
    setSubTotal(data);
  };
  // Form
  const [user, setUser] = useState({});
  const [amounts, setAmounts] = useState([]);
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [userProvince, setUserProvince] = useState("");
  const [userDistrict, setUserDistrict] = useState("");
  const [userWard, setUserWard] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectProvince, setSelectProvince] = useState(undefined);
  const [selectDistrict, setSelectDistrict] = useState(undefined);
  const [selectWard, setSelectWard] = useState(undefined);
  // ----------------------
  useEffect(() => {
    setName(localStorage.getItem("name"));
    setGmail(localStorage.getItem("gmail"));
    setPhoneNumber(localStorage.getItem("phoneNumber"));
   
    fetchData();
    fetchUser();
  }, [gmail]);
  useEffect(() => {
    if(user){
      setAddress(user.userAddress)
    }
  }, [user]);


  const fetchUser = async () => {
    try {
      if (gmail) {
        const res = await axios.get(
          `https://localhost:44349/api/Accounts/gmail?gmail=${gmail}`
        );
        setUser(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchData = async () => {
      try {
          const res = await axios.get('https://provinces.open-api.vn/api/?depth=3');
          let pro = res.data.map((value) => ({ name: value.name, code: value.code }))
          let dis = res.data.map((value) => {
            return value.districts.map((district) => ({
                name: district.name,
                code: district.code
            }));
        })
        let war = res.data.map((value) => {
          return value.districts.map((district) => {
              return district.wards.map((ward) => ({ name: ward.name, code: ward.code }));
          });
      })
          setProvinces(pro);
          setDistricts(dis);
          setWards(war);
          
      } catch (e) {
          console.log(e);
      }
  };

  
  const checkForm = () => {
    if (
        selectDistrict &&
        selectProvince &&
        selectWard &&
        name !== '' &&
        gmail !== '' &&
        phoneNumber !== '' &&
        address !== ''
    ) {
        setCheckValidity(true);
        return true;
    }
    setCheckValidity(false);
    return false;
};
const [checkValidity, setCheckValidity] = useState(true);
  const handleSubmitForm = async () => {
    if(phoneNumber.length !== 10){
      return toast.error('Số điện thoại bắt buộc chứa 10 ký tự')
    }
    console.log(user)
    const billData = {
      total: subTotal + ship,
      orderTime: new Date(),
      status: "pending",
      userId: user?.id,
    };
    const isValid = checkForm();
    if (isValid) {
        try {
            const billRes = await axios.post('https://localhost:44349/api/Bills',billData);

            await getCartItems().forEach( (item, index) => {
                const cartRes =  axios.post('https://localhost:44349/api/Carts',{
                        amount: item.amount,
                        productId: item.id,
                        billId: billRes.data.id,
                        price: cart[index].price
                    })
                

            });

            // const editUserRes = await axios.put(`https://localhost:44349/api/Accounts/${user.id}`,{
            //     accountPassword:user.accountPassword,
            //     userAddress:`${address} - ${userWard} - ${userDistrict} - ${userProvince}`
            // })
            removeCartItems()
            getData()
            toast.success('Đặt hàng thành công')
        } catch (e) {
            console.log(e);
            toast.error('Đặt hàng thất bại')
        }
    }
    return;
};

  const renderProvinces = () => {
    return (
      
      <div className="col-md-4 mb-3">
        <label htmlFor="country">Tỉnh / thành</label>
        <select
          className="custom-select d-block w-100"
          id="country"
          required=""
          value={selectProvince}
          onChange={(e) => {
            setSelectProvince(e.target.value);
          }}
        >
          <option value="">Choose...</option>
          {provinces.map((province, index) => (
            <option key={province.code} value={index}>
              {province.name}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const renderDistricts = () => {
    return (
      <div className="col-md-4 mb-3">
        <label htmlFor="state">Quận / huyện</label>
        <select
          className="custom-select d-block w-100"
          id="state"
          required=""
          value={selectDistrict}
          onChange={(e) => {
            const indexOfWard = e.target.value;
            setUserDistrict(districts[selectProvince][indexOfWard].name);
            setSelectDistrict(e.target.value);
          }}
        >
          <option value="">Choose...</option>
          {districts[selectProvince]?.map((district, index) => (
            <option key={index} value={index}>
              {district.name}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const renderWards = () => {
    return (
      <div className="col-md-4 mb-3">
        <label htmlFor="state">Xã / phường</label>
        <select
          className="custom-select d-block w-100"
          id="state"
          required=""
          value={selectWard}
          onChange={(e) => {
            const indexOfWard = e.target.value;
            setUserWard(
              wards[selectProvince][selectDistrict][indexOfWard].name
            );
            setSelectWard(indexOfWard);
          }}
        >
          <option value="">Choose...</option>
          {selectProvince &&
            selectDistrict &&
            wards[selectProvince][selectDistrict]?.map((ward, index) => (
              <option key={index} value={index}>
                {ward.name}
              </option>
            ))}{" "}
        </select>
      </div>
    );
  };

  return (
    <>
      <div>
        <div className="inner-banner-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-4">
                <div className="inner-content">
                  <h2>Giỏ hàng</h2>
                  <ul>
                    <li>
                      <a href="index.html">Trang chủ</a>
                    </li>
                    <li>Giỏ hàng</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7 col-md-8">
                <div className="inner-img">
                  <img
                    src="assets/images/inner-banner/inner-banner6.png"
                    alt="Images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="cart-wraps-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <form>
                  <div className="cart-wraps">
                    <div className="cart-table table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">Sản phẩm</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Tổng giá</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart &&
                            cart.length > 0 &&
                            cart.map((item, index) => {
                              return (
                                <>
                                  <tr>
                                    <td className="product-thumbnail">
                                      <a href="#">
                                        <img
                                          src={`https://localhost:44349/uploads/${item.image}`}
                                          alt="Image"
                                        />
                                      </a>
                                    </td>
                                    <td className="product-name">
                                      <a href="#">{item.name}</a>
                                    </td>
                                    <td className="product-price">
                                      <span className="unit-amount">
                                        ${item.price}
                                      </span>
                                    </td>
                                    <td className="product-quantity">
                                      <div className="input-counter">
                                        <span
                                          onClick={() =>
                                            handleGiamQuantity(
                                              item.id,
                                              index,
                                              amount[index]
                                            )
                                          }
                                          className="minus-btn"
                                        >
                                          <i className="bx bx-minus" />
                                        </span>
                                        <input
                                          type="text"
                                          value={amount[index]}
                                        />
                                        <span
                                          onClick={() =>
                                            handleTangQuantity(
                                              item.id,
                                              index,
                                              amount[index]
                                            )
                                          }
                                          className="plus-btn"
                                        >
                                          <i className="bx bx-plus" />
                                        </span>
                                      </div>
                                    </td>
                                    <td className="product-subtotal">
                                      <span className="subtotal-amount">
                                        ${item.price * amount[index]}
                                      </span>
                                      <a
                                        onClick={() => removeItemCart(index)}
                                        href="#"
                                        className="remove"
                                      >
                                        <i className="bx bx-trash" />
                                      </a>
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                    <div className="cart-buttons">
                      <div className="row align-items-center">
                        <div className="col-lg-7 col-sm-7 col-md-7">
                          <div className="continue-shopping-box">
                            <Link
                              to="/products"
                              className="default-btn btn-bg-three"
                            >
                              Tiếp tục xem sản phẩm
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                     {cart && cart.length > 0 && 
                     <>
                      <div className="cart-totals">
                        <h3>Tổng số giỏ hàng</h3>
                        <ul>
                          <li>
                            Tổng phụ <span>${subTotal}</span>
                          </li>
                          <li>
                            Phí ship <span>${ship}</span>
                          </li>
                          <li>
                            Tổng tiền{" "}
                            <span>
                              <b>${subTotal + ship}</b>
                            </span>
                          </li>
                        </ul>
                        <button
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          className="default-btn btn-bg-three"
                        >
                          Đặt hàng
                        </button>
                      </div>
                     </>}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Modal  */}
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Điền thông tin
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-12 ">
                    <div className="form-group mt-5">
                      <input
                        // onChange={handleChangeInput}
                        name="gmail"
                        type="text"
                        className="form-control"
                        placeholder="Nhập email..."
                        value={gmail}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 ">
                    <div className="form-group mt-5">
                      <input
                        // onChange={handleChangeInput}
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Nhập tên người mua..."
                        value={name}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 ">
                    <div className="form-group mt-5">
                      <input
                        // onChange={handleChangeInput}
                        name="gmail"
                        type="text"
                        className="form-control"
                        placeholder="Nhập số điện thoại..."
                        value={phoneNumber}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 ">
                    <div className="form-group mt-5">
                      <input
                        onChange={handleChangeInput}
                        name="address"
                        type="text"
                        className="form-control"
                        placeholder="Nhập địa chỉ..."
                        value={address}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                            {/* Render Provinces */}
                            {renderProvinces()}
                            {/* Render Districts */}
                            {renderDistricts()}
                            {/* Render Wards */}
                            {renderWards()}
                        </div>
              </div>
              <div className="modal-footer">
                <button onClick={handleSubmitForm} type="button" className="default-btn btn-bg-three">
                  Gửi thông tin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
              <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        <Loading/>
    </>
  );
};

export default Cart;
