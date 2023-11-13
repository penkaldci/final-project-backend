import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cakeRoutes from "./routes/cakeRoutes.js";
import userRoutes from "./routes/userRoutes.js";


dotenv.config();
// Middleware
const app = express();
app.use(cors());

app.use(express.json());


// Database connection
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });

// Routes
//http://localhost:3001
app.use("/cakes", cakeRoutes);
app.use("/user", userRoutes);


// Server instance


app.listen(3001, () => {
    console.log("Server is listening....😃");
  });
  