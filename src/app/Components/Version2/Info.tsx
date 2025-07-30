"use client";

import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import FadeInOnScroll from "./ScrollAnimation";

type Theme = "light" | "dark" | "fire" | "luxury" | "lightning" | "hacker";

const Info: React.FC<{ name: string; title: string; desc: string; theme: Theme }> = ({ name, title, desc, theme }) => {
  // Determine text color based on theme
  const textColor = theme === "dark" || theme === "hacker" ? "text-white" : "text-black";

  return (
    <FadeInOnScroll>
      <section className="py-4">
        {/* Wrap the entire content with BlurFade */}
        <div className="flex justify-center items-center">
          <AnimatedGradientText>
            🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
            <span
              className={cn(
                `inline-block animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              {name}
            </span>
          </AnimatedGradientText>
        </div>

        <div className="container mx-auto px-6 text-center">
          <h2 className={`text-4xl font-extrabold ${textColor}`}>{title}</h2>
          <p className={`mt-4 text-lg ${textColor}`}>{desc}</p>
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default Info;
