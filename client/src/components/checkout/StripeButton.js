import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_eJEh8Ae2IMY6e4AIwpOp6IFF00aLotrRau';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
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