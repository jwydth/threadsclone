import express from "express";
import {
  createPosts,
  getPosts,
  deletePosts,
  likeUnlikePost,
  replyToPost,
} from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/:id", getPosts);
router.post("/create", protectRoute, createPosts);
router.delete("/:id", protectRoute, deletePosts);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/reply/:id", protectRoute, replyToPost);

export default router;
