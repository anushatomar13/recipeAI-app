"use client"

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";



function Hero() {
  const words = [
    {
      text: "FlavorGenie:",
      className: "text-blue-500 dark:text-blue-500",
    },
    { text: "AI-Powered" },
    { text: "Meal" },
    { text: "Planner" },
  ];

  const router = useRouter();

  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.14] bg-grid-black/[0.05] relative flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <TypewriterEffectSmooth words={words} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.5, ease: "easeOut" }} 
        >
         <Button onClick={()=> router.push("/recipeGenerator")} className="bg-blue-500 text-white text-3xl px-6 py-3 rounded-md w-[12rem] h-[3rem] flex items-center justify-center transition-all duration-300
         hover:bg-blue-400 shadow-md hover:border-gray-300 dark:hover:border-gray-700 hover:scale-105 transition-all duration-300"
         >
  Explore
</Button>

        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
