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
    <section
     ref={ref}
    className="scroll-mt-28 mb-28 sm:mb-40 py-20"
    id="experience"
  >

<h1 className="text-5xl sm:text-8xl font-extrabold py-8 sm:py-16 justify-self-start">My Experiences</h1>
<VerticalTimeline
  className={theme === "dark" ? "vertical-timeline--dark" : ""}
  lineColor= "#333" // White for dark mode, black for light mode
>
  {experiencesData.map((item, index) => (
    <React.Fragment key={index}>
      <VerticalTimelineElement
        contentStyle={{
          background: "#333",
          color: "#fff",
          boxShadow: "none",
          textAlign: "left",
          padding: 0, // Remove padding to ensure GlowCard fills the element
        }}
        contentArrowStyle={{
          borderRight: "7px solid #555",
        }}
        date={item.date}
        icon={item.icon}
      >
        {/* Apply Glow Effect to the entire content */}
        <GlowCard className="p-6">
          <h3 className="font-semibold capitalize text-white">
            {item.title}
          </h3>
          <p className="font-normal !mt-0text-gray-300">
            {item.location}
          </p>
          <p className="!mt-1 !font-normal text-gray-300">
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