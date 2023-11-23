// authRoutes.js
import express from "express";
import { loginUser } from "../controllers/authController.js";
import { userLoginValidationRules } from "../middleware/userValidationRules.js";

const router = express.Router();

router.post("/login", userLoginValidationRules(), loginUser);

export default router;
