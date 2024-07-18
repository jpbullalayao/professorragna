"use server"

import Stripe from 'stripe';

const stripe = new Stripe("sk_test_51NVigKBptEIrlERHdyFU9HVHPubnp9Aewsi0G7RmeRGAtL9XcXazcRvwEDWrRsbvIrpR1fCHlOZfJSJW2BKpoVOC00VHB70TzX");

export const submitPayment = async () => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 625, // Amount in cents
    currency: 'usd',
  });

  console.log('paymentIntent', paymentIntent);
};
