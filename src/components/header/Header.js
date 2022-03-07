import React from "react";
import { Link,NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Cart from "./Cart";

function Header() {
  const auth = useSelector((state) => state.auth);

  const { user, isLogged } = auth;

  const handleLogout = async () => {
    try {
      localStorage.clear();
      window.location.href = "/";
    } catch (err) {
      window.location.href = "/";
    }
  };

  const userLink = () => {
    return (
      <>
        {/* <div
          className="user_dropdown rotors_dropdown dropdown-menu clearfix"
          aria-labelledby="user_dropdown"
        >
          <div className="profile_info clearfix">
            <a href="#!" className="user_thumbnail">
              <img src={user.avatar} alt="thumbnail_not_found" />
            </a>
            <div className="user_content">
              <h4 className="user_name">
                <Link to="/">{user.name}</Link>
              </h4>
              <span className="user_title">
                {user.role === 1 ? "Admin" : "User"}
              </span>
            </div>
          </div>
          <ul className="ul_li_block clearfix">
            <li>
              <Link to="/">
                <i className="fal fa-user-circle" /> Profile
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <i className="fal fa-user-cog" /> Settings
              </Link>
            </li>
            {isAdmin &&  <li>
              <Link to="/manage-province">
                Manage Province
              </Link>
            </li>}
            <li>
              <Link to="/" onClick={handleLogout}>
                <i className="fal fa-sign-out" /> Logout
              </Link>
            </li>
          </ul>
        </div> */}
      </>
    );
  };

  return (
    // <header>
    //     <div className="logo">
    //         <h1><Link to="/">DevAT✮Shop</Link></h1>
    //     </div>

    //     <ul style={transForm}>
    //         <li><Link to="/"><i className="fas fa-shopping-cart"></i> Cart</Link></li>
    //         {
    //             isLogged
    //             ? userLink()
    //             :<li><Link to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
    //         }

    //     </ul>
    // </header>
    <div className="navbar-area">
      <div className="mobile-nav">
        <Link to="/" className="logo">
          <img width={30} src="../assets/images/logos/logo-1.png" alt="Logo" />
        </Link>
      </div>
      <div className="main-nav nav-three">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light ">
            <Link to="/" className="navbar-brand" >
              <img width={50} src="../assets/images/logos/logo-2.png" alt="Logo" />
            </Link>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <NavLink exact  activeClassName="active" className="nav-link" to="/">
                    Trang chủ
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink  activeClassName="active" to="/products" className="nav-link">
                    Sản phẩm
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink  activeClassName="active" to="/about" className="nav-link">
                    Thông tin
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink  activeClassName="active" to="/contact" className="nav-link">
                    Liên hệ
                  </NavLink>
                </li>
              </ul>
              <div className="nav-bar-side-2">
<Cart/>
                <div className="side-nav-cart">
                  {isLogged ? (
                    <a href="#" onClick={handleLogout} >
                      <i className="bx bx-user" />  Đăng xuất
                    </a>
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