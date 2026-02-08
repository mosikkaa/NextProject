import React from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

const Latest = () => {
  return (
    <section className="bg-black text-white px-6 md:pl-[150px] md:pr-[119px] flex flex-col font-supreme overflow-hidden">
      <SectionTitle title="LATEST" subtitle="THOUGHTS" />

      {/* Main Content Area */}
      <div className="flex flex-col md:pb-20 pb-8 md:flex-row md:gap-[110px] gap-8 items-end justify-start mt-10">
        {/* Left: Card (440x408) */}
        <div
          className="relative w-full md:w-[440px] h-[408px] bg-[#626262] shrink-0 hover:bg-[#C4C4C4]"
          style={{
            clipPath: "polygon(70px 0, 100% 0, 100% 100%, 0 100%, 0 70px)",
          }}
        >
          {/* BG - Dark overlay */}
          <div className="absolute inset-0 w-full md:w-[440px] h-[408px] bg-black opacity-20" />

          {/* Corner triangle */}
          <div className="absolute left-0 top-0 w-[70px] h-[70px] bg-black [clip-path:polygon(0_0,100%_0,0_100%)]" />

          {/* 01 Container */}
          <div className="absolute left-[1px] top-[220px] w-[160px] h-[188px] flex flex-col items-start pb-4 pl-10 gap-2">
            <span className="w-[172px] h-[120px] text-[168px] font-bold leading-[120px] flex items-center text-right uppercase text-transparent [text-stroke:2px_#FFFFFF] [-webkit-text-stroke:2px_#FFFFFF] shrink-0 -rotate-90">
              01
            </span>
          </div>
        </div>
        {/* Right: Text Content */}
        <div className="flex flex-col gap-4 max-w-[621px] pb-5">
          <h3 className="text-[24px] md:text-[32px] font-medium tracking-[2px] leading-[120%] text-[#E5E548] uppercase">
            RAUNG PACK REBRANDING, BEYOND THE OFFICE, OUT OF THE LANDFILL
          </h3>
          <p className="text-white text-[18px] md:text-[20px] font-light leading-[160%]">
            Our collaborations with latest outdoors gear for their website.
          </p>
          <span className="text-white/40 text-[14px] font-normal leading-[160%] tracking-[1px] uppercase md:hidden block">
            WEB DESIGN / WEB DEVELOPMENT
          </span>
          <div className="flex items-center gap-4 justify-start md:hidden ">
            <div className="w-2 h-2 rounded-full bg-[#E5E548]" />
            <span className="text-white text-[14px] font-normal leading-[160%] tracking-[1px] uppercase">
              ARCHITECTURE
            </span>
          </div>
          <span className="text-white/40 text-[14px] font-normal leading-[160%] tracking-[1px] uppercase md:block hidden">
            JUNE 12, 2022
          </span>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center pb-0 md:pb-[116px] w-full max-w-[1210px]">
        <button className="bg-[#f8fafc00] border border-white text-white md:w-[126px] mb-[65px] md:mb-0 w-full h-[48px] rounded-[80px] text-[12px] font-bold uppercase hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center tracking-[0.016em]">
          MORE STORIES
        </button>

        {/* Pagination Dots */}
        <div className="hidden md:flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[#E5E548] border-[1.6px] border-[#E5E548]" />
          <div className="w-2 h-2 rounded-full border-[1.6px] border-[#E5E548]" />
          <div className="w-2 h-2 rounded-full border-[1.6px] border-[#E5E548]" />
        </div>
      </div>
    </section>
  );
};

export default Latest;
