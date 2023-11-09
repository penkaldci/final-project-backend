import express from 'express';


import { getAllCakes, getCakeById, createCake} from "../controllers/cakeController.js";

const router = express.Router();

//router.use(logCombination); //make middleware active from here (all router endpoints)

//====READ ===//
//GET list of planets
//http://localhost:3001/cakes
router.get("/", getAllCakes);

//====READ ===//
//GET planet by id
//http://localhost:3001/cakes/:id

router.get("/:id", getCakeById);

// Create new cake

router.post("/create", createCake);

export default router;