import { StatusCodes } from "http-status-codes";
import { validationResult } from "express-validator";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { generateJwt } from "../helpers/tokenGenerator.js"; // This is the function to generate a jwt token

export const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Invalid credentials", errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "User does not exist!" });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Wrong password!" });
    }

    // Generate JWT token
    const token = generateJwt(user._id);

    return res
      .status(StatusCodes.OK)
      .json({ message: "Login successful", email: email, firstName: user.firstName, token, id: user._id });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error occurred", error: error.toString() });
  }
};
