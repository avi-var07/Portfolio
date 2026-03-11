const data = require("../data/aviralData");

function generateCV(format = "txt") {
  switch (format.toLowerCase()) {
    case "txt":
    case "text":
      return { content: generateTxt(), mimeType: "text/plain", ext: "txt" };
    case "html":
      return { content: generateHtml(), mimeType: "text/html", ext: "html" };
    case "json":
      return {
        content: JSON.stringify(generateJson(), null, 2),
        mimeType: "application/json",
        ext: "json",
      };
    case "md":
    case "markdown":
      return { content: generateMd(), mimeType: "text/markdown", ext: "md" };
    default:
      return { content: generateTxt(), mimeType: "text/plain", ext: "txt" };
  }
}

function generateTxt() {
  return `AVIRAL VARSHNEY — ${data.designation}
${"=".repeat(60)}
Email: ${data.email} | Phone: ${data.phone}
LinkedIn: ${data.linkedin}
GitHub: ${data.github}
${"=".repeat(60)}

SUMMARY
-------
${data.summary}

EDUCATION
---------
${data.education.map((e) => `${e.degree}\n${e.institution}, ${e.location}\n${e.period} | ${e.score}`).join("\n\n")}

SKILLS
------
Languages   : ${data.skills.languages.join(", ")}
Frameworks  : ${data.skills.frameworks.join(", ")}
Databases   : ${data.skills.databases.join(", ")}
Tools       : ${data.skills.tools.join(", ")}
Concepts    : ${data.skills.concepts.join(", ")}
Soft Skills : ${data.skills.soft.join(", ")}

PROJECTS
--------
${data.projects
  .map(
    (p, i) =>
      `[${i + 1}] ${p.name} (${p.period})
    ${p.description}
    Highlights:
${p.highlights.map((h) => `    • ${h}`).join("\n")}
    Tech: ${p.stack.join(", ")}`
  )
  .join("\n\n")}

TRAINING
--------
${data.training
  .map(
    (t) =>
      `${t.title} | ${t.org} | ${t.period}
${t.topics.map((tp) => `• ${tp}`).join("\n")}`
  )
  .join("\n\n")}

ACHIEVEMENTS
------------
${data.achievements.map((a) => `• ${a.title} — ${a.detail} (${a.date})`).join("\n")}

CERTIFICATIONS
--------------
${data.certifications.map((c) => `• ${c.name} | ${c.issuer} | ${c.date}`).join("\n")}
`;
}

function generateHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.name} — CV</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', sans-serif; color: #1a1a2e; max-width: 860px; margin: 40px auto; padding: 0 28px; line-height: 1.7; }
    h1 { font-size: 2.2rem; color: #003366; border-bottom: 3px solid #0077aa; padding-bottom: 10px; margin-bottom: 6px; }
    .subtitle { color: #0077aa; font-size: 1.1rem; font-weight: 600; margin-bottom: 10px; }
    .contact { color: #555; font-size: .95rem; margin-bottom: 28px; }
    .contact a { color: #0077aa; }
    h2 { color: #003366; border-bottom: 1.5px solid #ccd; padding-bottom: 4px; margin: 28px 0 12px; font-size: 1.15rem; letter-spacing: 1px; text-transform: uppercase; }
    p { color: #444; margin-bottom: 8px; }
    .tag { display: inline-block; background: #e8f4fd; border-radius: 3px; padding: 2px 9px; margin: 2px; font-size: .82rem; color: #0077aa; border: 1px solid #bde; }
    .proj { background: #f8fbff; border-left: 3px solid #0077aa; padding: 14px 16px; margin-bottom: 14px; border-radius: 0 6px 6px 0; }
    .proj h3 { color: #003366; font-size: 1rem; }
    .proj .period { color: #888; font-size: .82rem; margin-bottom: 6px; }
    ul { padding-left: 20px; color: #444; }
    li { margin-bottom: 3px; }
    .score { display: inline-block; background: #fff3cd; border: 1px solid #ffc107; padding: 2px 10px; border-radius: 3px; font-weight: 600; font-size: .88rem; color: #856404; }
    .edu-block { margin-bottom: 12px; padding: 12px 14px; border: 1px solid #e0e8f0; border-radius: 6px; }
    .ach { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid #eee; }
    .cert-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    .cert { background: #f0f8f0; padding: 8px 12px; border-radius: 4px; font-size: .88rem; border-left: 3px solid #28a745; }
    @media print { body { margin: 20px; } }
  </style>
</head>
<body>
  <h1>${data.name}</h1>
  <div class="subtitle">${data.designation}</div>
  <div class="contact">
    ${data.email} &nbsp;|&nbsp; ${data.phone} &nbsp;|&nbsp; ${data.location}<br>
    <a href="${data.linkedin}" target="_blank">LinkedIn</a> &nbsp;|&nbsp;
    <a href="${data.github}" target="_blank">GitHub</a>
  </div>

  <h2>Summary</h2>
  <p>${data.summary}</p>

  <h2>Education</h2>
  ${data.education.map((e) => `<div class="edu-block"><strong>${e.degree}</strong><br><span style="color:#0077aa">${e.institution}</span>, ${e.location}<br><span style="color:#888;font-size:.88rem">${e.period}</span> &nbsp; <span class="score">${e.score}</span></div>`).join("")}

  <h2>Skills</h2>
  <p><strong>Languages:</strong> ${data.skills.languages.map((s) => `<span class="tag">${s}</span>`).join(" ")}</p>
  <p><strong>Frameworks:</strong> ${data.skills.frameworks.map((s) => `<span class="tag">${s}</span>`).join(" ")}</p>
  <p><strong>Databases & Tools:</strong> ${[...data.skills.databases, ...data.skills.tools].map((s) => `<span class="tag">${s}</span>`).join(" ")}</p>
  <p><strong>Soft Skills:</strong> ${data.skills.soft.map((s) => `<span class="tag" style="background:#f0fff4;border-color:#a8d5b5;color:#1a6b3a">${s}</span>`).join(" ")}</p>

  <h2>Projects</h2>
  ${data.projects
    .map(
      (p) => `<div class="proj">
    <h3>${p.name} <span style="color:#888;font-weight:400;font-size:.85rem">(${p.type})</span></h3>
    <div class="period">${p.period}${p.live ? ` &nbsp;·&nbsp; <a href="${p.live}">Live Site</a>` : ""} &nbsp;·&nbsp; <a href="${p.github}">GitHub</a></div>
    <p style="font-size:.92rem">${p.description}</p>
    <ul>${p.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
    <div style="margin-top:8px">${p.stack.map((s) => `<span class="tag">${s}</span>`).join(" ")}</div>
  </div>`
    )
    .join("")}

  <h2>Training</h2>
  ${data.training.map((t) => `<div class="edu-block"><strong>${t.title}</strong><br><span style="color:#0077aa">${t.org}</span> &nbsp;·&nbsp; <span style="color:#888;font-size:.88rem">${t.period}</span><ul style="margin-top:8px">${t.topics.map((tp) => `<li>${tp}</li>`).join("")}</ul></div>`).join("")}

  <h2>Achievements</h2>
  ${data.achievements.map((a) => `<div class="ach"><span style="font-size:1.3rem">🏆</span><div><strong>${a.title}</strong><br><span style="color:#888;font-size:.85rem">${a.detail} · ${a.date}</span></div></div>`).join("")}

  <h2>Certifications</h2>
  <div class="cert-grid">${data.certifications.map((c) => `<div class="cert"><strong style="font-size:.9rem">${c.name}</strong><br><span style="color:#555;font-size:.78rem">${c.issuer} · ${c.date}</span></div>`).join("")}</div>
</body>
</html>`;
}

function generateJson() {
  return {
    $schema: "https://jsonresume.org/schema",
    basics: {
      name: data.name,
      label: data.designation,
      email: data.email,
      phone: data.phone,
      location: { city: "Punjab", countryCode: "IN" },
      profiles: [
        { network: "LinkedIn", url: data.linkedin },
        { network: "GitHub", url: data.github },
      ],
      summary: data.summary,
    },
    education: data.education.map((e) => ({
      institution: e.institution,
      area: e.degree,
      studyType: "Bachelor",
      startDate: e.period.split("–")[0].trim(),
      endDate: e.period.split("–")[1]?.trim() || "Present",
      score: e.score,
    })),
    skills: [
      { name: "Languages", keywords: data.skills.languages },
      { name: "Frameworks", keywords: data.skills.frameworks },
      { name: "Databases", keywords: data.skills.databases },
      { name: "Tools", keywords: data.skills.tools },
    ],
    work: data.projects.map((p) => ({
      name: p.name,
      position: p.type,
      startDate: p.period.split("–")[0].trim(),
      endDate: p.period.split("–")[1]?.trim() || "Present",
      summary: p.description,
      highlights: p.highlights,
      url: p.live || p.github,
    })),
    certificates: data.certifications.map((c) => ({
      name: c.name,
      issuer: c.issuer,
      date: c.date,
    })),
    awards: data.achievements.map((a) => ({
      title: a.title,
      awarder: a.detail,
      date: a.date,
    })),
  };
}

function generateMd() {
  return `# ${data.name} — ${data.designation}

> ${data.email} | ${data.phone} | [LinkedIn](${data.linkedin}) | [GitHub](${data.github})

## Summary
${data.summary}

## Education
| Degree | Institution | Period | Score |
|--------|------------|--------|-------|
${data.education.map((e) => `| ${e.degree} | ${e.institution} | ${e.period} | **${e.score}** |`).join("\n")}

## Skills
- **Languages**: ${data.skills.languages.join(" · ")}
- **Frameworks**: ${data.skills.frameworks.join(" · ")}
- **Databases**: ${data.skills.databases.join(" · ")}
- **Tools**: ${data.skills.tools.join(" · ")}
- **Soft Skills**: ${data.skills.soft.join(" · ")}

## Projects
${data.projects
  .map(
    (p) => `### ${p.name} *(${p.type})* — ${p.period}
${p.description}

**Key Highlights:**
${p.highlights.map((h) => `- ${h}`).join("\n")}

\`${p.stack.join(" · ")}\`
`
  )
  .join("\n")}

## Training
${data.training.map((t) => `### ${t.title}\n**${t.org}** | ${t.period}\n${t.topics.map((tp) => `- ${tp}`).join("\n")}`).join("\n\n")}

## Achievements
${data.achievements.map((a) => `- 🏆 **${a.title}** — ${a.detail} *(${a.date})*`).join("\n")}

## Certifications
${data.certifications.map((c) => `- **${c.name}** | ${c.issuer} | ${c.date}`).join("\n")}
`;
}

module.exports = { generateCV };
