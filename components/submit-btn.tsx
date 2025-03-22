import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const [pending, setPending] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPending(true);

    // Simulate form submission (replace with actual API request)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setPending(false);
  };

  return (
    <button
      type="submit"
      onClick={handleClick}
      className="group flex items-center justify-center gap-2 h-12 w-32 rounded-full bg-gray-900 text-white outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-[rgba(0,0,0,0.1)] disabled:scale-100 disabled:opacity-65"
      disabled={pending}
    >
      {pending ? (
      <div
        className="h-5 w-5 animate-spin rounded-full border-b-2 border-[rgba(255,255,255,1)]"
        aria-live="polite"
      ></div>
      ) : (
      <>
        Submit
        <FaPaperPlane className="text-xs text-[rgba(255,255,255,0.7)] transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
      </>
      )}
    </button>
  );
}
