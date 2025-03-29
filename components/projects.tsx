"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/card";
import { ExternalLink } from "lucide-react";
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';

const projects = [
  {
    title: "Amref&#39;s Inventory Managemnt System",
    image: "/images/project images/amref ims.png",
    demo: "https://docs.google.com/presentation/d/19S-FhFIhYXl4kNHoPo68tLeX8wHekIZ2/edit?usp=sharing&ouid=103686413890524656065&rtpof=true&sd=true",
  },
  {
    title: "WAI Ethiopia ",
    image: "/images/project images/wash.png",
    demo: "https://wai-ethiopia.akvotest.org/",
  },
  {
    title: "Leap, the mLearning platform",
    image: "/images/project images/leap.png",
    demo: "https://leap.amref.org/about/",
  },
  {
    title: "KAB Towing & Machinary",
    image: "/images/project images/kab.png",
    demo: "https://kab-demo-production-server-down.netlify.app",

  }
];

export default function Projects() {
  const { ref: sectionRef } = useSectionInView('Projects', 0.5);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["350%", "-720%"]);
  return (
    <section 
      ref={(el) => {
        // Combine both refs
        if (containerRef.current === null && el) {
          if (el instanceof HTMLDivElement) {
            containerRef.current = el;
          }
        }
        if (sectionRef) {
          sectionRef(el);
        }
      }}
      className="h-[300vh] relative py-[200px] bg-background"
      id="projects"
    >
      <div className="sticky top-0 h-screen w-screen flex items-center justify-start overflow-hidden mt-28 pt-48 sm:pt-32 ">
        <motion.div 
          style={{ x }}
          className="flex gap-8 px-12 min-w-max"
        >
         <div className="flex-shrink-0 w-[300px] sm:w-[900px] h-[60vh] sm:h-[90vh]  px-4 sm:px-35 flex flex-col justify-center">
          <p className="text-white/60">
             Here I showcase some of the many of 
            </p>
            <h1 className="text-4xl sm:text-8xl font-extrabold py-8 sm:py-16 text-start">My Projects</h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl text-white/60">
              Welcome to my portfolio! Here you&#39;ll find a collection of projects that showcase 
              my skills and passion for web development. Each project represents a unique 
              challenge and demonstrates my ability to create innovative solutions using 
              modern technologies.
            </p>
          </div>

          {projects.map((project, index) => (
            <motion.div 
              key={index}
              // style={{ opacity: rightFade }}
              className="justify-center items-center h-[850px] mt-20"
            >
              <Card className="flex-shrink-0 w-[900px] sm:w-[1400px] sm:h-[900px] mx-10 sm-mx-25 overflow-hidden justify">
                <div className="relative overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                     sizes="(max-width: 640px) 100vw, (max-width: 768px) 600px, (max-width: 1024px) 700px, 900px"
                    className="object-cover w-full h-[400px] sm:h-[800px] transition-transform duration-300 hover:scale-105"
                    width={700}
                    height={200}
                  />
                </div>
                <div className="h-[10%] flex flex-row items-center justify-between">
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:underline"
                      >
                        <h3 className="text-3xl font-bold">{project.title}</h3>
                        <ExternalLink className="h-5 w-5 text-white/70" />
                      </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex-shrink-0 w-[90spx] h-[90vh] px-15 flex flex-col justify-center">
          <p className="text-white/60">
             Here I showcase some of the many of 
            </p>
          <h1 className="text-8xl font-extrabold mb-2">My Projects</h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl text-white/60">
              Welcome to my portfolio! Here you&#39;ll find a collection of projects that showcase 
              my skills and passion for web development. Each project represents a unique 
              challenge and demonstrates my ability to create innovative solutions using 
              modern technologies.
            </p>
          </div>
      </div>
          
    </section>
  );
}