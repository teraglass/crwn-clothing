import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JBa6bIfkKOa3Q3g4LpRk9DOEGbGpfLJ2eroeL7GX8MHrcGOR0mG8vmlu7NX6B9pNkoRbLASISTiqJfEkCxdalDz00uRmO94GS';

  const onToken = token => {
   axios({
     url: 'payment',
     method:'post',
     data: {
       amount: priceForStripe,
       token: token
     }
   }).then(response => {
     alert('Payment successful')
   }).catch(error => {
     console.log('Payment error: ', error);
     alert(
       'There was an issue with your payment. Please sure you use provided credit card.'
     )
   })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
