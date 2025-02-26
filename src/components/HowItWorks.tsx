import { Card } from "./ui/card";

function HowItWorks() {

    const steps = [
        { id: 1, description: "Enter ingredients you have." },
        { id: 2, description: "Get AI-suggested meal ideas." },
        { id: 3, description: "View detailed recipes with steps." },
        { id: 4, description: "Save favorite recipes to your profile." },
        { id: 5, description: "Adjust servings & get ingredient substitutes." },
      ];
      
      


  return (
    <section className="flex flex-col justify-center items-center min-h-screen px-6 py-12 bg-gray-100 dark:bg-black dark:bg-grid-white/[0.14] bg-grid-black/[0.05]">
      <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-20">
        How it works?
      </h2>
      
      <div className="grid md:grid-cols-3 gap-4">
       {steps.map((step)=> (
    <Card key={step.id} className="p-4">
        <p className="text-lg font-semibold">{step.id}. {step.description}</p>
    </Card>
       ))}
      </div>
    </section>
  );
}

export default HowItWorks;
