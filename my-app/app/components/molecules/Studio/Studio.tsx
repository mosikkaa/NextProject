import React, { RefObject, useEffect } from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import StudioAddForm from "../../atoms/StudioAddForm/StudioAddForm";
import { motion } from "motion/react";
import { SectionProps } from "@/app/types/types";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "motion/react";

interface Service {
  id: string;
  title: string;
  image: string;
  isCustom?: boolean;
}

const initialServices: Service[] = [
  { id: "01", title: "WEBSITE", image: "/website.jpg" },
  { id: "02", title: "UI/UX", image: "/ui_ux.png" },
  { id: "03", title: "SOCIAL MEDIA GUIDELINE", image: "/soc_media.png" },
  { id: "04", title: "MOTION", image: "/motion.png" },
  { id: "05", title: "BRAND STRATEGY", image: "/brand_strategy.png" },
];

const Studio = ({ sectionRef }: SectionProps) => {
  const [servicesList, setServicesList] = useState<Service[]>(initialServices);
  const [activeImage, setActiveImage] = useState(servicesList[0].image);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const savedServices = localStorage.getItem("studio_services");
    if (savedServices) {
      const customServices = JSON.parse(savedServices);
      setServicesList([...initialServices, ...customServices]);
    }
  }, []);

  const handleSave = (title: string, image: string) => {
    const nextId = (servicesList.length + 1).toString().padStart(2, "0");
    const newService: Service = {
      id: nextId,
      title: title.toUpperCase(),
      image: image,
      isCustom: true,
    };

    const updatedServices = [...servicesList, newService];
    setServicesList(updatedServices);

    const customOnly = updatedServices.filter((s) => s.isCustom);
    localStorage.setItem("studio_services", JSON.stringify(customOnly));

    setIsModalOpen(false);
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const updatedServices = servicesList.filter((s) => s.id !== id);
    setServicesList(updatedServices);

    const customOnly = updatedServices.filter((s) => s.isCustom);
    localStorage.setItem("studio_services", JSON.stringify(customOnly));

    if (activeImage === servicesList.find((s) => s.id === id)?.image) {
      setActiveImage(updatedServices[0]?.image || "");
    }
  };

  return (
    <section
      ref={sectionRef}
      className="bg-black max-w-[1440px] mb-[76px] text-white w-full flex flex-col md:flex-row items-start justify-between gap-10 font-supreme pl-[9%] sm:pl-28 sm:pr-20 xl:pl-32 xl:pr-21 relative"
    >
      <div className="flex-1 w-full">
        <SectionTitle title="STUDIO" subtitle="SERVICES" />

        <div className="flex flex-row items-end justify-between gap-10">
          <div className="flex flex-col gap-10 flex-1 max-w-[770px]">
            {servicesList.map((service) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                key={service.id}
                onClick={() => setActiveImage(service.image)}
                className={`group flex items-center min-h-[72px] gap-6 border-b hover:border-[#E5e548] transition-colors duration-300 cursor-pointer relative`}
              >
                <span className="text-[14px] font-normal tracking-[1px] opacity-40 shrink-0 w-6 ">
                  {service.id}
                </span>
                <h3
                  className={`text-[32px] cursor-pointer font-medium tracking-[4px]  uppercase transition-colors duration-300  hover:text-[#E5e548]`}
                >
                  {service.title}
                </h3>

                {service.isCustom && (
                  <button
                    onClick={(e) => handleDelete(e, service.id)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-[#E5E548] hover:text-black transition-all"
                  >
                    ✕
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Content - View Works / Discover */}
          <div className="md:relative md:flex hidden flex-1 items-center justify-center max-w-[290px]">
            {/* Image / Mask Group (290x392) */}
            <div
              className="relative w-full aspect-[290/392] bg-[#626262] overflow-hidden"
              style={{
                clipPath: "polygon(24% 0, 100% 0, 100% 100%, 0 100%, 0 18%)",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {activeImage && (
                    <Image
                      src={activeImage}
                      alt="Service"
                      fill
                      className="object-cover"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
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
        </div>

        {/* Add Service Button (+) */}
        <motion.div
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-dashed border-white/40 cursor-pointer hover:border-[#E5e548] hover:text-[#E5e548] transition-all duration-300 mt-10 group"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-3xl font-light opacity-60 group-hover:opacity-100">
            +
          </span>
        </motion.div>
      </div>

      {/* Modal / Add Service Form */}
      <StudioAddForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
    </section>
  );
};

export default Studio;
