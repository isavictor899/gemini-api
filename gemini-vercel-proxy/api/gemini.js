export default async function handler(req, res) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const userMessage = req.body.message;

  const response = await fetch(\`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=\${apiKey}\`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: userMessage }]
        }
      ]
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
