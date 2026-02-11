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
import { useEffect, useState } from "react";
import { SectionProps } from "@/app/types/types";
import AddWork from "../../atoms/AddWork/AddWork";
import {StaticImageData} from "next/image";

const LatestProjects = ({ sectionRef }: SectionProps) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [addWorkOpen, setAddWorkOpen] = useState<boolean>(false)

  const defaultImg:StaticImageData = architecture;
  const projectsPerPage:number = 4;

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

  const [projects, setProjects] = useState(allProjects);

  useEffect(() => {
    const saved = localStorage.getItem("projects");
    if (saved) {
      setProjects(JSON.parse(saved))
    };
  }, []);

  const paginatedProjects = projects.slice(page * projectsPerPage, (page + 1) * projectsPerPage);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleAddProject = (project: any) => {
    const newProjects = [...projects, { ...project, img: defaultImg }];
    setProjects(newProjects);
    localStorage.setItem("projects", JSON.stringify(newProjects));
  };

  // Determine projects to show
  const displayedProjects = showMore ? projects : paginatedProjects;

  return (
    <div className="select-none max-w-360 bg-black flex flex-col items-start lg:items-center justify-center gap-20 w-full pl-[9%]  sm:pl-28  xl:pl-32 xl:pr-21">
      <div className="h-153.25 lg:h-192 flex flex-col justify-center gap-12">
        <Solutions />
        <Button buttonText="READ MORE" />
      </div>

      <div ref={sectionRef} className="w-full  ">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}  className="relative max-w-[425px]  w-full flex flex-col font-supreme leading-[1.1] md:leading-[1.6] overflow-hidden mb-30.25">
              <h2 className="[text-shadow:-1px_-1px_0_#666666,1px_-1px_0_#666666,-1px_1px_0_#666666,1px_1px_0_#666666,0_-1px_0_#666666,0_1px_0_#666666,-1px_0_0_#666666,1px_0_0_#666666]  sm:text-[64px] text-[50px] font-bold text-black uppercase">
                  Latest
              </h2>
              <div className="flex items-center relative z-10">
                  <div className="w-full shrink-0 bg-[#e5e548] h-[2px] absolute z-10 " />
                  <span className="sm:text-[64px] text-[48px] font-bold leading-none mdml-[159px] ml-[85px] sm:ml-[108px] text-[#E5E548] uppercase whitespace-nowrap w-full">
                    Projects
                  </span>
              </div>
          </motion.div>

        <div className="mb-6 xl:hidden flex gap-6 overflow-x-auto [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-zinc-900 [&::-webkit-scrollbar-thumb]:bg-white">
          {projects.map((p, i) => (<ProjectCard key={i} {...p} />))}
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
                {(showMore ? projects : paginatedProjects).map((p, i) => (<ProjectCard key={i} {...p} />))}
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex mb-29 w-full items-center justify-between">
            <div className="flex gap-7.5">
              <Button buttonText={showMore ? "SHOW LESS" : "MORE WORKS"} onClick={() => setShowMore(!showMore)} />
              <Button buttonText="ADD WORK" onClick={() => setAddWorkOpen(true)} />
            </div>

            {!showMore && (
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, p) => (
                  <button key={p} onClick={() => setPage(p)} className={`cursor-pointer w-3 h-3 rounded-full border transition-all duration-300 ${page === p ? "bg-[#E5E548] border-[#E5E548]" : "border-[#E5E548]"}`} />))}
              </div>
            )}
          </motion.div>
        </div>
      </div >
      <AnimatePresence>
        {addWorkOpen && (<AddWork onClose={() => setAddWorkOpen(false)} onAddProject={handleAddProject} nextNum={projects.length + 1} />)}
      </AnimatePresence>
    </div >
  );
};

export default LatestProjects;
