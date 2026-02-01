import React from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

const services = [
  { id: "01", title: "WEBSITE" },
  { id: "02", title: "UI/UX" },
  { id: "03", title: "SOCIAL MEDIA GUIDELINE" },
  { id: "04", title: "MOTION" },
  { id: "05", title: "BRAND STRATEGY" },
];

const Studio = () => {
  return (
    <section className="bg-black text-white pr-0 md:pr-20 pl-6 md:pl-[150px] flex flex-col md:flex-row items-center justify-between gap-10 font-supreme">
      {/* Left Content */}
      <div className="flex-1 w-full max-w-[770px]">
        <SectionTitle title="STUDIO" subtitle="SERVICES" />
        <div className="flex flex-col gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group flex items-center min-h-[72px] gap-6 border-b hover:border-[#E5e548] transition-colors duration-300`}
            >
              <span className="text-[14px] font-normal tracking-[1px] opacity-40 shrink-0 w-6 ">
                {service.id}
              </span>
              <h3
                className={`text-[32px] cursor-pointer font-medium tracking-[4px]  uppercase transition-colors duration-300  hover:text-[#E5e548]`}
              >
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content - View Works / Discover */}
      <div className="md:relative md:flex hidden flex-1 items-center justify-center max-w-[290px]">
        {/* Image / Mask Group (290x392) */}
        <div
          className="relative w-full aspect-290/392 bg-[#626262] overflow-hidden"
          style={{
            clipPath: "polygon(24% 0, 100% 0, 100% 100%, 0 100%, 0 18%)",
          }}
        >
          {/* Overlay or BG */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Discover Button (108x108) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E5E548] w-[25%] aspect-square min-w-[80px] rounded-full flex items-center justify-center p-4 text-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-xl">
          <span className="text-black text-[clamp(8px,1vw,12px)] font-bold leading-none uppercase tracking-[0.016em]">
            DISCOVER
          </span>
        </div>
      </div>
    </section>
  );
};

export default Studio;
