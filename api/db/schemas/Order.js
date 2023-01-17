const { Schema } = require("mongoose");

const OrderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, require: true },
    address: {
      type: Object,
      require: true,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);
module.exports = OrderSchema;
