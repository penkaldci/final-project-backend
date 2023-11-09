import { StatusCodes } from "http-status-codes";
import Cake from "../models/Cake.js";

//* Get all cakes
export const getAllCakes = async (req, res) => {
  const cakes = await Cake.find();

  //we're sending the list of cake to the client
  return res.status(StatusCodes.OK).json(cakes);
};
//* Get cake by id
export const getCakeById = async (req, res) => {
  try {
    //look for the planet in our array that has the :id

    const cake = await Cake.findOne({ _id: req.params.id });

    if (!cake) {
      //when the planet doesn't exist --> send back a 404
      return res.status(StatusCodes.NOT_FOUND).json({ message: "not found" });
    }
    //everything went ok send back the tea we found
    return res.status(StatusCodes.OK).json(cake);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error happened", error: error.toString() });
  }
};

//* Create new cake

export const createCake = async (req, res) => {
  try {
    const newCake = await Cake.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
    });

    //respond to the client
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "Post created", newCake });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
