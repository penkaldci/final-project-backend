import { Schema, model } from "mongoose";

const cakeSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    
  },
  { timestamps: true }
);
const Cake = model("cake", cakeSchema);

export default Cake;
