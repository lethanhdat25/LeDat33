import React, { useState,useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import AllProduct from "./AllProduct/AllProduct";
import DetailProduct from "./DetailProduct/DetailProduct";
import Cart from "./Cart/Cart";
import About from "./About/";
import Contact from "./Contact/";

import Home from "../body/home/Home";

import { useSelector } from "react-redux";
import Loading from "../utils/Loading/Loading";

function Body() {
  const auth = useSelector((state) => state.auth);
  const { isLogged } = auth;
  const [load,setLoad] = useState(true)
  const loadt = ()=>{
    setTimeout(setLoad(false), 3000);
  }
  useEffect(() => {
   loadt()
  }, []);
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />

        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/products" component={AllProduct} exact />
        <Route path="/detail-products/:id" component={DetailProduct} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        
      
     </Switch>
     
    </>
  );
}

export default Body;
