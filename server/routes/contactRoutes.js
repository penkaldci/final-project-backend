import express from "express";

import {createMessage} from "../controllers/contactController.js";

const router = express.Router();

// Create new Message
// http://localhost:3001/contact/create

router.post("/create", createMessage);

export default router;