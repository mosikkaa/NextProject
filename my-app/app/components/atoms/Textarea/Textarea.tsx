import react from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Textarea = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}  className="sm:relative z-2 absolute top-[93%] sm:bottom-0  sm:top-0 justify-center gap-3 sm:gap-1 flex flex-col ">
      <div>
        <h1 className="font-[Supreme] text-white font-bold  2xl:text-[106px] xl:text-[86px] lg:text-[86px] md:text-[68px] sm:w-full w-[60px] sm:text-[52px] text-[50px] leading-[100%] tracking-[-2px] uppercase">CREATIVE TEAM</h1>
        <h1 className="font-[Supreme] font-bold  2xl:text-[106px] xl:text-[86px] lg:text-[86px] md:text-[68px]  sm:text-[52px] text-[50px]  leading-[100%] tracking-[-2px] align-middle uppercase text-[#E5E548]">
          <span className="line-through decoration-[#E5E548] decoration-[1.6px] sm:inline-block hidden text-transparent select-none">ai.ii</span>
          <span className="line-through text-end decoration-[#E5E548] decoration-[1.6px]">FOR FUTURE'S</span>
          <span className="line-through decoration-[#E5E548] decoration-[1.6px] text-transparent select-none">..</span>
        </h1>
        <h1 className="font-[Supreme] font-bold 2xl:text-[106px] xl:text-[86px] lg:text-[86px] md:text-[68px]  sm:text-[52px] text-[50px]  text-white leading-[100%] tracking-[-2px] align-middle uppercase">
          <span className="text-black select-none sm:inline-block hidden invisible">ai.ii</span>
          BRANDS.
        </h1>
      </div>

      <div className="flex-row sm:flex items-center sm:gap-6 lg:w-5/9 2xl:w-1/2 xl:w-6/13 2xl:gap-14 xl:gap-2 lg:gap-14 md:gap-8 2xl:ml-48 xl:ml-39 lg:ml-39 md:ml-30 sm:ml-22 ml-[2px]">
        <p className="2xl:w-7/14 xl:w-6/12  font-[Supreme] font-light text-white 2xl:text-[20px] md:text-[16px] sm:text-[16px] text-[12px] leading-[160%]">We are outstanding individuals <br /> who loves to combine art + design</p>
        <div className="2xl:h-[128px] 2xl:w-[128px] relative xl:h-[108px] xl:w-[108px] lg:w-[98px] lg:h-[98px] md:h-[90px] md:w-[90px] h-[80px] w-[80px] hidden sm:block ">
          <Image className="hidden sm:block" src="/Discover.svg" fill alt="Discover"/>
        </div>
      </div>
    </motion.div>
  );
};

export default Textarea;
