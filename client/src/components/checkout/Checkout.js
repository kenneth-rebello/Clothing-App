import React from 'react';
import CheckoutItem from './CheckoutItem';
import StripeButton from './StripeButton';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/selectors/cart.selector'; 
import { CheckoutPage, CheckoutHeader, HeaderBlock, Total, Warning } from './checkout.styles';

const Checkout = ({cartItems, total}) => {
    return (
        <CheckoutPage>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span></span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>

            {cartItems.map(item => (<CheckoutItem key={item.id} cartItem={item}/>))}

            <Total>TOTAL: ${total}</Total>
            <Warning>
                *Please use the following test credit card for payment testing using Stripe*
                <br/>
                4242 4242 4242 4242 - Exp 01/20 - CVV: 123
            </Warning>
            <StripeButton price={total}/>
        </CheckoutPage>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout); 