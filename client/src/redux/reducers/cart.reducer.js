import { TOGGLE_CART_HIDDEN, ADD_ITEM, MINUS_ITEM, REMOVE_ITEM } from "../types";
import {addToCart, minusFromCart} from '../utils/cart.utils';

const initialState = {
    hidden:true,
    cartItems:[]
}

const cartReducer = (state=initialState, action) => {

    const {type, payload} = action;

    switch(type){
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case ADD_ITEM:
            return{
                ...state,
                cartItems: addToCart(state.cartItems, payload)
            }
        case MINUS_ITEM:
            return{
                ...state,
                cartItems: minusFromCart(state.cartItems, payload)
            }
        case REMOVE_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== payload)
            }
        default:
            return state;
    }
}

export default cartReducer;