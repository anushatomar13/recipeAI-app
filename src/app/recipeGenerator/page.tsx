"use client";
import { useState } from "react";
import axios from "axios";

function RecipeGenerator() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateRecipe = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/groq", { ingredients });
      setRecipe(res.data.choices[0]?.message?.content || "No recipe found.");
    } catch (error) {
      console.error(error);
      setRecipe("Error fetching recipe.");
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white dark:bg-black rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">AI Recipe Generator</h2>
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter ingredients (e.g., eggs, tomatoes, cheese)"
        className="w-full p-2 mt-3 border rounded-lg dark:bg-gray-900 dark:text-white"
      />
      <button
        onClick={handleGenerateRecipe}
        disabled={loading}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        {loading ? "Generating..." : "Get Recipe"}
      </button>
      {recipe && <p className="mt-4 p-2 border rounded-lg dark:text-white">{recipe}</p>}
    </div>
  );
}

export default RecipeGenerator;
