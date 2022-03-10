import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Cart from "./Cart";
import {getSessionStorage} from '../../utils/sessionStorage';

function Header() {
  const handleLogout = async () => {
      localStorage.clear();
      window.location.href = "/";
  };
  const [open, setOpen] = useState(false);
  const [users,setUser] = useState();
  const handleChangeOpen = () => {
    setOpen(!open);
  };

  useEffect(()=>{
    setUser(getSessionStorage().name);
  },[getSessionStorage().name])
  console.log(users);
  return (
    <div className="navbar-area">
      <div className="mobile-nav mean-container">
        <div className="mean-bar">
          <a
            onClick={handleChangeOpen}
            href="#nav"
            className="meanmenu-reveal"
            style={{ background: "", color: "", right: 0, left: "auto" }}
          >
            <span>
              <span>
                <span />
              </span>
            </span>
          </a>
          <nav className="mean-nav">
            <ul
              className="navbar-nav m-auto"
              style={{ display: open ? "" : "none" }}
            >
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/"
                >
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  to="/products"
                  className="nav-link"
                >
                  Sản phẩm
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  to="/about"
                  className="nav-link"
                >
                  Thông tin
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  to="/contact"
                  className="nav-link"
                >
                  Liên hệ
                </NavLink>
              </li>
            </ul>
            <div className="nav-right-side">
              <ul className="nav-right-list" style={{ display: "none" }}>
                <li>
                  <a href="#">
                    <i className="bx bx-repost" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-heart" />
                  </a>
                </li>
                <li className="cart-span mean-last">
                  <a href="#">
                    <i className="bx bx-cart" />
                  </a>
                  <span>1</span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <a href="index.html" className="logo">
          <img src="assets/images/logos/logo-1.png" alt="Logo" />
        </a>
      </div>

      <div className="mobile-nav">
        <Link to="/" className="logo">
          <img width={30} src="../assets/images/logos/logo-1.png" alt="Logo" />
        </Link>
        <div
          className="collapse navbar-collapse mean-menu"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/"
              >
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                to="/products"
                className="nav-link"
              >
                Sản phẩm
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                to="/about"
                className="nav-link"
              >
                Thông tin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                to="/contact"
                className="nav-link"
              >
                Liên hệ
              </NavLink>
            </li>
          </ul>
          <div className="nav-bar-side-2">
            <Cart />
            <div className="side-nav-cart">
              {users ? (
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a href="#" className="nav-link active">
                      {users.name}
                      <i className="bx bx-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Email: {users.gmail}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          SDT: {users.phoneNumber}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a onClick={handleLogout} href="#" className="nav-link">
                          Đăng xuất
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              ) : (
                <Link to="/login">
                  <i className="bx bx-user" /> Đăng nhập
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="main-nav nav-three">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light ">
            <Link to="/" className="navbar-brand">
              <img
                width={50}
                src="../assets/images/logos/logo-2.png"
                alt="Logo"
              />
            </Link>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active"
                    className="nav-link"
                    to="/"
                  >
                    Trang chủ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    to="/products"
                    className="nav-link"
                  >
                    Sản phẩm
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    to="/about"
                    className="nav-link"
                  >
                    Thông tin
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    to="/contact"
                    className="nav-link"
                  >
                    Liên hệ
                  </NavLink>
                </li>
              </ul>
              <div className="nav-bar-side-2">
                <Cart />
                <div className="side-nav-cart" >
                  {users ? (
                    <ul className="navbar-nav mr-auto">
                      <Link to="/my_account">
                      <li className="nav-item">
                        <a href="#" className="nav-link active">
                          {users}
                          <i className="bx bx-chevron-down"></i>
                        </a>
                      </li>
                      </Link>
                    </ul>
                  ) : (
                    <Link to="/login">
                      <i className="bx bx-user" /> Đăng nhập
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="side-nav-responsive">
        <div className="container">
          <div className="dot-menu">
            <div className="circle-inner">
              <div className="circle circle-one" />
              <div className="circle circle-two" />
              <div className="circle circle-three" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
