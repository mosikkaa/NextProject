'use client'
import Textarea from "@/app/components/atoms/Textarea/Textarea";
import Image from 'next/image'
import Video from "@/app/components/atoms/Video/Video";
import {motion}  from "framer-motion";

const Land =({scrollTo}:any) => {

    const handleScroll = ():void => {
        scrollTo.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div className='w-full h-screen '>
           <div className='w-full relative  h-[50%] sm:h-screen pl-[9%] pr-[9%] sm:pl-28 sm:pr-20 xl:pl-32 xl:pr-21 flex-shrink-0 items-center flex sm:relative bg-[#C4C4C4]'>

                <Textarea/>
                <motion.div onClick={handleScroll} animate={{ y: [0, 24, 0] }} transition={{duration: 2.5, ease: "easeInOut", repeat: Infinity}} className="absolute hidden sm:flex sm:left-1/2 sm:bottom-[3%] -translate-x-1/2  p-8 cursor-pointer z-16">
                    <Image  src="/ArrowDown.svg" width={20} height={24} alt="Arrow down"/>
                </motion.div>
               <Video/>

           </div>

            <div className='h-[50%] sm:hidden flex items-end py-[4%] px-[9%] w-full bg-black'>
                <div className='flex justify-between items-center w-full h-[60px]'>
                    <Image className='' src="/Discover.svg" width={60} height={60} alt="Discover"/>
                    <motion.div onClick={handleScroll} animate={{ y: [0, 16, 0] }} transition={{duration: 1.5, ease: "easeInOut", repeat: Infinity,}} className='p-4 cursor-pointer relative z-16'>
                        <Image  src="/ArrowDown.svg" width={20} height={24} alt="Arrow down"/>
                    </motion.div>
                </div>
            </div>


        </div>
    )
}

export default Land;