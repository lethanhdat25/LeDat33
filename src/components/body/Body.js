import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Home from "../body/home/Home";
import About from "./About/";
import AllProduct from "./AllProduct/AllProduct";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Cart from "./Cart/Cart";
import Contact from "./Contact/";
import DetailProduct from "./DetailProduct/DetailProduct";
import MyAccount from './MyAccount/MyAccount';

function Body() {
  const auth = useSelector((state) => state.auth);
  const { isLogged } = auth;
  const [load, setLoad] = useState(true);
  const loadt = () => {
    setTimeout(setLoad(false), 3000);
  };
  useEffect(() => {
    loadt();
  }, []);
  return (
    <>

        <Route path="/" component={Home} exact />

        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/products" component={AllProduct} exact />
        <Route path="/detail-products/:id" component={DetailProduct} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/my_account" component={MyAccount} exact />

    </>
  );
}

export default Body;
