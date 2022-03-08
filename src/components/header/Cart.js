import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getCartItems } from '../../utils/storeSession';
import { connect } from 'react-redux';
import { getToTalCart } from '../../redux/actions/productAction';

const Cart = ({total,getToTalCart}) => {
  let totalAmountInCart = 0;
  const cartItems = getCartItems();
  getToTalCart(getCartItems())
  cartItems.forEach((item) => {
      totalAmountInCart += item.amount;
  });
  useEffect(() => {
    getToTalCart(getCartItems())
  
   
  }, [])
  
  return (
    <div className="side-nav-cart mr-5">
    <Link to="/cart">
      <i className="bx bx-cart" />
    </Link>
    <span>{total}</span>
  </div>
  )
}


const mapStateToProps = (state) => ({
  total: state.cart,
});

const mapDispatchToProps = {
  getToTalCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);