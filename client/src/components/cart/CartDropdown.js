import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Button from '../utils/button/Button';
import CartItem from './CartItem';

import {selectCartItems} from '../../redux/selectors/cart.selector';
import {toggleCartHidden} from '../../redux/actions/cart.action';
import { DropdownComtainer, CartItemsDiv, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <DropdownComtainer className="cart-dropdown">
            <CartItemsDiv className="cart-items">
                {cartItems.length ?
                    cartItems.map(item => <CartItem key={item.id} item={item}/>)
                :   <EmptyMessage className="empty-message">Your cart is empty</EmptyMessage>}
            </CartItemsDiv>
            <Button onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>Go To Checkout</Button>
        </DropdownComtainer>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});


export default withRouter(connect(mapStateToProps)(CartDropdown)); 