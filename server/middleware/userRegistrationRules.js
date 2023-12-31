import { body } from "express-validator";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter.js";
import validator from "validator";

export const userRegistrationRules = () => {
  return [
    body("firstName")
      .trim()
      .notEmpty()
      .withMessage('Field "firstName" cannot be empty')
      .customSanitizer(capitalizeFirstLetter),
    body("lastName")
      .trim()
      .notEmpty()
      .withMessage('Field "lastName" cannot be empty')
      .customSanitizer(capitalizeFirstLetter),
    body("email")
      .trim()
      .isEmail()
      .withMessage("Please provide a valid email address"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage('Field "password" cannot be empty')
      .custom((value) => {
        if (
          !validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          })
        ) {
          throw new Error(
            "Password must meet the minimum strength requirements"
          );
        }
        return true;
      }),
  ];
};

