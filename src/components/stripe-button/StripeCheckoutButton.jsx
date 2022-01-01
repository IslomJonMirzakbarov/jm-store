import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KCfoLBGXRg6AXCejM7bplp00JWX1ilQrzvETVcFUOTdcfNnCAAzMZEhOD9Dj0Twz9UwXDlAAFukPSdtyQs4mgIi00vPv6XYoV";

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="JM Commerce Ltd."
      billingAddress
      shippingAddress
      // image="https://svgshare.com/i/Cuz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      bitcoin={true}
    />
  );
};

export default StripeCheckoutButton;
