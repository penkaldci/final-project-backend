
import { body } from 'express-validator';
import validator from 'validator';
import {capitalizeFirstLetter} from '../helpers/capitalizeFirstLetter.js';


// This rules will ensure that the data is in the correct format
export const userValidationRules = () => {
  return [
    body('firstName').notEmpty().withMessage('Field "firstName" cannot be empty').customSanitizer(capitalizeFirstLetter),
    body('lastName').notEmpty().withMessage('Field "lastName" cannot be empty').customSanitizer(capitalizeFirstLetter),
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('password')
      .notEmpty().withMessage('Field "password" cannot be empty')
      .custom(value => {
        if (!validator.isStrongPassword(value, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })) {
          throw new Error('Password must meet the minimum strength requirements');
        }
        return true;
      }),
    body('address.street').notEmpty().withMessage('Field "street" cannot be empty').customSanitizer(capitalizeFirstLetter),
    body('address.houseNumber').notEmpty().withMessage('Field "houseNumber" cannot be empty'),
    body('address.postcode').notEmpty().withMessage('Field "postcode" cannot be empty'),
    body('address.city').notEmpty().withMessage('Field "city" cannot be empty').customSanitizer(capitalizeFirstLetter),
  ];
};


