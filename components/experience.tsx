"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { GlowCard } from "@/components/glow-card";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeading>My experience</SectionHeading>
<VerticalTimeline
  className={theme === "dark" ? "vertical-timeline--dark" : ""}
  lineColor={theme === "dark" ? "#ffffff" : "#000000"} // White for dark mode, black for light mode
>
  {experiencesData.map((item, index) => (
    <React.Fragment key={index}>
      <VerticalTimelineElement
        contentStyle={{
          background: theme === "dark" ? "#333" : "#f9f9f9",
          color: theme === "dark" ? "#fff" : "#000",
          boxShadow: "none",
          textAlign: "left",
          padding: 0, // Remove padding to ensure GlowCard fills the element
        }}
        contentArrowStyle={{
          borderRight: theme === "dark" ? "7px solid #555" : "7px solid #f9f9f9",
        }}
        date={item.date}
        icon={item.icon}
      >
        {/* Apply Glow Effect to the entire content */}
        <GlowCard className="p-6">
          <h3 className="font-semibold capitalize text-black dark:text-white">
            {item.title}
          </h3>
          <p className="font-normal !mt-0 text-gray-700 dark:text-gray-300">
            {item.location}
          </p>
          <p className="!mt-1 !font-normal text-gray-700 dark:text-gray-300">
            {item.description}
          </p>
        </GlowCard>
      </VerticalTimelineElement>
    </React.Fragment>
  ))}
</VerticalTimeline>

    </section>
  );
}