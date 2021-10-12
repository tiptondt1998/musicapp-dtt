import stripe from 'stripe';
import React from 'react';
import { useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripe = require('stripe')('pk_test_51JOoR1LNbTZxpRZHIMmRhlldbiuvYzMFxtqvSzwgxaIBdWiuYwaXliFvYruoXjhlIhk7VBssOoIVZZH8q50Qock200jlvG3tMl');
// monthly key prod_K34amDxFOKixu9
// yearly key prod_K34buyvzXy22u0
const {priceId} = req.body;
const session = await stripe.checkout.sessions.create({
  mode: 'subscription',
  payment_method_types: ['card'],
  line_items: [
    {
      price: priceId,
      // For metered billing, do not pass quantity
      quantity: 1,
    },
  ],
  // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
  // the actual Session ID is returned in the query parameter when your customer
  // is redirected to the success page.
  success_url: 'https://example.com/success.html?session_id={CHECKOUT_SESSION_ID}',
  cancel_url: 'https://example.com/canceled.html',
});

app.post("/webhook", async (req, res) => {
  let data;
  let eventType;
  // Check if webhook signing is configured.
  const webhookSecret = 'sk_test_51JOoR1LNbTZxpRZHcrb6emNn1qkph2bsTj2pUA6YF7iOmRf4gEA6A5uhW2HsqybbjwddokW2HkpFV7tvLjd0KoFo00wGhL4v4U'
  if (webhookSecret) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;
    let signature = req.headers["stripe-signature"];

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        webhookSecret
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return res.sendStatus(400);
    }
    // Extract the object from the event.
    data = event.data;
    eventType = event.type;
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // retrieve the event data directly from the request body.
    data = req.body.data;
    eventType = req.body.type;
  }

  switch (eventType) {
      case 'checkout.session.completed':
        // Payment is successful and the subscription is created.
        // You should provision the subscription and save the customer ID to your database.
        break;
      case 'invoice.paid':
        // Continue to provision the subscription as payments continue to be made.
        // Store the status in your database and check when a user accesses your service.
        // This approach helps you avoid hitting rate limits.
        <Link to='/downloads'></Link>
        break;
      case 'invoice.payment_failed':
        // The payment failed or the customer does not have a valid payment method.
        // The subscription becomes past_due. Notify your customer and send them to the
        // customer portal to update their payment information.
        break;
      default:
      // Unhandled event type
    }

  res.sendStatus(200);
});

const charge = await stripe.charges.create({
  amount=`${data.price}`,
  source: `${data.name}`,
  currency: 'USD',
  description: "First Test Charge"

  });

const App = () => {
  const stripe = loadStripe(
    "pk_test_51JOoR1LNbTZxpRZHIMmRhlldbiuvYzMFxtqvSzwgxaIBdWiuYwaXliFvYruoXjhlIhk7VBssOoIVZZH8q50Qock200jlvG3tMl"
  );
  return (
    <Elements stripe={stripe}>
      <CheckoutForm />
    </Elements>
  );
};

const payMoney = async (e) => {
  e.preventDefault();
  const clientSecret = "sk_test_51JOoR1LNbTZxpRZHcrb6emNn1qkph2bsTj2pUA6YF7iOmRf4gEA6A5uhW2HsqybbjwddokW2HkpFV7tvLjd0KoFo00wGhL4v4U";
  const paymentResult = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: elements.getElement(CardElement),
      billing_details: {
        name: `${data.name}`,
      },
    },
  });
  setPaymentLoading(false);
  if (paymentResult.error) {
    alert(paymentResult.error.message);
    console.log(paymentResult.error.message);
  } else {
    if (paymentResult.paymentIntent.status === "succeeded") {
      alert("Success!");
      console.log(paymentResult);
    }
  }
};

function CheckoutForm() {
  const [isPaymentLoading, setPaymentLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const payMoney = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setPaymentLoading(true);
    const clientSecret = getClientSecret();
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Faruq Yusuff",
        },
      },
    });
    setPaymentLoading(false);
    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Success!");
      }
    }
  };

  return (
    <div
      style={{
        padding: "3rem",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <form
          style={{
            display: "block",
            width: "100%",
          }}
          onSubmit = {payMoney}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardElement
              className="card"
              options={{
                style: {
                  base: {
                    backgroundColor: "white"
                  } 
                },
              }}
            />
            <button
              className="pay-button"
              disabled={isPaymentLoading}
            >
              {isPaymentLoading ? "Loading..." : "Pay"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}