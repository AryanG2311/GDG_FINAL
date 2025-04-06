import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cowRoutes from "./routes/cowRoutes.js";
import ownerRoutes from "./routes/ownerRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

const app = express();
app.use(express.json()); 


// Update CORS configuration to allow requests from 'http://localhost:5173'


const allowedOrigins = [
  "https://gdg-final-az9d.vercel.app", // no trailing slash
  "https://gdg-final-az9d.vercel.app/" // add both to be safe
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));
app.use(cookieParser());

app.use("/api/cows", cowRoutes);
app.use("/api/owners", ownerRoutes); 




const PORT = process.env.PORT || 4200;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
