import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="relative max-w-[550px]  w-full flex flex-col font-supreme leading-[1.1] md:leading-[1.6] overflow-hidden pt-22 pb-12 md:py-20">
      {/* Title (e.g., STUDIO / LATEST) */}
      <h2 className="md:text-[64px] text-[56px] font-bold leading-none text-transparent [text-stroke:2px_#666666] [-webkit-text-stroke:2px_#666666] uppercase">
        {title}
      </h2>
      {/* Subtitle */}
      <div className="flex items-center relative z-10">
        <div className="w-full shrink-0 bg-[#e5e548] h-[2px] absolute z-10 " />
        <span className="md:text-[64px] text-[56px] font-bold leading-none ml-[159px] text-[#E5E548] uppercase whitespace-nowrap w-full">
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default SectionTitle;
