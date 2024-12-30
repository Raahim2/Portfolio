"use client";

import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/ui/blur-fade";

const Info: React.FC<{ name: string; title: string; desc: string }> = ({ name, title, desc }) => {
  return (
    <section className="py-16">
      {/* Wrap the entire content with BlurFade */}
      <BlurFade>
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
          <h2 className="text-4xl font-extrabold">{title}</h2>
          <p className="mt-4 text-lg">{desc}</p>
        </div>
      </BlurFade>
    </section>
  );
};

export default Info;
