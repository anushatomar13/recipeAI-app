"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function RecipeGenerator() {
  const [ingredients, setIngredients] = useState("");
  const [dishes, setDishes] = useState<string[]>([]);
  const [selectedDish, setSelectedDish] = useState<string | null>(null);
  const [recipe, setRecipe] = useState<string | null>(null);

  async function fetchDishes() {
    const res = await fetch("/api/groq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredients }),
    });

    const data = await res.json();
    if (data.dishes) {
      setDishes(data.dishes);
    } else {
      alert("Error fetching dishes!");
    }
  }

  async function fetchRecipe(dish: string) {
    setSelectedDish(dish);
    setRecipe(null); // Reset before fetching

    const res = await fetch("/api/spoonacular", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dish }),
    });

    const data = await res.json();
    setRecipe(data.recipe || "No recipe found.");
  }

  return (
    <div className="p-6 space-y-4">
      <Input
        placeholder="Enter ingredients (comma-separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <Button onClick={fetchDishes}>Get Dish Suggestions</Button>

      <div className="flex space-x-4 overflow-x-auto py-4">
        {dishes.map((dish) => (
          <Dialog key={dish}>
            <DialogTrigger asChild>
              <Card
                className="cursor-pointer p-4 min-w-[150px] text-center bg-gray-100 hover:bg-gray-200 transition"
                onClick={() => fetchRecipe(dish)}
              >
                <CardContent>{dish}</CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <h2 className="text-xl font-bold">{selectedDish}</h2>
              <p>{recipe || "Loading recipe..."}</p>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
