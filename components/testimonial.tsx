"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    text: "Working with this team was an absolute pleasure. Their attention to detail and innovative approach to problem-solving exceeded our expectations.",
    author: "Sarah Johnson",
    position: "CTO at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop",
    profile: "https://linkedin.com/in/sarahjohnson"
  },
  {
    text: "The level of creativity and technical expertise they brought to our project was outstanding. They delivered beyond our expectations.",
    author: "Michael Chen",
    position: "Founder of StartupX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
    profile: "https://twitter.com/michaelchen"
  },
  {
    text: "Their ability to understand our vision and translate it into reality was remarkable. The end result was exactly what we needed.",
    author: "Emily Rodriguez",
    position: "Design Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2787&auto=format&fit=crop",
    profile: "https://behance.net/emilyrodriguez"
  },
  {
    text: "Absolutely incredible experience. They exceeded my expectations in every way possible.",
    author: "David Williams",
    position: "CEO at CreativeTech",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=2787&auto=format&fit=crop",
    profile: "https://dribbble.com/davidwilliams"
  }
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
        <div className="flex flex-col items-center mb-12">
          <Quote className="w-12 h-12 text-primary/20 mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            What People Say
          </h2>
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
              {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-[45%] flex flex-col space-y-6 bg-card p-6 rounded-lg shadow-lg"
                >
                  <p className="text-xl leading-relaxed text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
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
