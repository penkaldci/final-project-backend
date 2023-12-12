import { StatusCodes } from "http-status-codes";
import Order from "../models/Order.js";
//import Cake from "../models/Cake.js";
import { verifyJwt } from "../helpers/tokenGenerator.js";

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
  const { token, products, totalAmount } = req.body;

  try {
    // Decode the token to get the userId using your verifyJwt function
    const decodedToken = verifyJwt(token);
    console.log('Decoded token:',decodedToken);
    const userId = decodedToken.id;

    // Create the order with the userId
    const newOrder = await Order.create({ userId, products, totalAmount });
    res.status(StatusCodes.CREATED).json(newOrder);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
 /*  try {
    // Decode the token to get the userId using your verifyJwt function
    const decodedToken = verifyJwt(token);
    console.log(decodedToken);
    const userId = decodedToken.id;
    console.log('products', products);

    // Fetch cake details based on Cake IDs
    const cakeDetails = await Cake.find({ _id: { $in: products } });
    console.log('cakeDetails', cakeDetails);

    // Create an array of cake details
    const cakeDetailsArray = cakeDetails.map(cake => ({
      productId: cake._id.toString(), // Convert ObjectId to string
      name: cake.name,
      // Add any other fields for cake details as needed
    }));
    console.log('cakeDetailsArray', cakeDetailsArray);

    // Create the order with cake details
    const newOrder = await Order.create({ userId, products: cakeDetailsArray, totalAmount });
    res.status(StatusCodes.CREATED).json(newOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  } */
};
