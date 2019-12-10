import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_eJEh8Ae2IMY6e4AIwpOp6IFF00aLotrRau';

    const onToken = token => {
        const body = {
            amount: priceForStripe,
            token
        }
        axios.post('/payment', body).then(response => {
            alert('Payment Succesful');
        }).catch(error => {
            console.log('Payment error', JSON.parse(error));
        })
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Crown Clothing"
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton 