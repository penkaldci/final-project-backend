import { StatusCodes } from "http-status-codes";
import { validationResult } from "express-validator";
import User from "../models/User.js";

//* Create new user

export const createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "ValidationError occurred", errors: errors.array() });
  }
  const {
    firstName,
    lastName,
    email,
    password,
    address: { street, houseNumber, postcode, city },
  } = req.body;

  try {
    // Checking if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Email already registered!" });
    }

    // Creating new user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password,
      address: {
        street,
        houseNumber,
        postcode,
        city,
      },
    });

    //
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "User created", newUser });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "ValidationError happened", error: error.toString() });
    }

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error happened", error: error.toString() });
  }
};
