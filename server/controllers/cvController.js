const { generateCV } = require("../utils/cvGenerator");

function downloadCV(req, res) {
  const { format = "txt" } = req.params;
  const allowed = ["txt", "html", "json", "md"];

  if (!allowed.includes(format.toLowerCase())) {
    return res.status(400).json({ error: "Invalid format. Use: txt, html, json, md" });
  }

  const cv = generateCV(format);
  res.setHeader("Content-Type", cv.mimeType);
  res.setHeader(
    "Content-Disposition",
    `attachment; filename="Aviral_Varshney_CV.${cv.ext}"`
  );
  res.send(cv.content);
}

function getCV(req, res) {
  const { format = "txt" } = req.params;
  const cv = generateCV(format);
  res.json({ content: cv.content, mimeType: cv.mimeType, ext: cv.ext });
}

module.exports = { downloadCV, getCV };
