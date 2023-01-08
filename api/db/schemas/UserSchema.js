const { Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, collection: "users", versionKey: false }
);

module.exports = UserSchema;
