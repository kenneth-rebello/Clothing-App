import React, { useEffect, useRef } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Button from '../utils/button/Button';
import CartItem from './CartItem';

import {selectCartItems} from '../../redux/selectors/cart.selector';
import {toggleCartHidden} from '../../redux/actions/cart.action';
import { DropdownComtainer, CartItemsDiv, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => {

    const dropdownRef = useRef();

    useEffect(() => {
        document.addEventListener('mousedown', handleClick, false);

        return () => {
            document.removeEventListener('mousedown', handleClick, false);
        }
        // eslint-disable-next-line
    },[]);

    const handleClick = (e) =>{
        if(dropdownRef.current.contains(e.target)){
            return;
        }
        handleClickOutside();
    }

    const handleClickOutside = () => {
        dispatch(toggleCartHidden());
    }

    return (
        <DropdownComtainer className="cart-dropdown" ref={dropdownRef}>
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