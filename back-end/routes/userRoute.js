import express from "express";
import {
  signupUser,
  loginUser,
  logoutUser,
  updateUser,
  getUserProfile,
} from "../controllers/userController.js";
import protectRoute from "../middlewares/protectRoute.js";
import { get } from "mongoose";

const router = express.Router();

router.get("/profile/:username", getUserProfile);
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/update/:id", protectRoute, updateUser);

export default router;
