import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import LatestBtn from "../../atoms/LatestBtn/LatestBtn";
import LatestAddForm from "../../atoms/LatestAddForm/LatestAddForm";
import { SectionProps } from "@/app/types/types";

const initialStories = [
  {
    id: "01",
    image: "/rebrending.jpg",
    title: "RAUNG PACK REBRANDING, BEYOND THE OFFICE, OUT OF THE LANDFILL",
    description:
      "Our collaborations with latest outdoors gear for their website.",
    date: "JUNE 12, 2022",
    categories: ["WEB DESIGN", "WEB DEVELOPMENT"],
    subCategory: "ARCHITECTURE",
  },
  {
    id: "02",
    image: "/rebrending2.jpg",
    title: "INNOVATIVE DESIGN SOLUTIONS FOR MODERN SPACES",
    description:
      "Exploring new horizons in architectural visualization and brand identity.",
    date: "JULY 20, 2023",
    categories: ["UI/UX DESIGN", "BRANDING"],
    subCategory: "VISUALIZATION",
  },
  {
    id: "03",
    image: "/rebrending3.jpg",
    title: "FUTURE OF DIGITAL INTERACTION AND MOTION",
    description:
      "Creating seamless experiences through motion graphics and interactive design.",
    date: "AUGUST 15, 2024",
    categories: ["MOTION", "DEVELOPMENT"],
    subCategory: "DIGITAL",
  },
];

const Latest = ({ sectionRef }: SectionProps) => {
  const [stories, setStories] = useState(initialStories);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const currentStory = stories[activeIndex];

  const handleSaveStory = (data: {
    title: string;
    description: string;
    date: string;
    image: string;
  }) => {
    const nextId = (stories.length + 1).toString().padStart(2, "0");
    const newStory = {
      ...data,
      id: nextId,
      categories: ["NEW"],
      subCategory: "PROJECT",
    };
    setStories([...stories, newStory]);
    setIsAddModalOpen(false);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-black max-w-[1440px] text-white pl-[9%] sm:pl-28 sm:pr-20 xl:pl-32 xl:pr-21 w-full flex flex-col font-supreme overflow-hidden"
    >
      <SectionTitle title="LATEST" subtitle="THOUGHTS" />

      <div className="pr-[9%] w-full">
        <AnimatePresence mode="wait">
          {!showAll ? (
            <motion.div
              key="slider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col md:pb-20 pb-8 md:flex-row lg:gap-[110px] md:gap-[20px] gap-8 items-end justify-start mt-10"
            >
              {/* Slider View (Existing) */}
              <div className="flex flex-col md:flex-row items-end gap-8 lg:gap-[110px] md:gap-[20px]">
                {/* Left: Card (440x408) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative w-full md:w-[440px] h-[408px] bg-[#626262] shrink-0 hover:bg-[#C4C4C4]"
                  style={{
                    clipPath:
                      "polygon(70px 0, 100% 0, 100% 100%, 0 100%, 0 70px)",
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={currentStory.image}
                        alt="Story image"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 w-full md:w-[440px] h-[408px] bg-black opacity-20" />
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="w-49.75 absolute z-2 text-transparent font-normal text-[168px] rotate-270 [-webkit-text-stroke:1px_#dadada] -bottom-1.75 -left-0.5"
                    >
                      {currentStory.id}
                    </motion.p>
                  </AnimatePresence>
                  <div className="absolute left-0 top-0 w-[70px] h-[70px] bg-black [clip-path:polygon(0_0,100%_0,0_100%)]" />
                </motion.div>

                {/* Right: Text Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col gap-4 max-w-[621px] pb-5"
                  >
                    <h3 className="text-[24px] lg:text-[32px] font-medium tracking-[2px] leading-[120%] text-[#E5E548] uppercase">
                      {currentStory.title}
                    </h3>
                    <p className="text-white text-[18px] lg:text-[20px] font-light leading-[160%]">
                      {currentStory.description}
                    </p>
                    <span className="text-white/40 text-[14px] font-normal leading-[160%] tracking-[1px] uppercase md:hidden block">
                      {currentStory.categories.join(" / ")}
                    </span>
                    <div className="flex items-center gap-4 justify-start md:hidden ">
                      <div className="w-2 h-2 rounded-full bg-[#E5E548]" />
                      <span className="text-white text-[14px] font-normal leading-[160%] tracking-[1px] uppercase">
                        {currentStory.subCategory}
                      </span>
                    </div>
                    <span className="text-white/40 text-[14px] font-normal leading-[160%] tracking-[1px] uppercase md:block hidden">
                      {currentStory.date}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="flex flex-row gap-10 mt-10 mb-3 pb-[20px] overflow-x-auto pr-4 scroll-smooth snap-x [&::-webkit-scrollbar]:h-[6px] [&::-webkit-scrollbar-track]:bg-white/10 [&::-webkit-scrollbar-thumb]:bg-[#E5E548] [&::-webkit-scrollbar-thumb]:rounded-full"
            >
              {stories.map((story) => (
                <motion.div
                  key={story.id}
                  className="flex flex-col gap-6 group cursor-pointer shrink-0 w-[85%] md:w-[440px] snap-center"
                >
                  <div
                    className="relative w-full aspect-[440/408] bg-[#626262] overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px)",
                    }}
                  >
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <p className="absolute bottom-2 left-2 text-transparent font-normal text-[80px] rotate-270 [-webkit-text-stroke:1px_#dadada] opacity-20 group-hover:opacity-40 transition-opacity">
                      {story.id}
                    </p>
                    <div className="absolute left-0 top-0 w-[40px] h-[40px] bg-black [clip-path:polygon(0_0,100%_0,0_100%)]" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-medium text-[#E5E548] uppercase leading-snug line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="text-white/60 text-sm font-light line-clamp-2 leading-relaxed">
                      {story.description}
                    </p>
                    <span className="text-white/40 text-xs tracking-widest uppercase">
                      {story.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-between items-center pb-0 md:pb-[116px] w-full max-w-[1210px] gap-4"
        >
          <div className="flex items-center gap-4 w-full md:w-auto">
            <LatestBtn
              onClick={() => setShowAll(!showAll)}
              text={showAll ? "SHOW STORIES" : "MORE STORIES"}
            />

            {/* Add Story Button (+) */}
            <motion.button
              onClick={() => setIsAddModalOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full border mb-[65px] sm:mb-0 border-dashed border-white/40 flex items-center justify-center text-2xl font-light hover:border-[#E5E548] hover:text-[#E5E548] transition-colors"
            >
              +
            </motion.button>
          </div>

          {/* Pagination Dots */}
          {!showAll && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hidden md:flex gap-2"
            >
              {stories.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full border-[1.6px] border-[#E5E548] cursor-pointer transition-all duration-300 ${
                    activeIndex === index ? "bg-[#E5E548]" : "bg-transparent"
                  }`}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Add Story Form Modal */}
      <LatestAddForm
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleSaveStory}
      />
    </section>
  );
};

export default Latest;
