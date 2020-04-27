import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_XkaXbhi3ND2R3PcjfCEJbkk500ii4kKFvL';
    const onToken = token => {
        console.log(token)
        console.log('Payment don succefully')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description= {`Total is $${price}`}
            amount= {priceForStripe}
            panelLabel= 'Pay Now'
            token= {onToken}
            stripeKey= {publishableKey}
        />
    )


}

export default StripeCheckoutButton;