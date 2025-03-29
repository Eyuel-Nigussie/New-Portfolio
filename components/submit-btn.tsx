"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";

interface SubmitBtnProps {
  isSubmitting: boolean;
}

export default function SubmitBtn({ isSubmitting }: SubmitBtnProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-WHITE/10 active:scale-105 bg-white/30 bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
    >
      {isSubmitting ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
