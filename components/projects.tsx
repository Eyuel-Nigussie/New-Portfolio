"use client";

import { Card } from "@/components/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Amref Inventory Management System",
    image: "/images/project images/amref ims.png",
    demo: "https://docs.google.com/presentation/d/19S-FhFIhYXl4kNHoPo68tLeX8wHekIZ2/edit?usp=sharing&ouid=103686413890524656065&rtpof=true&sd=true",
  },
  {
    title: "WAI Ethiopia",
    image: "/images/project images/wash.png",
    demo: "https://wai-ethiopia.akvotest.org/",
  },
  {
    title: "Leap, the mLearning platform",
    image: "/images/project images/leap.png",
    demo: "https://leap.amref.org/about/",
  },
  {
    title: "KAB Towing & Machinery",
    image: "/images/project images/kab.png",
    demo: "https://kab-demo-production-server-down.netlify.app",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-background">
      <div className="container  px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
       <h1 className="text-5xl sm:text-8xl font-extrabold py-8 sm:py-16 text-start">My Projects</h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of projects that highlight my skills and passion for Software development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-lg rounded-lg overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center gap-2 text-blue-400 hover:underline"
                >
                  View Project <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
