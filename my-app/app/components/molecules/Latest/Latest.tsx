import React from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

const Latest = () => {
  return (
    <section className="bg-black text-white py-20 px-10 md:px-20 flex flex-col font-supreme overflow-hidden">
      <SectionTitle title="LATEST" subtitle="THOUGHTS" />

      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row gap-[110px] items-end justify-start mt-10">
        {/* Left: Card (440x408) */}
        <div
          className="relative w-[440px] h-[408px] bg-[#626262] shrink-0 hover:bg-[#C4C4C4]"
          style={{
            clipPath: "polygon(70px 0, 100% 0, 100% 100%, 0 100%, 0 70px)",
          }}
        >
          {/* BG - Dark overlay */}
          <div className="absolute inset-0 w-[440px] h-[408px] bg-black opacity-20" />

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
          <h3 className="text-[32px] font-bold leading-[120%] tracking-[4px] text-[#E5E548] uppercase">
            RAUNG PACK REBRANDING, BEYOND THE OFFICE, OUT OF THE LANDFILL
          </h3>
          <p className="text-white text-[20px] font-light leading-[160%]">
            Our collaborations with latest outdoors gear for their website.
          </p>
          <span className="text-white/40 text-[14px] font-normal leading-[160%] tracking-[1px] uppercase">
            JUNE 12, 2022
          </span>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center mt-20 w-full max-w-[1210px]">
        <button className="bg-[#F8FAFC] text-black w-[126px] h-[48px] rounded-[80px] text-[12px] font-bold uppercase hover:bg-[#E5E548] transition-colors duration-300 flex items-center justify-center tracking-[0.016em]">
          MORE STORIES
        </button>

        {/* Pagination Dots */}
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[#E5E548] border-[1.6px] border-[#E5E548]" />
          <div className="w-2 h-2 rounded-full border-[1.6px] border-[#E5E548]" />
          <div className="w-2 h-2 rounded-full border-[1.6px] border-[#E5E548]" />
        </div>
      </div>
    </section>
  );
};

export default Latest;
