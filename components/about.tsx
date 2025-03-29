'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';
import TechStack from '@/components/TechStack';

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="h-auto min-h-screen flex flex-col-reverse sm:flex-row items-center justify-center px-5 sm:px-16 lg:px-24 text-white"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* Text Section */}
      <div className="w-full sm:w-1/2 text-center sm:text-left mt-8 sm:mt-0">
        <h1 className="text-4xl sm:text-8xl font-extrabold py-6 sm:py-10 text-start">
          About Me
        </h1>
        <p className="text-base sm:text-lg text-white/60 leading-relaxed">
          With 4+ years of experience in web and app development, I specialize in full-stack engineering with a strong emphasis on front-end development. My true passion lies in crafting immersive, visually stunning interfaces that blend aesthetic elegance with seamless functionality.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-white/60 mt-4">
          I take a detail-oriented, performance-driven approach to development, ensuring that every component—from UI animations to API integrations—enhances the overall user experience.
        </p>

        <div className="space-y-4 text-white/60 mt-6">
          <p className="text-base font-semibold">My expertise spans:</p>

          <ul className="space-y-3 text-white/60">
            {[
              ['Front-End Development', 'Crafting responsive, accessible interfaces with modern web technologies'],
              ['Back-End Development', 'Building scalable server-side architectures and robust APIs'],
              ['Full-Stack Engineering', 'Designing complete systems with seamless front-to-back integration'],
              ['Application Development', 'Delivering cross-platform solutions for web and mobile environments'],
              ['UI/UX Focus', 'Bridging aesthetic design with intuitive user experiences'],
            ].map(([title, description]) => (
              <li key={title} className="flex items-start">
                <CheckIcon className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                <p>
                  <span className="font-medium">{title}</span> – {description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-base sm:text-lg leading-relaxed text-white/60 mt-4">
          I live for turning complex problems into elegant solutions—whether it’s a zero-lag SaaS dashboard, a data-intensive web app, or a native-feeling mobile experience.
        </p>

        <TechStack />
      </div>

      {/* Image Section */}
      <div className="relative w-full sm:w-1/2 flex justify-center mt-8 sm:mt-0">
        <Image
          src="/Eyuel.png"
          alt="Eyuel's Portrait"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg object-cover w-[90%] sm:w-[80%] max-w-xs sm:max-w-md"
        />
      </div>
    </motion.section>
  );
}
