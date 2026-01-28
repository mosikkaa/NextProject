import React from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

const Latest = () => {
  return (
    <section className="bg-black text-white py-20 px-10 md:px-20 flex flex-col font-sans overflow-hidden">
      <SectionTitle title="LATEST" subtitle="THOUGHTS" />

      {/* Main Content Area: Replicating Studio's layout weight */}
      <div className="flex flex-col md:flex-row gap-10 items-center justify-between flex-1 mt-10">
        {/* Left: Card (Matching requested dimensions) */}
        <div
          className="relative w-[366px] h-[216px] md:w-[440px] md:h-[408px] bg-[#333333] flex overflow-hidden"
          style={{
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 15%)",
          }}
        >
          <span className="absolute left-0 bottom-0 text-[168px] md:text-[160px] -pb-10 pl-[16px] font-black leading-none text-transparent [text-stroke:1px_rgba(255,255,255,0.6)] [-webkit-text-stroke:1px_rgba(255,255,255,0.6)] rotate-270 origin-bottom-left translate-x-full">
            01
          </span>
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 max-w-xl md:pl-10">
          <h3 className="text-2xl md:text-3xl font-black leading-tight mb-6 tracking-tight">
            RAUNG PACK REBRANDING, BEYOND THE OFFICE, OUT OF THE LANDFILL
          </h3>
          <p className="text-neutral-400 text-lg mb-4">
            Our collaborations with latest outdoors gear for their website.
          </p>
          <span className="text-neutral-500 text-sm font-bold">
            JUNE 12, 2022
          </span>
        </div>
      </div>

      {/* Footer Section: Matching the padding/alignment */}
      <div className="flex justify-between items-center mt-16">
        <button className="bg-white text-black px-8 py-3 rounded-full text-xs font-black hover:bg-[#E5E548] transition-colors duration-300">
          MORE STORIES
        </button>

        {/* Pagination Dots */}
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[#E5E548]" />
          <div className="w-2 h-2 rounded-full bg-neutral-600" />
          <div className="w-2 h-2 rounded-full bg-neutral-600" />
        </div>
      </div>
    </section>
  );
};

export default Latest;
