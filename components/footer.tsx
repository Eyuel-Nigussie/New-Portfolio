import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 text-center text-white/70">
      <small className="mb-2 block text-xs">
        &copy; 2025 Eyuel Nigussie. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, Rive, Vercel hosting.
      </p>
    </footer>
  );
}