import React from 'react';
import { CartItemComponent, Details, Name } from './cart-item.styles';

const CartItem = ({item:{ imageUrl, price, name, quantity }}) => {
    return (
        <CartItemComponent>
            <img src={imageUrl} alt={name} />
            <Details>  
                <Name>{name}</Name>
                <Name>{quantity} x {price}</Name>
            </Details>
        </CartItemComponent>
    )
}

export default React.memo(CartItem); 