"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GlowCard } from "@/components/glow-card";

// Array of image paths
const logos = [
  "/images/Amref.png",
  "/images/DevFest.png",
  "/images/dhis2.png",
  "/images/GDG.png",
  "/images/Kefeta.png",
  "/images/Leap.png",
  "/images/Tenawo.png",
  "/images/USAID.png",
];

// Duplicate logos for seamless looping
const extendedLogos = [...logos, ...logos];

const SectionDivider = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setCarouselWidth(carouselRef.current.scrollWidth / 2);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <GlowCard>
      <div className="relative w-full overflow-hidden bg-white/30">
            {/* Gradient overlays for fade effect */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-black/25 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 sm:w-24 w-12 bg-gradient-to-l from-black/20 to-transparent z-10" />



        <motion.div
          ref={carouselRef}
          className="flex items-center gap-8 sm:gap-16"
          animate={{
            x: [0, -carouselWidth], // Move from start to end
          }}
          transition={{
            ease: "linear",
            duration: 20, // Adjust for smooth movement
            repeat: Infinity,
          }}
        >
          {extendedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={150} // Default for larger screens
                height={75}
                className="object-contain sm:w-[150px] w-[100px] sm:h-[75px] h-[50px]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </GlowCard>
  );
};

export default SectionDivider;
