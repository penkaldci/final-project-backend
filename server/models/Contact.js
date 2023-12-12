import { Schema, model } from "mongoose";

const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Invalid email address format",
      },
    },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact = model("contact", contactSchema);

export default Contact;
