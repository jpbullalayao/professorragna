"use client";

import { useState } from "react";

import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/text";
import { submitPayment } from "../_actions/submit-payment";

interface Props {
  amount: number;
  amountFormatted: string;
}

export const TipForm: React.FC<Props> = ({ amount, amountFormatted }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      return;
    }

    const { error } = await elements.submit();
    if (error) {
      setErrorMsg(error.message);
      return;
    }

    const { client_secret: clientSecret } = await submitPayment(amount);

    const { error: paymentError } = await stripe.confirmPayment({
      // @ts-ignore
      clientSecret,
      elements,
      confirmParams: {
        return_url: `${window.location.origin}?payment=success#tip`,
      },
    });

    if (paymentError) {
      setErrorMsg(paymentError.message);
    }
  };

  return (
    <>
      <form>
        <PaymentElement />
      </form>

      <Button className="mt-5 w-[150px]" onClick={handleSubmit}>
        Support {amountFormatted}
      </Button>

      {errorMsg && <Text className="text-red-500">{errorMsg}</Text>}
    </>
  );
};
