const express = require("express");
const router = express.Router();
const { chat, clearSession } = require("../controllers/chatController");
const { downloadCV, getCV } = require("../controllers/cvController");
const aviralData = require("../data/aviralData");

// Chat routes
router.post("/chat", chat);
router.post("/chat/clear", clearSession);

// CV routes
router.get("/cv/download/:format", downloadCV);
router.get("/cv/:format", getCV);

// Portfolio data route (for React frontend)
router.get("/portfolio", (req, res) => {
  res.json(aviralData);
});

// Health check
router.get("/health", (req, res) => {
  res.json({ status: "ok", message: "AviBot server is running 🚀" });
});

module.exports = router;
