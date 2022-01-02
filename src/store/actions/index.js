import * as types from './actiontypes'
export function getUsersData(data) {
    return {
        type: types.GET_USERS_DATA,
        payload: data
    }
}

export function getUserData(data) {
    return {
        type: types.GET_USER_DATA,
        payload: data
    }
}


export function getProductsData(data) {
    return {
        type: types.GET_PRODUCTS_DATA,
        payload: data
    }
}



export function getProductData(data) {
    return {
        type: types.GET_PRODUCT_DATA,
        payload: data
    }
}