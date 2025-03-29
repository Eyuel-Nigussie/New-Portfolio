"use client";
import { useState, useEffect } from "react";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { motion } from "framer-motion";
import Loading from '@/app/loading';
import Testimonial from '@/components/testimonial';
import Articles from '@/components/articles';

export default function Home() {
  const [stars, setStars] = useState<{ top: string; left: string; delay: string }[]>([]);
  const [clouds, setClouds] = useState<{ width: string; height: string; top: string; left: string; delay: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showLine, setShowLine] = useState(false); // after loading

  // Generate stars and clouds on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setStars(
        Array.from({ length: 100 }, () => ({
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          delay: `${Math.random() * 5}s`,
        }))
      );

      setClouds(
        Array.from({ length: 6 }, () => ({
          width: `${Math.random() * 200 + 100}px`,
          height: `${Math.random() * 60 + 40}px`,
          top: `${Math.random() * 60}%`,
          left: `${Math.random() * 100}%`,
          delay: `${Math.random() * 10}s`,
        }))
      );
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
  
    const timer = setTimeout(() => {
      if (isMounted) {
        setIsLoading(false);
        setShowLine(true);
      }
    }, 1000);
  
    return () => {
      isMounted = false; // Prevent state updates if unmounted
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1f1e1e] to-[#1f1e1e] transition-colors duration-700 -z-10" />

      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              opacity: 1,
              transition: "opacity 0.7s ease-in-out",
            }}
          />
        ))}
      </div>

      {/* Clouds */}
      <div className="absolute inset-0 transition-opacity duration-700 opacity-0">
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

      {/* Animated Line - Now spans entire page height */}
      {showLine && (
        <motion.div
          initial={{ y: "100vh" }}
          animate={{ y: "-300vh" }} // Moves across full page height
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-0 w-full h-3 bg-white blur-sm z-50"
          style={{ boxShadow: "0 0 90px 20px rgba(59, 130, 246, 0.5)", height: "300vh" }}
        />
      )}

      {/* Main Content */}
      <main className="flex flex-col items-center px-4 relative z-10">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Testimonial />
        <Articles />
        <Contact />
      </main>
    </>
  );
}
