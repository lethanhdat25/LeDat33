import ACTIONS from '../actions/'

const product =[]

const productReducer = (state = product, action) => {
    switch(action.type){
        case ACTIONS.GET_ALL_PRODUCT:
            return action.payload
        default:
            return state
    }
}

export default productReducer