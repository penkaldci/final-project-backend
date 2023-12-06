import express from "express";

import { getAllUsers, createUser, addUserAddress } from "../controllers/userControllers.js";
import {userRegistrationRules} from "../middleware/userRegistrationRules.js";
import { addAddressRules } from "../middleware/addressRules.js";

const router = express.Router();



//http://localhost:3001/user
router.get("/", getAllUsers )
//http://localhost:3001/user/create
router.post("/create", userRegistrationRules(), createUser);

router.post("/:userId/add-address", addAddressRules(), addUserAddress);

export default router;
