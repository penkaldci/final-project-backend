import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Invalid email address format",
      },
    },
    password: { type: String, required: true },
    address: {
      street: { type: String, required: true },
      houseNumber: { type: String, required: true },
      postcode: { type: String, required: true },
      city: { type: String, required: true },
    },
  },
  { timestamps: true }
);
const User = model("user", userSchema);

export default User;
