import dotenv from "dotenv";

// Load environment variables BEFORE importing anything else
dotenv.config();

const { default: app } = await import("./app.js");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});