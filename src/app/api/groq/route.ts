import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { ingredients } = await req.json(); // Get ingredients from request body

    const response = await axios.post(
      "https://api.groq.com/v1/chat/completions",
      {
        model: "llama3-8b-8192", // Or another model Groq provides
        messages: [
          { role: "system", content: "You are a helpful AI recipe generator." },
          { role: "user", content: `Suggest a recipe using these ingredients: ${ingredients}` },
        ],
        max_tokens: 500,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Groq API error:", error);
    return NextResponse.json({ error: "Failed to fetch recipes" }, { status: 500 });
  }
}
