'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';
import TechStack from '@/components/TechStack';

// You'll need to define the CheckIcon component (or import from a library)
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
      className="h-screen flex flex-col sm:flex-row items-center justify-center px-6 sm:px-16 lg:px-24 text-white"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="relative w-full sm:w-1/2 flex justify-center">
        <Image
          src="/Eyuel.png"
          alt="Eyuel's Portrait"
          width={500}
          height={500}
          className="justify-self-center rounded-2xl shadow-lg object-cover w-[80%] sm:w-[90%] max-w-md"
        />
      </div>
      
      <div className="w-full sm:w-1/2 text-center sm:text-left mt-6 sm:mt-0">
      <h1 className="text-5xl font-bold mb-2">About Me</h1>
        <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
          With 4+ years of experience in web and app development, I specialize in full-stack engineering with a strong emphasis on front-end development. My true passion lies in crafting immersive, visually stunning interfaces that blend aesthetic elegance with seamless functionality.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed text-gray-300 mt-4">
           I take a detail-oriented, performance-driven approach to development, ensuring that every component—from UI animations to API integrations—enhances the overall user experience. While I excel in front-end architecture, I also have deep experience in back-end development, allowing me to build scalable, full-stack applications from the ground up.
        </p>
        <div className="space-y-4">
          <p className="text-lg font-semibold">My expertise spans:</p>

          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
              <p>
                <span className="font-medium">Front-End Development</span> – Crafting responsive, accessible interfaces with modern web technologies
              </p>
            </li>
            
            <li className="flex items-start">
              <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
              <p>
                <span className="font-medium">Back-End Development</span> – Building scalable server-side architectures and robust APIs
              </p>
            </li>
            
            <li className="flex items-start">
              <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
              <p>
                <span className="font-medium">Full-Stack Engineering</span> – Designing complete systems with seamless front-to-back integration
              </p>
            </li>
            
            <li className="flex items-start">
              <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
              <p>
                <span className="font-medium">Application Development</span> – Delivering cross-platform solutions for web and mobile environments
              </p>
            </li>
            
            <li className="flex items-start">
              <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
              <p>
                <span className="font-medium">UI/UX Focus</span> – Bridging aesthetic design with intuitive user experiences
              </p>
            </li>
          </ul>
        </div>
        <p className="text-lg sm:text-xl leading-relaxed text-gray-300 mt-4">
          I live for turning complex problems into elegant solutions—whether it’s a zero-lag SaaS dashboard, a data-intensive web app, or a native-feeling mobile experience.
        </p>
        <TechStack />
      </div>
    </motion.section>
  );
}
