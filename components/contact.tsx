"use client";

import { useState } from 'react';
import { Send, Instagram, Linkedin, MessageSquare } from 'lucide-react';
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Rive from '@rive-app/react-canvas';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [hoveredEmail, setHoveredEmail] = useState(false);
  const [hoveredUsername, setHoveredUsername] = useState(false);

  return (
    <section
      id="contact"
      ref={ref}
      className="w-full h-[1000px] px-2 sm:px-8"
    >
      <div className="w-full mt-12 pt-12">
          <h1 className="text-5xl sm:text-8xl font-extrabold py-8 sm:py-16 flex justify-self-start">Contact Me</h1>

          <div className="flex flex-col sm:flex-row items-center justify-center w-full h-full gap-8">
            {/* Left Section */}
            <div className="flex-1 flex flex-col items-center sm:items-start px-4 sm:px-8 text-center sm:text-left">
                {/* Username */}
                <motion.a
                  href="https://t.me/eyuel_31"
                  className="mb-6 cursor-pointer"
                  onHoverStart={() => setHoveredUsername(true)}
                  onHoverEnd={() => setHoveredUsername(false)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 text-3xl sm:text-6xl font-light">
                   Telegram@eyuel_31
                    <motion.div animate={{ rotate: hoveredUsername ? 45 : 0 }} transition={{ duration: 0.3 }}>
                      <Send className="w-6 h-6 sm:w-12 sm:h-12 opacity-60" />
                    </motion.div>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:eyuelnigussie@gmail.com"
                  className="mb-6 cursor-pointer"
                  onHoverStart={() => setHoveredEmail(true)}
                  onHoverEnd={() => setHoveredEmail(false)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 text-2xl sm:text-6xl font-light break-words">
                    Gmail@eyuelnigussie@gmail.com
                    <motion.div animate={{ y: hoveredEmail ? -10 : 0 }} transition={{ duration: 0.3 }}>
                      <MessageSquare className="w-6 h-6 sm:w-12 sm:h-12 opacity-60" />
                    </motion.div>
                  </div>
                </motion.a>

                {/* Social Links */}
                <div className="space-y-6">
                  <h3 className="text-lg sm:text-2xl text-gray-400">Follow me</h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a href="https://www.instagram.com/eyuelnigussie/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg sm:text-xl hover:text-white transition-colors" whileHover={{ x: 5 }}>
                      <Instagram className="w-5 h-5 sm:w-6 sm:h-6" /> Instagram
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/eyuel-nigussie-0a0b8a251/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg sm:text-xl hover:text-white transition-colors" whileHover={{ x: 5 }}>
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" /> LinkedIn
                    </motion.a>
                    <motion.a href="https://t.me/eyuel_31" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg sm:text-xl hover:text-white transition-colors" whileHover={{ x: 5 }}>
                      <Send className="w-5 h-5 sm:w-6 sm:h-6" /> Telegram
                    </motion.a>
                    <motion.a href="https://github.com/Eyuel-Nigussie" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg sm:text-xl hover:text-white transition-colors" whileHover={{ x: 5 }}>
                        <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" /> GitHub
                    </motion.a>
                    <motion.a href="https://rive.app/@eyueln/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg sm:text-xl hover:text-white transition-colors" whileHover={{ x: 5 }}>
                    <Image 
                    width={8}   
                    height={8} 
                    src="https://cdn.brandfetch.io/idlyPQ26CT/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1736569778422" 
                    alt="" className="w-5 h-5 sm:w-6 sm:h-6" /> Rive
                    </motion.a>
                                     
                  </div>
                </div>

                {/* Tagline */}
                <motion.p className="mt-8 text-base sm:text-xl text-gray-400 text-center sm:text-left" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  Turning ideas into interactive, seamless digital experiences that captivate & engage users.🧑‍💻
                </motion.p>
              </div>

               {/* Right Side - Rive Animation */}
            <motion.div
              className="relative w-full rounded-2xl overflow-hidden h-64 sm:h-96 md:h-[500px] lg:h-[600px]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Rive
                src="/robot.riv"
                stateMachines="State Machine 1"
                style={{ width: "100%", height: "50%" }}
              />
            </motion.div>
           </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-white/70 ">Copyright © {new Date().getFullYear()} Eyuel Nigussie 👑</p>
      </div>
    </section>
  );
}
