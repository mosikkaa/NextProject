"use client";
import React from "react";

interface LatestBtnProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const LatestBtn = ({ text, onClick, className = "" }: LatestBtnProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#f8fafc00] border border-white text-white md:w-[156px] mb-[65px] md:mb-0 w-full h-[48px] rounded-[80px] text-[12px] font-bold uppercase hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center tracking-[0.016em] ${className}`}
    >
      {text}
    </button>
  );
};

export default LatestBtn;
