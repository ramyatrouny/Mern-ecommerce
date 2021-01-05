import axios from 'axios';
import * as ProductConstant from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: ProductConstant.PRODUCT_LIST_REQUEST
        });

        const { data } = await axios.get('/api/products');

        dispatch({
            type: ProductConstant.PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ProductConstant.PRODUCT_LIST_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}