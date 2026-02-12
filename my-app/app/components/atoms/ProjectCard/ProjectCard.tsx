import Image, { StaticImageData } from "next/image";
import cardTriangle from "../../../../public/cardTriangle.svg";
import ellipse from "../../../../public/ellipse.svg";
import arrow from "../../../../public/arrow.svg";
import { motion } from "motion/react";

interface ProjectCardProps {
  title: string;
  description: string;
  type: string;
  section: string;
  img: StaticImageData | string,
  num: string;
}

const ProjectCard = ({
  title,
  description,
  type,
  section,
  img,
  num,
}: ProjectCardProps) => {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-67.25 lg:w-137.5 mb-8 lg:mb-30 cursor-pointer group">
      <div className="w-67.25 lg:w-137.5 h-94 lg:h-102 mb-8 relative overflow-hidden">
        <Image src={cardTriangle} alt="card triangle" width={70} height={70} className="absolute z-2 " />
        {typeof img === "string" ? (<img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover z-1" />
        ) : (
          <Image src={img} alt={title} fill className="object-cover z-1" />
        )}

        <p className="w-49.75 absolute z-2 text-transparent font-normal text-[168px] rotate-270 [-webkit-text-stroke:1px_#dadada] -bottom-1.75 -left-0.5">
          {num}
        </p>
        <div className="hidden lg:flex absolute z-1 bottom-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out">
          <div className="bg-[#E5E548] h-32 w-105.75"></div>
          <div className="bg-[#E5E548]/30 w-32 h-32 flex justify-center">
            <Image src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="w-67.25 lg:w-110 ml-0 lg:ml-10">
        <h1 className="text-[#E5E548] mb-4 text-[24px] leading-[160%] tracking-[4px]">
          {title}
        </h1>
        <p className="text-[#ffffff] mb-4 text-[18px]">{description}</p>
        <p className="text-[#ffffff] mb-2 opacity-40 text-[14px] tracking-[1px]">
          {type}
        </p>
        <div className="flex gap-3">
          <Image src={ellipse} alt="ellipse" width={4} height={4} />
          <p className="text-[#ffffff] text-[14px] tracking-[1px]">{section}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
