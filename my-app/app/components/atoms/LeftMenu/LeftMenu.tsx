'use client'
import Image from "next/image";
import * as motion from "motion/react-client";
import MenuButton from "@/app/components/atoms/MenuButton/MenuButton";
import useHide from "@/app/hooks/useHide";
import {MenuOptionsProps} from "@/app/types/types";

const LeftMenu = ({isOpen,setIsOpen}:MenuOptionsProps) => {

    const show:boolean = useHide()

    return (
        <motion.div  animate={{x: show ? 0 : '-100%', opacity: show ? 1 : 0.96,}} transition={{type: 'spring', stiffness: 200, damping: 25,}} className={`h-screen sm:flex flex-col justify-between  ${isOpen ? 'bg-transparent' : 'bg-black/20'}  pt-6 pb-11 px-2 items-center hidden w-[80px] z-99 fixed left-0`} style={{zIndex:9999}}>
            <div>
                <Image className='' src="/LogoN1.svg" width={40} height={40} alt="Logo"/>
            </div>

            <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/>

            <div>
                <Image className='' src='/Pagination.svg' width={80} height={80} alt="Logo"/>
            </div>
        </motion.div>
    );
};

export default LeftMenu