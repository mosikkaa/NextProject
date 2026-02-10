"use client";
import Textarea from "@/app/components/atoms/Textarea/Textarea";
import Image from "next/image";
import Video from "@/app/components/atoms/Video/Video";
import { motion } from "framer-motion";
import { LandProps } from "@/app/types/types";
import cover from '../../../../public/cover.jpg'

const Land = ({ scrollTo, sectionRef }: LandProps) => {

  const handleScroll = (): void => {
    scrollTo.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section ref={sectionRef} className="w-full relative z-16">
      <div className="w-full relative z-16 h-77.5  sm:h-screen shrink-0 items-center flex sm:relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${cover.src})` }}>
        <div className="max-w-360 w-full pl-[9%] pr-[9%] sm:pl-28 xl:pl-32 xl:pr-21 m-auto">
          <Textarea />
          <motion.div onClick={handleScroll} animate={{ y: [0, 24, 0] }} transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }} className="absolute hidden sm:flex sm:left-1/2 sm:bottom-[3%] -translate-x-1/2  p-8 cursor-pointer z-16">
            <Image src="/ArrowDown.svg" width={20} height={24} alt="Arrow down" />
          </motion.div>
          <div className='hidden sm:block absolute bottom-0 right-0'>
            <Video />
          </div>
        </div>
      </div>

      <div className="h-87.5 sm:hidden flex items-end py-[4%] px-[9%] w-full bg-black">
        <div className="flex justify-between items-center w-full h-15">
          <Image className="" src="/Discover.svg" width={60} height={60} alt="Discover" />
          <motion.div onClick={handleScroll} animate={{ y: [0, 16, 0] }} transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }} className="p-4 cursor-pointer relative z-16">
            <Image src="/ArrowDown.svg" width={20} height={24} alt="Arrow down" />
          </motion.div>
        </div>
      </div>

      <div className='h-87.5 sm:hidden relative flex w-full pt-4 pb-4 pl-[9%]'>
        <Video />
      </div>
    </section>
  );
};

export default Land;
