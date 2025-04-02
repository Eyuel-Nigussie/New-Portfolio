import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { DiJavascript1, DiJavascript } from 'react-icons/di'; // Vue.js logo icon

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Science in Computer Science",
    location: "Addis Ababa, Ethiopia",
    description:
      "Earned a BSc in Computer Science, mastering algorithms, data structures, and system design. Applied this foundation through hands-on projects to develop strong problem-solving skills for real-world software development challenges.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "MSc Artificial Intelligence",
    location: "Addis Ababa, Ethiopia",
    description:
      "Pursuing a Master’s degree in Artificial Intelligence at Addis Ababa University, focusing on machine learning, deep learning, and AI-driven solutions. Engaging in research and practical applications to develop innovative AI models and contribute to the growing field of artificial intelligence.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },
  {
    title: "Front-End Developer @ SupportEducation",
    location: "Addis Ababa, Ethiopia",
    description:
      "Developed Vue.js/Quasar e-learning platforms and a School Information Management System (SIMS) at SupportEducation. Streamlined state management with Pinia, added animations via Motion One, and collaborated in an agile remote team to deliver features efficiently.",
    icon: React.createElement(DiJavascript1),
    date: "2022 - 2023",
  },
  {
    title: "Front-End Developer @ Loga Meter Taxi",
    location: "Addis Ababa",
    description:
      "As a Front-End Developer at Loga Meter Taxi, I designed and developed user interfaces for a taxi-hailing app using React, Next.js, and SvelteKit. I enhanced the UX with dynamic animations using Framer Motion, managed application state efficiently with Redux, and collaborated with backend teams to integrate APIs, ensuring seamless functionality and a polished user experience.",
    icon: React.createElement(DiJavascript),
    date: "2021 - 2023",
  },
  {
    title: "Full-Stack Software Engineer @ Amref Health Africa",
    location: "Addis Ababa, Ethiopia & Nairobi, Kenya",
    description:
      "As a Full-Stack Developer at Amref Health Africa, I collaborated on various projects—from leading end-to-end development to contributing as part of a team. My work included building an mLearning platform, health-tracking applications, intrability systems, and more.",
    icon: React.createElement(FaReact),
    date: "2023 - 2025",
  },
  {
    title: "Freelancer & cooking something great( knock on wood )",
    location: "Worldwide",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities. I am also building something great ( Knock on wood )",
    icon: React.createElement(FaReact),
    date: "2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "",
    description:
      "",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "",
    description:
      "",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "",
    description:
      "",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Nuxt.js",
  "Next.js",
  "Node.js",
  "Svelte",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Supabase",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Rive",
  "Three.js",
] as const;