import express from "express";
import cors from "cors";

import insightRoutes from "./routes/insightRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.json({
    message: "🚀 TechQuest API is running!",
  });
});

// Insight API
app.use("/api/insight", insightRoutes);

export default app;