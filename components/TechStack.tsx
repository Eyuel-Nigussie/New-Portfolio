"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
const technologies = [
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",

  },
  {
    name: "Vue",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",

  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Nuxt.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",

  },
  {
    name: "Rive",
    logo: "https://cdn.brandfetch.io/idlyPQ26CT/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1736569778422",

  },
  {
    name: "GraphQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    name: "Supabase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
 
  },
  {
    name: "Django",
    logo: "https://static.cdnlogo.com/logos/d/3/django.svg"
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
  },  
];

export default function TechStack() {
  return (
    <section className="py-12 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-start gap-3 md:gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`rounded-lg p-1 flex items-center justify-center hover:shadow-md transition-all duration-200 hover:-translate-y-0.5`}
            style={{ width: '3.5rem', height: '3.5rem' }} // Fixed size for all logos
            title={tech.name} // Tooltip on hover
          >
            <div className="w-8 h-8 relative">
              <Image
                src={tech.logo}
                alt={tech.name}
                width={8}
                height={8}
                className="w-full h-full object-contain"
                loading="lazy" // Lazy loading for better performance
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  
  );
}