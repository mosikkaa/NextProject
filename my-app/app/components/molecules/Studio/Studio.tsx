import React from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

const services = [
  { id: "01", title: "WEBSITE" },
  { id: "02", title: "UI/UX" },
  { id: "03", title: "SOCIAL MEDIA GUIDELINE" },
  { id: "04", title: "MOTION", active: true },
  { id: "05", title: "BRAND STRATEGY" },
];

const Studio = () => {
  return (
    <section className="bg-black text-white py-20 px-10 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 font-sans">
      {/* Left Content */}
      <div className="flex-1 w-full">
        <SectionTitle title="STUDIO" subtitle="SERVICES" />
        <div className="flex flex-col">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex items-baseline gap-6 py-6 border-b border-neutral-800 hover:border-[#E5E548] cursor-pointer transition-colors duration-300"
            >
              <span className="text-xs font-mono text-neutral-500">
                {service.id}
              </span>
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white group-hover:text-[#E5E548] transition-colors duration-300">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content - View Works */}
      <div
        className="relative w-full md:w-[400px] aspect-[4/5] bg-neutral-800 flex items-center justify-center overflow-hidden"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 15%)" }}
      >
        <div className="bg-[#E5E548] w-32 h-32 rounded-full flex items-center justify-center p-4 text-center cursor-pointer hover:scale-110 transition-transform duration-300">
          <span className="text-black text-[10px] font-black leading-tight">
            VIEW WORKS
          </span>
        </div>
      </div>
    </section>
  );
};

export default Studio;
