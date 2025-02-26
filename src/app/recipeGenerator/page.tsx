"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Bookmark, BookmarkCheck } from "lucide-react"; // Import icons

export default function RecipeGenerator() {
  const [ingredients, setIngredients] = useState("");
  const [dishes, setDishes] = useState<string[]>([]);
  const [selectedDish, setSelectedDish] = useState<string | null>(null);
  const [recipe, setRecipe] = useState<string | null>(null);
  const [bookmarkedDishes, setBookmarkedDishes] = useState<string[]>([]); // Track bookmarks

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

  function toggleBookmark(dish: string) {
    setBookmarkedDishes((prev) =>
      prev.includes(dish) ? prev.filter((d) => d !== dish) : [...prev, dish]
    );
  }

  return (
    <div className="p-6 space-y-4">
      <Input
        placeholder="Enter ingredients (comma-separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full max-w-2xl h-14 p-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
      />
 <Button className="absolute top-4 right-4">Bookmarks</Button>


      <Button onClick={fetchDishes}>Get Dish Suggestions</Button>

      <div className="flex flex-col space-y-4 py-4">
        {dishes.map((dish) => (
          <Dialog key={dish}>
            <DialogTrigger asChild>
              <Card
                className="cursor-pointer p-4 min-w-[180px] text-center text-white text-lg font-semibold rounded-xl 
                   shadow-md hover:scale-95 font-mono transition-all duration-300 ease-in-out
                   bg-gradient-to-b from-purple-900 to-black hover:from-gray-700 hover:to-gray-900"
                onClick={() => fetchRecipe(dish)}
              >
                <CardContent>{dish}</CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>{selectedDish}</DialogTitle>
              <div dangerouslySetInnerHTML={{ __html: recipe || "Loading recipe..." }} />

              {/* Bookmark Button */}
              <Button
                onClick={() => selectedDish && toggleBookmark(selectedDish)}
                variant="outline"
                className="mt-4 flex items-center gap-2"
              >
                {bookmarkedDishes.includes(selectedDish || "")
                  ? <BookmarkCheck className="w-5 h-5 text-green-500" />
                  : <Bookmark className="w-5 h-5" />}
                {bookmarkedDishes.includes(selectedDish || "") ? "Bookmarked" : "Bookmark"}
              </Button>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
