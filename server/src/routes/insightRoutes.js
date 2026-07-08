import express from "express";
import { generateInsight } from "../controllers/insightController.js";

const router = express.Router();

router.post("/", generateInsight);

export default router;