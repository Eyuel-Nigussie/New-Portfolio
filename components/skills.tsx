"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
// import { GlowCard } from "@/components/glow-card";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="h-[60vh] -mb-10 max-w-[60rem] py-25 scroll-mt-28 text-center sm:mb-40"
    >
      <h1 className="text-5xl sm:text-8xl font-extrabold py-8 sm:py-16 text-start">My Skills</h1>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
            <motion.li
                  className="borderBlack rounded-xl px-5 py-3 bg-white/10 text-white/80"
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  {skill}
            </motion.li>
        ))}
      </ul>
    </section>
  );
}
