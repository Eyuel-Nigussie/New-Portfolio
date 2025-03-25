'use client';

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlowCard({ className, children, ...props }: GlowCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      
      // Get position relative to card
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;

      setPosition({ x, y });
    };

    const updateOpacity = (ev: MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const isInside = 
        ev.clientX >= rect.left &&
        ev.clientX <= rect.right &&
        ev.clientY >= rect.top &&
        ev.clientY <= rect.bottom;

      setOpacity(isInside ? 1 : 0);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousemove', updateOpacity);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousemove', updateOpacity);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-xl bg-background/80 backdrop-blur-sm transition-all duration-300",
        "group  dark:border-slate-800",
        className
      )}
      style={{
        background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, 
          rgba(235, 239, 230, 0.06),
          transparent 40%
        )`
      }}
      {...props}
    >
      <div className="relative z-10">
        {children}
      </div>
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px,
            rgba(235, 239, 230, 0.1),
            transparent 40%
          )`
        }}
      />
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 dark:opacity-0"
        style={{
          opacity: opacity * 0.2,
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px,
            rgba(235, 230, 230, 0.3),
            transparent 40%
          )`
        }}
      />
    </div>
  );
}