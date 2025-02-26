import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";

const reviews = [
    {
      name: "Sophia",
      username: "@sophia",
      body: "This AI recipe generator changed my cooking! It gave me a delicious meal idea with just a few ingredients.",
      img: "https://avatar.vercel.sh/sophia",
    },
    {
      name: "Liam",
      username: "@liam",
      body: "I never knew I could cook such amazing dishes with what I had in my fridge. This app is a lifesaver!",
      img: "https://avatar.vercel.sh/liam",
    },
    {
      name: "Olivia",
      username: "@olivia",
      body: "The AI suggestions are so creative! I love how it gives me different meal ideas every time.",
      img: "https://avatar.vercel.sh/olivia",
    },
    {
      name: "Noah",
      username: "@noah",
      body: "I tried a recipe suggested by the AI, and it turned out perfect! I’m impressed by the accuracy.",
      img: "https://avatar.vercel.sh/noah",
    },
    {
      name: "Emma",
      username: "@emma",
      body: "I was struggling to find healthy meal ideas, but this app made it easy. Highly recommended!",
      img: "https://avatar.vercel.sh/emma",
    },
    {
      name: "Oliver",
      username: "@oliver",
      body: "I’m not a great cook, but this app makes it so simple. The step-by-step instructions are super helpful!",
      img: "https://avatar.vercel.sh/oliver",
    },
  ];
  

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
