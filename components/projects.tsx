"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/card";
import { ExternalLink, Github } from "lucide-react";
import { useSectionInView } from '@/lib/hooks';

const projects = [
  {
    title: "Project One",
    description: "Real-time collaboration tool for remote teams",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2425&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    tags: ["React", "Socket.io", "Node.js"]
  },
  {
    title: "Project Two",
    description: "AI-powered content management system",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2424&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    tags: ["OpenAI", "Next.js", "MongoDB"]
  },
  {
    title: "Project Three",
    description: "AI-powered content management system",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2424&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    tags: ["OpenAI", "Next.js", "MongoDB"]
  },
  {
    title: "Project Four",
    description: "AI-powered content management system",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2424&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    tags: ["OpenAI", "Next.js", "MongoDB"]
  }
];

export default function Projects() {
  const { ref: sectionRef } = useSectionInView('Projects', 0.5);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const rightFade = useTransform(scrollYProgress, [0, 0.1], [0.95, 1]);

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
      className="h-[300vh] relative py-25 bg-background"
      id="projects"
    >
      <div className="sticky top-0 h-screen w-screen flex items-center overflow-hidden">
        <motion.div 
          style={{ x }}
          className="flex gap-8 px-12 min-w-max pl-[50vw]"
        >
          <div className="flex-shrink-0 w-[800px] h-[90vh] flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-2">About Me</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Welcome to my portfolio! Here you'll find a collection of projects that showcase 
              my skills and passion for web development. Each project represents a unique 
              challenge and demonstrates my ability to create innovative solutions using 
              modern technologies.
            </p>
          </div>

          {projects.map((project, index) => (
            <motion.div 
              key={index}
              style={{ opacity: rightFade }}
            >
              <Card className="flex-shrink-0 w-[800px] h-[90vh] overflow-hidden bg-card">
                <div className="relative h-[50%] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-8 h-[50%] flex flex-col">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 text-lg flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}