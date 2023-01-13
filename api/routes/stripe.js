const stripeRoute = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")(KEY);

stripeRoute.post("/payment", (req, res) => {
  console.log(req.body);
  console.log(req.body.tokenId);
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      scurrency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.log("err");
        res.status(500).json(stripeErr);
      } else {
        console.log("success");
        res.status(200).json(stripeRes);
      }
    }
  );
});
module.exports = stripeRoute;
