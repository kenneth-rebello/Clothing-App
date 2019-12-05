export const addToCart = (cartItems, toAdd) => {
    const existing = cartItems.find(cartItem => cartItem.id === toAdd.id);

    if(existing){
        return cartItems.map(cartItem => 
            cartItem.id === toAdd.id ? {...cartItem, quantity:cartItem.quantity +1}   
                            : cartItem
        )
    }

    return [...cartItems, {...toAdd, quantity: 1}]
}

export const minusFromCart = (cartItems, toMinus) => {
    const existing = cartItems.find(cartItem => cartItem.id === toMinus.id);

    if(existing.quantity === 1){
        return cartItems.filter(item => item.id !== toMinus.id);
    }

    return cartItems.map(item => item.id === toMinus.id ? {...item, quantity: item.quantity-1} : item)
}