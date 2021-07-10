import react from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JBa6bIfkKOa3Q3g4LpRk9DOEGbGpfLJ2eroeL7GX8MHrcGOR0mG8vmlu7NX6B9pNkoRbLASISTiqJfEkCxdalDz00uRmO94GS";
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
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

export default StripeCheckoutButton