"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, type StripeElementsOptionsMode } from "@stripe/stripe-js";

import { Text } from "@/components/text";
import { Button } from "@/components/ui/button";
import {
  PAYMENT_STEP,
  PAYMENT_STEP_NOT_STARTED,
  PAYMENT_STEP_IN_PROGRESS,
  PAYMENT_STEP_SUCCESS,
} from "@/constants/payment-step";

import { TipButton } from "./tip-button";
import { TipForm } from "./tip-form";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
);

export const TipSection = () => {
  const router = useRouter();
  const params = useSearchParams();
  const priceOfSingle = 640;
  const [numDrinks, setNumDrinks] = useState(1);

  const paymentStep =
    params.get("payment") || PAYMENT_STEP[PAYMENT_STEP_NOT_STARTED];

  const amount = priceOfSingle * numDrinks;
  const options: StripeElementsOptionsMode = {
    mode: "payment",
    amount,
    currency: "usd",
  };

  const amountFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount / 100);

  const PAYMENT_STEP_COMPONENT = {
    [PAYMENT_STEP[PAYMENT_STEP_NOT_STARTED]]: (
      <div>
        <div className="flex items-center gap-4 bg-interactive/10 p-4 rounded-lg">
          <Text className="text-5xl">🧋☕</Text>

          <X />

          <div className="flex gap-2">
            <TipButton
              isSelected={numDrinks === 1}
              onClick={() => setNumDrinks(1)}
            >
              1
            </TipButton>
            <TipButton
              isSelected={numDrinks === 2}
              onClick={() => setNumDrinks(2)}
            >
              2
            </TipButton>
            <TipButton
              isSelected={numDrinks === 3}
              onClick={() => setNumDrinks(3)}
            >
              3
            </TipButton>
          </div>
        </div>

        <Button
          className="mt-5 w-[150px]"
          onClick={() => {
            router.push(`?payment=${PAYMENT_STEP[PAYMENT_STEP_IN_PROGRESS]}`, {
              scroll: false,
            });
          }}
        >
          Support {amountFormatted}
        </Button>

        <Text className="my-6 text-xs italic">
          A Tie Guan Yin milk tea with boba from TP Tea is $6.40 <span className="not-italic">😄</span>.
        </Text>
        
      </div>
    ),
    [PAYMENT_STEP[PAYMENT_STEP_IN_PROGRESS]]: (
      <Elements stripe={stripePromise} options={options}>
        <TipForm amount={amount} amountFormatted={amountFormatted} />
      </Elements>
    ),
    [PAYMENT_STEP[PAYMENT_STEP_SUCCESS]]: (
      <div>
        <Text className="my-6">Thank you for your support! 🎉</Text>
      </div>
    ),
  };

  return (
    <div id="tip">
      <h2 className="text-2xl font-bold">Support me 🙏</h2>

      <Text className="my-6">
        {`I love drinking coffee and milk tea, especially when I'm heads down
        working on personal projects. If you enjoy my content or what I'm
        building, feel free to buy me one (or two, or more)!`}
      </Text>

      {/* @ts-ignore */}
      {PAYMENT_STEP_COMPONENT[paymentStep]}
    </div>
  );
};
