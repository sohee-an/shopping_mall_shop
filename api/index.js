const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/productRouter");
const cartRouter = require("./routes/cartRouter");
const orderRouter = require("./routes/orderRouter");
const stripeRoute = require("./routes/stripe");

// dotenv.config({ origin: "http://localhost:3000", credentials: true });

mongoose
  .connect(process.env.MONBO_URL)
  .then(() => console.log("connect!"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 5000, () => {
  console.log("Backed server is running!");
});
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/checkout", stripeRoute);
