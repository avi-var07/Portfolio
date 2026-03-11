const { GoogleGenerativeAI } = require("@google/generative-ai");
const aviralData = require("../data/aviralData");
const { generateCV } = require("../utils/cvGenerator");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// Build the system prompt from live data
function buildSystemPrompt() {
  return `You are AviBot — a friendly, professional AI assistant embedded in Aviral Varshney's portfolio website. You ONLY answer questions about Aviral Varshney. If asked about anything unrelated, politely redirect the conversation back to Aviral.

Here is everything you know about Aviral:

NAME: ${aviralData.name}
DESIGNATION: ${aviralData.designation}
EMAIL: ${aviralData.email}
PHONE: ${aviralData.phone}
LINKEDIN: ${aviralData.linkedin}
GITHUB: ${aviralData.github}
LOCATION: ${aviralData.location}

SUMMARY:
${aviralData.summary}

EDUCATION:
${aviralData.education.map((e) => `- ${e.degree} | ${e.institution}, ${e.location} | ${e.period} | ${e.score}`).join("\n")}

SKILLS:
- Languages: ${aviralData.skills.languages.join(", ")}
- Frameworks: ${aviralData.skills.frameworks.join(", ")}
- Databases: ${aviralData.skills.databases.join(", ")}
- Tools: ${aviralData.skills.tools.join(", ")}
- Soft Skills: ${aviralData.skills.soft.join(", ")}

PROJECTS:
${aviralData.projects
      .map(
        (p) =>
          `- ${p.name} (${p.period}): ${p.description}
  Highlights: ${p.highlights.join("; ")}
  Stack: ${p.stack.join(", ")}
  ${p.live ? `Live: ${p.live}` : ""}
  GitHub: ${p.github}`
      )
      .join("\n\n")}

TRAINING:
${aviralData.training.map((t) => `- ${t.title} at ${t.org} (${t.period}): ${t.topics.join("; ")}`).join("\n")}

ACHIEVEMENTS:
${aviralData.achievements.map((a) => `- ${a.title} — ${a.detail} (${a.date})`).join("\n")}

CERTIFICATIONS:
${aviralData.certifications.map((c) => `- ${c.name} | ${c.issuer} | ${c.date}`).join("\n")}

EXTRA-CURRICULAR:
${aviralData.extracurricular.map((e) => `- ${e.title}: ${e.desc}`).join("\n")}

IMPORTANT INSTRUCTIONS:
1. Be warm, professional, and concise.
2. When someone asks for Aviral's CV, ALWAYS ask: "Sure! In which format would you like Aviral's CV? I can provide it as: **TXT** (plain text), **HTML** (styled), **JSON** (structured), or **Markdown (MD)**. Just say the format name!"
3. When the user says a format (txt, html, json, md/markdown), respond with: "GENERATE_CV:[FORMAT]" — e.g., "GENERATE_CV:txt" — on its own line, followed by a friendly confirmation message.
4. Never make up information. If you don't know something about Aviral, say so.
5. Keep responses under 200 words unless the user asks for detailed info.
6. Use emojis sparingly to stay professional.
7. Always refer to Aviral in third person or address the visitor in second person.`;
}

// Session-based conversation history (in-memory, fine for portfolio)
const sessions = new Map();

async function chat(req, res) {
  try {
    const { message, sessionId } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required." });
    }

    const sid = sessionId || "default";
    if (!sessions.has(sid)) sessions.set(sid, []);
    const history = sessions.get(sid);

    // Add user message
    history.push({ role: "user", content: message.trim() });

    // Keep only last 20 messages to save tokens
    const trimmedHistory = history.slice(-20);

    const geminiHistory = trimmedHistory.map((msg) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: buildSystemPrompt(),
    });

    const result = await model.generateContent({
      contents: geminiHistory,
      generationConfig: { maxOutputTokens: 600 },
    });

    let reply = result.response.text();

    // Check if AI wants to generate a CV
    const cvMatch = reply.match(/GENERATE_CV:(\w+)/i);
    let cvData = null;

    if (cvMatch) {
      const format = cvMatch[1].toLowerCase();
      const generated = generateCV(format);
      cvData = {
        format,
        content: generated.content,
        mimeType: generated.mimeType,
        ext: generated.ext,
        filename: `Aviral_Varshney_CV.${generated.ext}`,
      };
      // Clean the trigger token from reply
      reply = reply.replace(/GENERATE_CV:\w+/gi, "").trim();
    }

    // Add assistant reply to history
    history.push({ role: "assistant", content: reply });
    sessions.set(sid, history.slice(-20));

    res.json({ reply, cvData, sessionId: sid });
  } catch (err) {
    console.error("Chat error:", err.message);
    res.status(500).json({
      error: "AviBot is temporarily unavailable. Please try again!",
      details: err.message,
    });
  }
}

function clearSession(req, res) {
  const { sessionId } = req.body;
  if (sessionId && sessions.has(sessionId)) {
    sessions.delete(sessionId);
  }
  res.json({ success: true });
}

module.exports = { chat, clearSession };
