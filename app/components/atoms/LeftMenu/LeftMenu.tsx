'use client'
import Image from "next/image";
import {useState} from "react";
import * as motion from "motion/react-client";


const LeftMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

     return(
       <div className='h-screen sm:flex flex-col justify-between bg-black/20 py-6 px-2 items-center hidden w-[80px] z-99 fixed left-0'>
           <div>
               <Image className='' src="/LogoN1.svg" width={40} height={40} alt="Logo"/>
           </div>

           <motion.div className="sm:block hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)} animate={{ rotate: isOpen ? 90 : 0 }}>
               <Image className='rotate-90' src="/Menu.svg" width={32} height={32} alt="Menu" />
           </motion.div>

           <div>
               <Image className='' src="/Pagination.svg" width={80} height={80} alt="Logo"/>
           </div>
       </div>
     );
};

export default LeftMenu