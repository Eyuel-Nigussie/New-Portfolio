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
      className="h-screen w-full text-center px-4 sm:px-5 z-10"
    >
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center mt-23 sm:mt-2 w-full h-[80%] sm:h-full">
        {/* Hero Left */}
        <div className="flex-1 flex justify-center items-center h-full w-full">
          <Rive
            src="Hero.riv"
            style={{ width: "100%", height: "100%" }}
            stateMachines="State Machine 1"
          />
        </div>

        {/* Hero Right */}
        <div className="flex-1 flex flex-col justify-center items-start px-6 sm:px-8 h-full ">
          <motion.div
            className="mb-6 mt-4 px-3 text-4xl sm:text-6xl font-light !leading-[1.5] sm:leading-tight text-justify"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-base sm:text-lg text-gray-300 mt-8 sm:mt-32">
              Hey, I&#39;m
            </p>
            <h1 className="text-3xl sm:text-8xl font-extrabold py-4 sm:py-8 text-start">
              Eyuel Nigussie
            </h1>
            <p className="text-sm sm:text-lg text-gray-300 mt-2 sm:mt-4">
              I design and develop eye-catching, interactive, and high-performing websites. Whether you need a stunning UI, smooth functionality, or a complete web solution, I’ve got you covered.
            </p>
            <p className="text-sm sm:text-lg text-white/90 mt-3 sm:mt-4">
              Let’s create something exceptional!
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center self-center gap-4 sm:gap-6 text-sm sm:text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="#contact"
              className="group hover:bg-slate-700 bg-white/10 text-white px-5 sm:px-7 py-2 sm:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <a
              className="group px-5 sm:px-7 py-2 sm:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack hover:bg-slate-700 bg-white/10"
              href="/Profile.pdf"
              download
            >
              Download CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>

            <a
              className="p-3 sm:p-4 hover:bg-sky-100 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
              href="https://www.linkedin.com/in/eyuel-nigussie-0a0b8a251/"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="bg-white p-3 sm:p-4 text-gray-700 hover:bg-slate-700 flex items-center gap-2 text-[1.15rem] sm:text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="http://github.com/Eyuel-Nigussie"
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
