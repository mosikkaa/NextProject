"use client";
import { AnimatePresence, motion } from "motion/react";
import Button from "../../atoms/Button/Button";
import ProjectCard from "../../atoms/ProjectCard/ProjectCard";
import Solutions from "../../atoms/Solutions/Solutions";
import architecture from "../../../../public/architecture.jpg";
import architecture2 from "../../../../public/architecture2.jpg";
import businessConsulting from "../../../../public/businessConsulting.jpg";
import businessConsulting2 from "../../../../public/businessConsulting2.jpg";
import hikingGears from "../../../../public/hikingGears.jpg";
import outdoor from "../../../../public/outdoor.jpg";
import hikingGears2 from "../../../../public/hikingGears2.jpg";
import outdoor2 from "../../../../public/outdoor2.jpg";
import {useState} from "react";
import {SectionProps} from "@/app/types/types";


const LatestProjects = ({ sectionRef }: SectionProps) => {
  const [showMore, setShowMore] = useState(false);
  const [page, setPage] = useState(0);

  const allProjects = [
    {
      img: architecture,
      num: "01",
      title: "MAQUILADORA ARCHITECT",
      description: "When art meet technology and nature.",
      type: "WEB DESIGN / WEB DEVELOPMENT",
      section: "ARCHITECTURE",
    },
    {
      img: businessConsulting,
      num: "02",
      title: "CODEX CONSULTING",
      description: "Codex brings new perspective in business.",
      type: "BRAND IDENTITY",
      section: "BUSINESS CONSULTING",
    },
    {
      img: hikingGears,
      num: "03",
      title: "RAUNG PACK",
      description: "Our collaborations with latest outdoors gear.",
      type: "WEB DESIGN / WEB DEVELOPMENT",
      section: "HIKING GEARS",
    },
    {
      img: outdoor,
      num: "04",
      title: "OMBAX SURFBOARDS",
      description: "Ombax new logo redefined.",
      type: "BRAND IDENTITY",
      section: "OUTDOOR",
    },
    {
      img: architecture2,
      num: "05",
      title: "MAQUILADORA ARCHITECT",
      description: "When art meet technology and nature.",
      type: "WEB DESIGN",
      section: "ARCHITECTURE",
    },
    {
      img: businessConsulting2,
      num: "06",
      title: "CODEX CONSULTING",
      description: "Codex brings new perspective.",
      type: "BRAND IDENTITY",
      section: "BUSINESS",
    },
    {
      img: hikingGears2,
      num: "07",
      title: "RAUNG PACK",
      description: "Latest outdoors gear for their website.",
      type: "WEB DESIGN / WEB DEVELOPMENT",
      section: "HIKING GEARS",
    },
    {
      img: outdoor2,
      num: "08",
      title: "OMBAX SURFBOARDS",
      description: "Ombax new logo redefined.",
      type: "BRAND IDENTITY",
      section: "OUTDOOR",
    },
  ];

  const paginatedProjects = allProjects.slice(page * 4, page * 4 + 4);

  return (
    <div className="select-none max-w-[1440px] bg-black flex flex-col items-start lg:items-center justify-center gap-20 w-full pl-[9%]  sm:pl-28  xl:pl-32 xl:pr-21">
      <div className="h-153.25 lg:h-192 flex flex-col justify-center gap-12">
        <Solutions />
        <Button buttonText="READ MORE" />
      </div>

      <div ref={sectionRef} className="w-full  ">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}  className="mb-30.25 tracking-wider [text-shadow:-1px_-1px_0_#666666,1px_-1px_0_#666666,-1px_1px_0_#666666,1px_1px_0_#666666,0_-1px_0_#666666,0_1px_0_#666666,-1px_0_0_#666666,1px_0_0_#666666] leading-[100%]  sm:w-97.5 lg:w-130 font-bold text-[56px] lg:text-[64px]">
          LATEST{" "}
          <span className="text-shadow-none line-through decoration-3 text-[#E5E548] [-webkit-text-stroke:0px]">
            <span className="text-black">sss</span>PROJECTS
          </span>
        </motion.div>

        <div className="mb-6 xl:hidden flex gap-6 overflow-x-auto [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-zinc-900 [&::-webkit-scrollbar-thumb]:bg-white">
          {allProjects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>

        <div className="hidden xl:block w-full">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-wrap justify-between gap-10 mb-10"
              >
                {(showMore ? allProjects.slice(0, 4) : paginatedProjects).map(
                  (p, i) => (
                    <ProjectCard key={i} {...p} />
                  ),
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {showMore && (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap justify-between gap-10 mb-10">
                  {allProjects.slice(4, 8).map((p, i) => (
                    <ProjectCard key={i} {...p} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}  className="flex mb-29 w-full items-center justify-between">
            <Button
              buttonText={showMore ? "SHOW LESS" : "MORE WORKS"}
              onClick={() => {
                setShowMore(!showMore);
              }}
            />

            {!showMore && (
              <div className="flex items-center gap-2">
                {[0, 1].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`cursor-pointer w-3 h-3 rounded-full border transition-all duration-300 ${
                      page === p
                        ? "bg-[#E5E548] border-[#E5E548]"
                        : "border-[#E5E548]"
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
