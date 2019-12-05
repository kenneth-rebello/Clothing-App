import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM, MINUS_ITEM } from "../types";

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
})

export const addToCart = item => ({
    type: ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: REMOVE_ITEM,
    payload: item
})

export const removeFromCart = item => ({
    type: MINUS_ITEM,
    payload: item
})