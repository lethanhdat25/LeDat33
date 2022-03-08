import ACTIONS from './index'
import axios from 'axios'
import {
  getCartItems,
  removeCartItems,
  setCartItems,
} from "../../utils/storeSession";





export const getTotalCart = (total) => async (dispatch) => {
  try {
    dispatch({
        type: ACTIONS.GET_TOTAL_CART,
        payload: total,
      });
  } catch (error) {
    console.log(error);
  }
};