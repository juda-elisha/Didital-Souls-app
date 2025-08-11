import express from "express";
import { buildRandomizedPrompt } from "../aiRandomizer";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

router.post("/", async (req, res) => {
  const { characterId, message } = req.body;
  if (!characterId || !message) {
    return res.status(400).json({ error: "Missing characterId or message" });
  }
  const prompt = buildRandomizedPrompt(message, characterId);

  try {
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful AI companion. Stay in character and be respectful at all times." },
          { role: "user", content: prompt }
        ],
        max_tokens: 120,
        temperature: 0.8
      })
    });
    const data = await openaiRes.json();
    const aiResponse = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't think of anything to say.";
    res.json({ response: aiResponse });
  } catch (err) {
    res.status(500).json({ response: "AI is currently unavailable. Please try again later." });
  }
});

export default router;
