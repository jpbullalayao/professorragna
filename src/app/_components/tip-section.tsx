"use client";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { TipForm } from "./tip-form";

const stripePromise = loadStripe("pk_test_51NVigKBptEIrlERHgJMXpMDFuGKHGwQu9BvsFuBQw3dveBw98dw2OZVHehy0s8eQSVLqDW3NuPCVgSBQgDEv34fS00kz7V4wHJ");

export const TipSection = () => {
  const options = {
    // passing the client secret obtained from the server
    // clientSecret: 'sk_test_51NVigKBptEIrlERHdyFU9HVHPubnp9Aewsi0G7RmeRGAtL9XcXazcRvwEDWrRsbvIrpR1fCHlOZfJSJW2BKpoVOC00VHB70TzX',
    mode: 'payment',
    amount: 625,
    currency: 'usd',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <TipForm />
    </Elements>
  );
}
