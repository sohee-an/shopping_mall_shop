const { Schema } = require("mongoose");

const CartSchema = new Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        type: new Schema(
          {
            product: {
              type: Schema.Types.ObjectId,
              ref: "products",
              required: true,
            },
            quantity: {
              type: Number,
              default: 1,
              required: true,
            },
            color: {
              type: String,
              required: true,
            },
            size: {
              type: String,
              required: true,
            },
            total: {
              type: Number,
              required: true,
            },
          },
          {
            _id: false,
          }
        ),
      },
    ],
  },
  { timestamps: true }
);
module.exports = CartSchema;
