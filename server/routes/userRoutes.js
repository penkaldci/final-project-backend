import express from "express";

import { createUser } from "../controllers/userControllers.js";
import {userRegistrationRules} from "../middleware/userRegistrationRules.js";

const router = express.Router();

// Create new user
//http://localhost:3001/user/create

router.post("/create", userRegistrationRules(), createUser);

export default router;
