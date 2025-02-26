import { NextResponse } from "next/server";

const spoonacularApiKey = process.env.SPOONACULAR_API_KEY;

if (!spoonacularApiKey) {
  throw new Error("SPOONACULAR_API_KEY is missing from environment variables!");
}

export async function POST(request: Request) {
  try {
    const { dish } = await request.json();

    if (!dish || dish.trim() === "") {
      return NextResponse.json(
        { error: "Dish name required!" },
        { status: 400 }
      );
    }

    const spoonacularUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(
      dish
    )}&number=1&apiKey=${spoonacularApiKey}`;

    const response = await fetch(spoonacularUrl);
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      return NextResponse.json({ recipe: "No recipe found." });
    }

    const recipeId = data.results[0].id;
    const recipeDetailsUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${spoonacularApiKey}`;
    const recipeDetailsResponse = await fetch(recipeDetailsUrl);
    const recipeDetails = await recipeDetailsResponse.json();

    return NextResponse.json({
      recipe: recipeDetails.instructions || "No instructions available.",
    });
  } catch (error) {
    console.error("Error in /api/spoonacular:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching the recipe" },
      { status: 500 }
    );
  }
}
