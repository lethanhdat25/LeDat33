import React from 'react'
import { Link } from 'react-router-dom'
import { getCartItems } from '../../utils/storeSession';

const Cart = () => {
  let totalAmountInCart = 0;
  const cartItems = getCartItems();

  cartItems.forEach((item) => {
      totalAmountInCart += item.amount;
  });
  return (
    <div className="side-nav-cart mr-5">
    <Link to="/cart">
      <i className="bx bx-cart" />
    </Link>
    <span>{totalAmountInCart}</span>
  </div>
  )
}

export default Cart