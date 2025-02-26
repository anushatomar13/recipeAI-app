import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groqApiKey = process.env.GROQ_API_KEY;

if (!groqApiKey) {
  throw new Error("GROQ_API_KEY is missing from environment variables!");
}

const groq = new Groq({ apiKey: groqApiKey });

export async function POST(request: Request) {
  try {
    const { ingredients } = await request.json();

    if (!ingredients || ingredients.trim() === "") {
      return NextResponse.json(
        { error: "Recipe ingredients required!" },
        { status: 400 }
      );
    }

    const prompt = `I have the following ingredients: ${ingredients}. Suggest exactly 5 dish names, each on a new line, without any extra text or numbering.`;

    const recipeSuggestion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama3-8b-8192",
    });

    const responseMessage = recipeSuggestion.choices[0]?.message?.content?.trim() || "";

    if (!responseMessage) {
      return NextResponse.json({ error: "No response from Groq" }, { status: 500 });
    }

    // Extract dish names from response
    const dishes = responseMessage.split("\n").map((dish) => dish.trim()).filter(Boolean);

    if (dishes.length !== 5) {
      return NextResponse.json({ error: "Invalid response format from Groq" }, { status: 500 });
    }

    return NextResponse.json({ dishes });
  } catch (error) {
    console.error("Error in /api/groq:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}
