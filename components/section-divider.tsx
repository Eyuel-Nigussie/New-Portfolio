// "use client";

// import React from 'react'
// import { motion } from 'framer-motion';

// export default function SectionDivider() {
//   return (
//     <motion.div className=' my-24 h-16 w-1 rounded-full hidden sm:block '
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.125 }}
//     ></motion.div>

//   )
// }
  
"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

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

const SectionDivider = () => {
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  // Duplicate logos for seamless looping
  const extendedLogos = [...logos, ...logos];

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setCarouselWidth(carouselRef.current.scrollWidth / 2);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    // Start the infinite scrolling animation
    controls.start({
      x: -carouselWidth,
      transition: {
        ease: "linear",
        duration: 20, // Adjust duration to control speed
        repeat: Infinity,
      },
    });

    return () => window.removeEventListener("resize", updateWidth);
  }, [carouselWidth, controls]);

  return (
    <div className="relative w-full overflow-hidden py-6 dark:bg-white/25 bg-gray-800/25">
      {/* Gradient overlays for fade effect */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-gray-700 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-gray-700 to-transparent z-10" />

      <motion.div
        ref={carouselRef}
        className="flex items-center gap-16"
        animate={controls}
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() =>
          controls.start({
            x: -carouselWidth,
            transition: {
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            },
          })
        }
      >
        {extendedLogos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={150} // Standardize width
              height={75} // Standardize height
              className="object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionDivider;
