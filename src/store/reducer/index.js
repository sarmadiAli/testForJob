import * as types from './../actions/actiontypes'
const initData = {
    users: [],
    user: {},
    admin: {},
    products: [],
    product: {},


}

function webReducer(state = initData, action) {
    switch (action.type) {
        case types.GET_USERS_DATA:
            {
                const users = action.payload
                const admin = users.find(ele => ele.email === "emma.wong@reqres.in")
                return Object.assign({}, state, { users: users, admin })
            }
        case types.GET_USER_DATA:
            return Object.assign({}, state, { user: action.payload })
        case types.GET_PRODUCTS_DATA:
            return Object.assign({}, state, { products: action.payload })
        case types.GET_PRODUCT_DATA:
            return Object.assign({}, state, { product: action.payload })
        default:
            return state
    }
}


export default webReducer