import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Cake', required: true }],
  totalAmount: { type: Number, required: true },
}, {
  timestamps: true 
});

const Order = model('order', orderSchema);

export default Order;

// {
//   "_id": ObjectId("5f84bc17c5fca82e7c6b8a1a"),
//   "userId": ObjectId("5f84bc17c5fca82e7c6b8a0f"),
//   "products": [
//     ObjectId("5f84bc17c5fca82e7c6b8a2b"),
//     ObjectId("5f84bc17c5fca82e7c6b8a2c")
//   ],
//   "totalAmount": 50.0,

// }