import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookiesParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";
import { v2 as cloudinary } from "cloudinary";

const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Middlewares
app.use(express.json()); // to parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })); // to parse form data in the req.body
app.use(cookiesParser()); // to parse cookies in the req.cookies

//Routes
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});
