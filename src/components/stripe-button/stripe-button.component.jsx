import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

//stripe wants the value of price to be in cents
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Rp0dBbUAWuF38sgAAVRGKRos00bADFprES';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  //info found at Stripecheckout github
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddresss
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
