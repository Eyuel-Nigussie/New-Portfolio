"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import Image from 'next/image';

const testimonials = [
  {
    text: "He is one of the hardest and most dedicated workers I&#39;ve managed. Always punctual, diligent, and efficient, he consistently delivers high-quality work. I highly recommend him for any project or role.",
    author: " Bekalu Assamnew",
    position: "Digital learning technical lead at AMREF",
    image: "/testimonials/bekalu.png",
    profile: "https://linkedin.com/in/sarahjohnson"
  },
  {
    text: "Working with Eyuel Nigussie on a recent project was a fantastic experience. He seamlessly integrated my design ideas with his technical skills, ensuring the final product was both visually appealing and functional. Eyuel&#39;s clean, efficient approach and attention to detail stood out. I highly recommend him for any web development or design project—his professionalism and dedication are exceptional!",
    author: "Olivia Bradley",
    position: "UI/UX Designer",
    image: "/testimonials/olivia.png",
    profile: "https://www.linkedin.com/in/olivia-bradley-543676284/"
  },
  {
    text: "Absolutely incredible experience. He exceeded my expectations in every way possible.",
    author: "Samuel Girma",
    position: "Wash SDG Project Manager",
    image: "/testimonials/samuel.png",
    profile: "https://t.me/+251911964592"
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 2) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="min-h-screen py-25 bg-background relative overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4">
        <div className=" sm-justify-items-start inline">
          <h1 className="text-5xl sm:text-8xl font-extrabold py-8 sm:py-16 text-start"> <Quote className="w-12 h-12 text-primary/20 mb-6 inline" /> Testimonials</h1>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative flex items-center justify-center">
          <button 
            onClick={prevTestimonial} 
            className="absolute left-0 p-3 bg-secondary rounded-full hover:bg-secondary/70 transition"
          >
            <ArrowLeft className="w-6 h-6 text-primary" />
          </button>

          <div className="w-full max-w-4xl flex justify-center gap-8 overflow-hidden">
            <AnimatePresence mode="wait">
                {testimonials.slice(currentIndex, currentIndex + 1).map((testimonial) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-[45%] flex flex-col space-y-6 bg-card p-6 rounded-lg shadow-lg"
                >
                  <p className="text-xl leading-relaxed text-muted-foreground italic">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="rounded-full object-cover"
                      width={12}
                      height={12}
                    />
                    <div>
                      <h4 className="font-semibold text-primary">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                  <a 
                    href={testimonial.profile} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-primary hover:underline"
                  >
                    View Profile
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button 
            onClick={nextTestimonial} 
            className="absolute right-0 p-3 bg-secondary rounded-full hover:bg-secondary/70 transition"
          >
            <ArrowRight className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
