import ACTIONS from './index'
import axios from 'axios'





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