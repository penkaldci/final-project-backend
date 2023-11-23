import { body } from "express-validator";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter.js";

export const addAddressRules = () => {
  return [
    body("street")
      .trim()
      .notEmpty()
      .withMessage('Field "street" cannot be empty')
      .customSanitizer(capitalizeFirstLetter),
    body("houseNumber")
      .trim()
      .notEmpty()
      .withMessage('Field "houseNumber" cannot be empty'),
    body("postcode")
      .trim()
      .notEmpty()
      .withMessage('Field "postcode" cannot be empty'),
    body("city")
      .trim()
      .notEmpty()
      .withMessage('Field "city" cannot be empty')
      .customSanitizer(capitalizeFirstLetter),
  ];
};
