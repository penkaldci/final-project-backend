import mongoose from "mongoose";
import 'dotenv/config'
import express from "express";
import cors from "cors";
import cakeRoutes from "./routes/cakeRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js"


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
app.use("/auth", authRoutes);
app.use("/api", orderRoutes);

// Server instance

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} ....😃`);
});
