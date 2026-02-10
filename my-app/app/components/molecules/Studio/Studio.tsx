import React, { RefObject } from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import { motion } from "motion/react";
import { SectionProps } from "@/app/types/types";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "motion/react";

const initialServices = [
  { id: "01", title: "WEBSITE", image: "/website.jpg" },
  { id: "02", title: "UI/UX", image: "/ui_ux.png" },
  { id: "03", title: "SOCIAL MEDIA GUIDELINE", image: "/soc_media.png" },
  { id: "04", title: "MOTION", image: "/motion.png" },
  { id: "05", title: "BRAND STRATEGY", image: "/brand_strategy.png" },
];

const Studio = ({ sectionRef }: SectionProps) => {
  const [servicesList, setServicesList] = useState(initialServices);
  const [activeImage, setActiveImage] = useState(servicesList[0].image);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newImage, setNewImage] = useState<string | null>(null);

  const handleSave = () => {
    if (newTitle && newImage) {
      const nextId = (servicesList.length + 1).toString().padStart(2, "0");
      const newService = {
        id: nextId,
        title: newTitle.toUpperCase(),
        image: newImage,
      };
      setServicesList([...servicesList, newService]);
      setIsModalOpen(false);
      setNewTitle("");
      setNewImage(null);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setNewImage(imageUrl);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="bg-black max-w-[1440px] mb-[76px] text-white w-full flex flex-col md:flex-row items-center justify-between gap-10 font-supreme pl-[9%] sm:pl-28 sm:pr-20 xl:pl-32 xl:pr-21 relative"
    >
      <div className="flex-1 w-full max-w-[770px]">
        {" "}
        <SectionTitle title="STUDIO" subtitle="SERVICES" />
        <div className="flex flex-col gap-10">
          {servicesList.map((service) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              key={service.id}
              onClick={() => setActiveImage(service.image)}
              className={`group flex items-center min-h-[72px] gap-6 border-b hover:border-[#E5e548] transition-colors duration-300 cursor-pointer`}
            >
              <span className="text-[14px] font-normal tracking-[1px] opacity-40 shrink-0 w-6 ">
                {service.id}
              </span>
              <h3
                className={`text-[32px] cursor-pointer font-medium tracking-[4px]  uppercase transition-colors duration-300  hover:text-[#E5e548]`}
              >
                {service.title}
              </h3>
            </motion.div>
          ))}

          {/* Add Service Button (+) */}
          <motion.div
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-dashed border-white/40 cursor-pointer hover:border-[#E5e548] hover:text-[#E5e548] transition-all duration-300 mt-4 group"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-3xl font-light opacity-60 group-hover:opacity-100">
              +
            </span>
          </motion.div>
        </div>
      </div>

      {/* Right Content - View Works / Discover */}
      <div className="md:relative md:flex hidden flex-1 items-center justify-center max-w-[290px] md:self-end">
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
              <Image
                src={activeImage}
                alt="Service"
                fill
                className="object-cover"
              />
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

      {/* Modal / Add Service Form */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1a1a1a] p-8 rounded-2xl w-full max-w-md border border-white/10 shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-6 tracking-wider">
                ADD NEW SERVICE
              </h2>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest opacity-50">
                    Service Title
                  </label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="bg-transparent border-b border-white/20 py-2 focus:border-[#E5e548] outline-none transition-colors text-lg"
                    placeholder="E.g. BRANDING"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest opacity-50">
                    Upload Image
                  </label>
                  <label className="cursor-pointer bg-white/5 hover:bg-white/10 border border-dashed border-white/20 p-6 rounded-lg text-center transition-all">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    {newImage ? (
                      <div className="relative w-full aspect-video rounded overflow-hidden">
                        <Image
                          src={newImage}
                          fill
                          alt="Preview"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <span className="opacity-40">
                        Click to upload or drag image
                      </span>
                    )}
                  </label>
                </div>

                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors uppercase text-sm tracking-widest"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={!newTitle || !newImage}
                    className="flex-1 py-3 bg-[#E5e548] text-black rounded-full font-bold hover:scale-[1.02] active:scale-95 transition-all uppercase text-sm tracking-widest disabled:opacity-50 disabled:grayscale disabled:scale-100"
                  >
                    Save
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Studio;
