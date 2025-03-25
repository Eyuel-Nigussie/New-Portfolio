"use client";
import { useState, useEffect } from "react";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { useTheme } from "@/context/theme-context";

export default function Home() {
  const { theme } = useTheme();
  const [stars, setStars] = useState<{ top: string; left: string; delay: string }[]>([]);
  const [clouds, setClouds] = useState<{ width: string; height: string; top: string; left: string; delay: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Delayed Loading Effect (3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  // Ensure random elements are only created on the client to avoid hydration mismatch
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Generate stars data
      const generatedStars = Array.from({ length: 100 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
      }));
      setStars(generatedStars);

      // Generate clouds data
      const generatedClouds = Array.from({ length: 6 }, () => ({
        width: `${Math.random() * 200 + 100}px`,
        height: `${Math.random() * 60 + 40}px`,
        top: `${Math.random() * 60}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 10}s`,
      }));
      setClouds(generatedClouds);
    }
  }, []);

  // Show loading screen while waiting
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center px-4">
      {/* Sky background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#607d99] to-[#3173a8] dark:from-[#1f1e1e] dark:to-[#1f1e1e] transition-colors duration-700 -z-10" />

      {/* Stars (only visible in dark mode) */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              opacity: theme === "dark" ? 1 : 0,
              transition: "opacity 0.7s ease-in-out",
            }}
          />
        ))}

        {/* Clouds (only visible in light mode) */}
        <div className="absolute inset-0 transition-opacity duration-700 dark:opacity-0">
          {clouds.map((cloud, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-float opacity-90"
              style={{
                width: cloud.width,
                height: cloud.height,
                top: cloud.top,
                left: cloud.left,
                animationDelay: cloud.delay,
                filter: "blur(8px)",
              }}
            />
          ))}
        </div>
      </div>

      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
