import * as ProductConstant from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ProductConstant.PRODUCT_LIST_REQUEST:
            return {
                loading: true,
                products: []
            }
        case ProductConstant.PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case ProductConstant.PRODUCT_LIST_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
    switch (action.type) {
        case ProductConstant.PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                product: { ...state }
            }
        case ProductConstant.PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case ProductConstant.PRODUCT_DETAILS_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}