import { getAllVideos, postVideo } from "../controllers/postController.js";
import express from "express";

const router = express.Router();

router.route("/").get(getAllVideos).post(postVideo);

export default router;
