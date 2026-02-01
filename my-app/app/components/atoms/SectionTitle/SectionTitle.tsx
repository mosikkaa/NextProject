import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="relative mb-20 w-full flex flex-col font-supreme">
      {/* Title (e.g., STUDIO / LATEST) */}
      <h2 className="md:text-[64px] text-[56px] font-bold leading-none text-transparent [text-stroke:2px_#666666] [-webkit-text-stroke:2px_#666666] uppercase">
        {title}
      </h2>

      {/* Subtitle and Line Container */}
      <div className="relative flex flex-col mt-[-10px]">
        {/* Line - positioned absolutely to match Figma's 'top: 172px' feel relative to text */}
        <div className="absolute left-0 top-[28px] w-[551px] h-[1.6px] bg-[#E5E548]" />

        {/* Subtitle */}
        <div className="flex items-center relative z-10">
          <div className="w-[159px] shrink-0" />
          <span className="text-[64px] font-bold leading-none text-[#E5E548] uppercase whitespace-nowrap">
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
