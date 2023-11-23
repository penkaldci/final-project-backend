// userValidationRules.js
import { body } from "express-validator";


export const userLoginValidationRules = () => {
  return [
    body("email")
      .trim()
      .isEmail()
      .withMessage("Please provide a valid email address"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage('Field "password" cannot be empty'),
  ];
};
