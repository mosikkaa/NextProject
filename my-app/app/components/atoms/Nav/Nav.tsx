'use client'
import Image from "next/image";
import * as motion from "motion/react-client"
import {useState} from "react";
import {dayData} from "@/app/utils/dayData/dayData";


const Nav = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const weekday:string = dayData()
    
     return(
       <div className='w-full flex items-center justify-between px-[9%] sm:px-20 md:px-17 lg:px-28 xl:px-32 2xl:px-36 py-12 h-12 fixed bg-transparent z-99 '>
           <h1 className='font-[Supreme] font-extrabold text-[24px] leading-[100%] tracking-[-0.4px] align-middle text-[#FFFFFF] cursor-pointer'>NEURO.</h1>
           <div className='flex gap-8 items-center'>
               <p className='hidden sm:block font-[Supreme] font-medium text-[14px] leading-[100%] tracking-[0.04em] uppercase align-middle text-[#FFFFFF]'>4°12'S 332°48'E</p>
               <p className='hidden sm:block font-[Supreme] font-medium text-[14px] leading-[100%] tracking-[0.04em] uppercase align-middle opacity-40 text-[#FFFFFF]'>{weekday}</p>
               <Image src="/Toogle.svg" width={40} height={24} alt="Toggle Button"/>
               <motion.div className="sm:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)} animate={{ rotate: isOpen ? 90 : 0 }}>
                   <Image src="/Menu.svg" width={32} height={32} alt="Menu" />
               </motion.div>
           </div>
       </div>
     );
};

export default Nav