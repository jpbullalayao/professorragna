"use client";

import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { Button } from "@/components/ui/button";
import { submitPayment } from '../_actions/submit-payment';

export const TipForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const options = {
    // passing the client secret obtained from the server
    // clientSecret: 'sk_test_51NVigKBptEIrlERHdyFU9HVHPubnp9Aewsi0G7RmeRGAtL9XcXazcRvwEDWrRsbvIrpR1fCHlOZfJSJW2BKpoVOC00VHB70TzX',
    mode: 'payment',
    amount: 625,
    currency: 'usd',
  };

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const { error } = await elements.submit();

    const result = await submitPayment();

    console.log('just submitted');

    const paymentResult = await stripe.confirmPayment({
      clientSecret: result.client_secret,
      elements,
      confirmParams: {
        return_url: "?payment=success",
      },
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Button type="submit">$6.25</Button>
    </form>
  );
};
