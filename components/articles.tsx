'use client';

import { ArrowUpRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface Article {
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
  image: string;
}

const articles: Article[] = [
  {
    title: "Authenticating your Django REST Framework with 'Djoser'",
    description: "Exploring the latest trends and technologies shaping the future of web development...",
    date: "Sep 11, 2023",
    readTime: "5 min read",
    link: "https://medium.com/@eyuthedev/authenticating-your-django-rest-framework-with-djoser-9ce5cb370d7",
    image: "/articles/djoser.png"
  },
  {
    title: "Setting Authentication Exception on API Views (Endpoints) in Django Rest Framework",
    description: "A deep dive into architectural patterns and best practices for building scalable applications...",
    date: "Jul 22, 2023",
    readTime: "2 min read",
    link: "https://medium.com/@eyuthedev/setting-authentication-exception-on-api-views-endpoints-in-django-rest-framework-a-guide-to-22915021fb8f",
    image: "/articles/djoser exception.png"
  },
  {
    title: "Succinctly: React Essentials",
    description: "Understanding the principles and practices that lead to maintainable and elegant code...",
    date: "Sep 11, 2023",
    readTime: "3 min read",
    link: "https://medium.com/@eyuthedev/succinctly-react-essentials-924e8f3ba0d1",
    image: "/articles/react.png"
  }
];

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
      <section className="min-h-screen bg-background py-10 px-4 md:px-6">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex items-center gap-2 mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BookOpen className="w-6 h-6 text-primary" />
            <h1 className="text-5xl sm:text-8xl font-extrabold py-8 sm:py-16 justify-self-start">Articles</h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <article className="h-[400px] relative bg-card p-6 rounded-xl transition-all duration-500 hover:border-primary">
                  {/* Image */}
                  <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
                    <Image 
                      src={article.image}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  </div>

                  <div className="relative h-full flex flex-col">
                    <div className="flex-1">
                      <motion.div 
                        className="flex items-center gap-2 text-sm text-muted-foreground mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <span>{article.date}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                        <span>{article.readTime}</span>
                      </motion.div>
                      
                      <motion.h3 
                        className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        {article.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-lg sm:text-xl leading-relaxed text-white/60 mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        {article.description}
                      </motion.p>
                    </div>

                    <motion.div 
                      className="mt-auto pt-6 flex items-center justify-between"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <motion.span 
                        className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        Read Article
                      </motion.span>
                      <motion.div
                        animate={
                          hoveredIndex === index 
                            ? { x: 0, rotate: 0, opacity: 1 }
                            : { x: 16, rotate: 45, opacity: 0 }
                        }
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </motion.div>
                    </motion.div>

                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/50 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div 
                        className="h-full bg-primary rounded-full"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      />
                    </motion.div>
                  </div>
                </article>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
  );
}
