"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Rive from '@rive-app/react-canvas'

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="h-screen w-full text-center px-5 z-10"
    >
     <div className="flex items-center justify-center w-full h-full">
        {/* hero left */}
        <div className="relative flex-1 flex justify-center items-center h-full">
            <Rive src="Hero.riv"  style={{ width: "90%", height: "90%" }} stateMachines="State Machine 1"/>
        </div>

        {/* hero right */}
        <div className="flex-1 flex flex-col justify-center items-start px-8 h-full ">
        <motion.div
          className="mb-10 mt-4 px-4 text-6xl font-light !leading-[1.5] sm:text-4xl text-justify"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        > 
          <p className="text-lg sm:text-xl leading-relaxed text-gray-300 mt-4">Hey, I'm</p> 
          <h1 className="text-5xl font-bold mb-2">Eyuel Nigussie</h1>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-300 mt-4">
            I design and develop eye-catching, interactive, and high-performing websites. Whether you need a stunning UI, smooth functionality, or a complete web solution, I’ve got you covered. With expertise in web design, front-end development, and back-end development I’ll bring your ideas to life.
          </p>
           Let’s create something exceptional!
        </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row items-center self-center gap-6  text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <Link
              href="#contact"
              className="group bg-slate-950 dark:bg-white/30 hover:bg-slate-700 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack hover:bg-slate-700 dark:bg-white/10"
              href="/CV.pdf"
              download
            >
              Download CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>

            <a
              className="bg-white p-4 text-gray-700 hover:bg-slate-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://linkedin.com"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="bg-white p-4 text-gray-700 hover:bg-slate-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://github.com"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
          </motion.div>
        </div>
     </div>
    </section>
  );
}