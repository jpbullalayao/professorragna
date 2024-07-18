"use client";

import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { Button } from "@/components/ui/button";
import { submitPayment } from '../_actions/submit-payment';

const stripePromise = loadStripe("pk_test_51NVigKBptEIrlERHgJMXpMDFuGKHGwQu9BvsFuBQw3dveBw98dw2OZVHehy0s8eQSVLqDW3NuPCVgSBQgDEv34fS00kz7V4wHJ");

export const TipForm = () => {
  // const stripe = useStripe();
  // const elements = useElements();

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

    console.log('hello');

    const result = await submitPayment();

    // const result = await stripe.confirmPayment({
    //   //`Elements` instance that was used to create the Payment Element
    //   elements,
    //   confirmParams: {
    //     return_url: "https://example.com/order/123/complete",
    //   },
    // });
  }

  return (
    // <Elements stripe={stripePromise} options={options}>
    <Elements stripe={stripePromise} options={options}>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <Button type="submit">$6.25</Button>
      </form>
    </Elements>
  );
};
