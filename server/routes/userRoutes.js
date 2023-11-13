import express from "express";

import { createUser } from "../controllers/userControllers.js";
import {userValidationRules} from "../middleware/userValidationRules.js";

const router = express.Router();

// Create new user
//http://localhost:3001/user/create

router.post("/create", userValidationRules(), createUser);

export default router;
