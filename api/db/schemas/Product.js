//const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true },
  { collection: "products" }
);

module.exports = ProductSchema;
