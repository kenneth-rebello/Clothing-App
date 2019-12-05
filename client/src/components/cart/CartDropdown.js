import React from 'react';
import './cart-dropdown.styles.scss';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Button from '../utils/button/Button';
import CartItem from './CartItem';

import {selectCartItems} from '../../redux/selectors/cart.selector';
import {toggleCartHidden} from '../../redux/actions/cart.action';

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ?
                    cartItems.map(item => <CartItem key={item.id} item={item}/>)
                :   <span className="empty-message">Your cart is empty</span>}
            </div>
            <Button onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>Go To Checkout</Button>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});


export default withRouter(connect(mapStateToProps)(CartDropdown)); 