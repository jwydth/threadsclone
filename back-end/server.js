import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookiesParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";

const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

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
