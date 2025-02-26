"use client";

import { MagicCard } from "./magicui/magic-card";
import { useTheme } from "next-themes";

function Features() {
  const { theme } = useTheme(); // Extract theme properly

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-100 dark:bg-black dark:bg-grid-white/[0.14] bg-grid-black/[0.05]">
      {/* Features Title */}
      <h2 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">
        Features
      </h2>

      {/* Features Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {/* Feature 1 */}
        <MagicCard
          className="cursor-pointer flex flex-col items-center justify-center p-6 w-72 h-40 text-xl font-semibold bg-white dark:bg-gray-900 rounded-xl shadow-lg"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          AI-Powered Recipe Suggestions
        </MagicCard>

        {/* Feature 2 */}
        <MagicCard
          className="cursor-pointer flex flex-col items-center justify-center p-6 w-72 h-40 text-xl font-semibold bg-white dark:bg-gray-900 rounded-xl shadow-lg"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Smart Ingredient Analyzer
        </MagicCard>

        {/* Feature 3 */}
        <MagicCard
          className="cursor-pointer flex flex-col items-center justify-center p-6 w-72 h-40 text-xl font-semibold bg-white dark:bg-gray-900 rounded-xl shadow-lg"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Personalized Meal Plans
        </MagicCard>

        {/* Feature 4 */}
        <MagicCard
          className="cursor-pointer flex flex-col items-center justify-center p-6 w-72 h-40 text-xl font-semibold bg-white dark:bg-gray-900 rounded-xl shadow-lg"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Nutritional Insights
        </MagicCard>
      </div>
    </section>
  );
}

export default Features;
