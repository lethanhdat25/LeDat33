import ACTIONS from './index'
import axios from 'axios'
import {
  getCartItems,
  removeCartItems,
  setCartItems,
} from "../../utils/storeSession";




export const getAllProduct = () => async (dispatch) => {
  try {
    const res = await axios.get('https://localhost:44349/api/Products')
    dispatch({
        type: ACTIONS.GET_ALL_PRODUCT,
        payload: res.data.$values,
      });
  } catch (error) {
    console.log(error);
  }
};
export const getToTalCart = () => async (dispatch) => {
  try {
    const res = getCartItems()
    dispatch({
        type: ACTIONS.GET_TOTAL_CART,
        payload: res.length,
      });
  } catch (error) {
    console.log(error);
  }
};