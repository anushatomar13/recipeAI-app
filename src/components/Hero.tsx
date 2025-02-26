import { TypewriterEffect, TypewriterEffectSmooth } from "./ui/typewriter-effect";
function Hero(){

    const words = [
        {
          text: "FlavorGenie:",
          className: "text-blue-500 dark:text-blue-500",
        },
        {
          text: "AI-Powered",
        },
        {
          text: "Meal",
        },
        {
          text: "Planner",
        },
      ];

    return (
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.14] bg-grid-black/[0.05] relative flex items-center justify-center">
            <TypewriterEffectSmooth words={words} />

</div>
    )
}

export default Hero;