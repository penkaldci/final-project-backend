import { StatusCodes } from "http-status-codes";
import Order from "../models/Order.js";

// Controller to get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    return res.status(StatusCodes.OK).json(orders);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

// Controller to create a new order
export const createOrder = async (req, res) => {
  const { userId, products, totalAmount } = req.body;

  try {
    const newOrder = await Order.create({ userId, products, totalAmount });
    res.status(StatusCodes.CREATED).json(newOrder);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};
