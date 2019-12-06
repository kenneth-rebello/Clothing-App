import React from 'react';
import './checkout.styles.scss';
import CheckoutItem from './CheckoutItem';
import StripeButton from './StripeButton';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/selectors/cart.selector'; 

const Checkout = ({cartItems, total}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span></span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map(item => (<CheckoutItem key={item.id} cartItem={item}/>))}

            <div className="total">TOTAL: ${total}</div>
            <div className="test-warning">
                *Please use the following test credit card for payment testing using Stripe*
                <br/>
                4242 4242 4242 4242 4242 - Exp 01/20 - CVV: 123
            </div>
            <StripeButton price={total}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout); 