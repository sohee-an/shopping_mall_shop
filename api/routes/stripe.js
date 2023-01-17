const stripeRoute = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")(
  "sk_test_51MOb2HKLrzQe0UCWwGSGEVIP2iCLuVdhteHHjdNOdEDkEVKvK5mlZ5Hd9E6zfDax6RuRc55Ab65EI1Mh6MH5x4I900r2dC1n1l"
);

stripeRoute.post("/payment", async (req, res) => {
  console.log(req.body);
  console.log(req.body.tokenId);
  const payment = await stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.log("err");
        console.log(stripeErr);
        res.status(500).json(stripeErr);
      } else {
        console.log("success");
        res.status(200).json(stripeRes);
      }
    }
  );
  console.log("payment", payment);
});
// stripeRoute.post("/payment", async (req, res) => {
//   try {
//     const paymentIntent = await stripe.paymentIntents.create(args);
//     console.log("payment", paymentIntent);
//     console.log("No error.");
//   } catch (e) {
//     switch (e.type) {
//       case "StripeCardError":
//         console.log(`A payment error occurred: ${e.message}`);
//         break;
//       case "StripeInvalidRequestError":
//         console.log("An invalid request occurred.");
//         break;
//       default:
//         console.log("Another problem occurred, maybe unrelated to Stripe.");
//         break;
//     }
//   }
// });

module.exports = stripeRoute;
