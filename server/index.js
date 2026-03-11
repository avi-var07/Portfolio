require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const rateLimit = require("express-rate-limit");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ───────────────────────────────────────
app.use(cors({ origin: process.env.NODE_ENV === "production" ? false : "*" }));
app.use(express.json({ limit: "10kb" }));

// Rate limiting for chat endpoint (30 req/min per IP)
const chatLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  message: { error: "Too many requests. Please wait a moment." },
});
app.use("/api/chat", chatLimiter);

// ─── API Routes ───────────────────────────────────────
app.use("/api", apiRoutes);

// ─── Serve React build in production ─────────────────
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

// ─── Global error handler ─────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`\n🚀 Aviral Portfolio Server running on http://localhost:${PORT}`);
  console.log(`🤖 AviBot API ready at http://localhost:${PORT}/api/chat`);
  console.log(`📄 CV download at  http://localhost:${PORT}/api/cv/download/[format]\n`);
});
