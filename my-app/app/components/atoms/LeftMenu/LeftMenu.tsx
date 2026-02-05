'use client'
import Image from "next/image";
import {useState} from "react";
import * as motion from "motion/react-client";
import MenuButton from "@/app/components/atoms/MenuButton/MenuButton";


const LeftMenu = () => {


     return(
       <div className='h-screen sm:flex flex-col justify-between bg-black/20 pt-6 pb-11 px-2 items-center hidden w-[80px] z-99 fixed left-0'>
           <div>
               <Image className='' src="/LogoN1.svg" width={40} height={40} alt="Logo"/>
           </div>

           <MenuButton/>

           <div>
               <Image className='' src="/Pagination.svg" width={80} height={80} alt="Logo"/>
           </div>
       </div>
     );
};

export default LeftMenu