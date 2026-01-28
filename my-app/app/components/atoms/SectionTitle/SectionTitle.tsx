import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="relative mb-16 w-full flex flex-col">
      <h2 className="text-[56px] md:text-[64px] font-black text-transparent leading-[0.8] [text-stroke:1px_rgba(255,255,255,0.3)] [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">
        {title}
      </h2>
      <div className="relative w-fit flex items-center mt-[-10px]">
        <div className="absolute left-0 w-full h-[3px] bg-[#E5E548] top-[50%] md:top-[50%]" />
        <div className="flex items-center relative z-10">
          <div className="w-20 md:w-[159px] shrink-0" />
          <span className="text-[56px] md:text-[64px] font-black tracking-wider text-[#E5E548] px-2 whitespace-nowrap">
            {subtitle}
          </span>
          <div className="w-8 md:w-[58px] shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
