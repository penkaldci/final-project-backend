import express from 'express';
import { getAllOrders, createOrder } from '../controllers/orderController.js';

const router = express.Router();

// Route to get all orders
router.get('/orders', getAllOrders);

// Route to create a new order
router.post('/orders', createOrder);

export default router;
