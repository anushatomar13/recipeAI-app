import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
        "rounded border bg-white dark:bg-gray-900 shadow-sm p-4 min-h-[2rem] min-w-[15rem] border-white",
        "hover:shadow-md hover:border-gray-300 dark:hover:border-gray-700 hover:scale-105 transition-all duration-300",
        className
      )}
    {...props}
  />
));

Card.displayName = "Card";

export { Card };
