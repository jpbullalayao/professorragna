"use server"

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export const submitPayment = async (amount: number) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
  });

  return paymentIntent;
};
