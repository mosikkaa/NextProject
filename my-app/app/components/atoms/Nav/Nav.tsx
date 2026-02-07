'use client'
import Image from "next/image";
import * as motion from "motion/react-client"
import {dayData} from "@/app/utils/dayData/dayData";
import MenuButton from "@/app/components/atoms/MenuButton/MenuButton";
import useHide from "@/app/hooks/useHide";

const Nav = ({isOpen,setIsOpen}:any) => {

    const show:boolean = useHide()
    const weekday:string = dayData()
    
     return(
       <motion.nav animate={{y: show ? 0 : '-100%', opacity: show ? 1 : 0.96}} transition={{type: 'spring', stiffness: 200, damping: 25,}} className='w-full flex items-center justify-between  pl-[9%] pr-[9%] sm:pl-28 sm:pr-20 lg:pr-20 xl:pl-32 xl:pr-21  py-12 h-12 fixed bg-transparent' style={{zIndex:9999}}>
           <h1 className='font-[Supreme] font-extrabold text-[24px] leading-[100%] tracking-[-0.4px] align-middle text-[#FFFFFF] cursor-pointer'>NEURO.</h1>
           <div className='flex gap-8 items-center'>
               <p className='hidden sm:block font-[Supreme] font-medium text-[14px] leading-[100%] tracking-[0.04em] uppercase align-middle text-[#FFFFFF]'>4°12'S 332°48'E</p>
               <p className='hidden sm:block font-[Supreme] font-medium text-[14px] leading-[100%] tracking-[0.04em] uppercase align-middle opacity-40 text-[#FFFFFF]'>{weekday}</p>
               <Image src="/Toogle.svg" width={40} height={24} alt="Toggle Button"/>
               <motion.div className="sm:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)} animate={{ rotate: isOpen ? 90 : 0 }}>
                   <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
               </motion.div>
           </div>
       </motion.nav>
     );
};

export default Nav