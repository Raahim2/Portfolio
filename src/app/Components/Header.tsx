import React from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import WordRotate from "@/components/ui/word-rotate";
import BoxReveal from "@/components/ui/box-reveal";
import { Cloud } from "./Cloud";

interface HeaderProps {
  theme: "light" | "dark" | "fire" | "luxury" | "blue" | "green";
}

const Header: React.FC<HeaderProps> = ({ theme }) => {
  const words = ["Android Dev", "Web Dev", "AI/ML", "UI/UX Design"];

  const themeClasses = {
    light: {
      bg: "bg-gradient-to-r from-white via-blue-100 to-white",
      txt: "pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#1E3A8A] via-[#3B82F6] to-[#60A5FA] bg-clip-text font-bold leading-none tracking-tighter text-transparent",
    },
    dark: {
      bg: "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white",
      txt: "pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#6B21A8] via-[#9333EA] to-[#D946EF] bg-clip-text font-bold leading-none tracking-tighter text-transparent",
    },
    fire: {
      bg: "bg-gradient-to-r from-white via-orange-200 to-white",
      txt: "pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text font-bold leading-none tracking-tighter text-transparent",
    },
    luxury: {
      bg: "bg-gradient-to-r from-white via-yellow-200 to-white",
      txt: "pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#FFD700] via-[#FFAC33] to-[#FF6347] bg-clip-text font-bold leading-none tracking-tighter text-transparent",
    },
    blue: {
      bg: "bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500",
      txt: "pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#1E3A8A] via-[#3B82F6] to-[#60A5FA] bg-clip-text font-bold leading-none tracking-tighter text-transparent",
    },
    green: {
      bg: "bg-gradient-to-r from-green-500 via-green-200 to-green-500",
      txt: "pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#22C55E] via-[#10B981] to-[#4ADE80] bg-clip-text font-bold leading-none tracking-tighter text-transparent",
    },
  };

  return (
    <>
    <section className={`${themeClasses[theme].bg}` }>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Transforming the digital world with </h1>
                </BoxReveal>

                <BoxReveal boxColor={"#5046e6"} duration={0.5}>

                <WordRotate
                className={`${themeClasses[theme].txt} max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white`}
                words={words}
              />
                </BoxReveal>


                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                </BoxReveal>

                <BoxReveal boxColor={"#5046e6"} duration={0.5}>

                <RainbowButton>
                    <code>npm i -D Resume@latest</code>
                </RainbowButton>
                </BoxReveal>

            </div>
            <div className="lg:mt-0 lg:col-span-5 lg:flex mx-auto">
                <Cloud/>
            </div>                
        </div>
    </section>
    </>
  );
};

export default Header;
