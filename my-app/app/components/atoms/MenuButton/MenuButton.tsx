import * as motion from "motion/react-client";
import {useState} from "react";

const MenuButton = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isRotate,setRotate] = useState<boolean>(false);
    const [isRotateSecond,setRotateSecond] = useState<boolean>(false);

     return(
         <motion.div className='rotate-0 sm:rotate-90 cursor-pointer flex items-center justify-center w-8 h-8 ' onClick={() => {
             setTimeout(() => {setIsOpen(!isOpen);}, 350);setRotate(!isRotate);setRotateSecond(!isRotateSecond)}}>
             {!isOpen ? ( <svg width="32" height="32" viewBox="0 0 32 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <motion.path d="M0 0.5L32 0.5" stroke="white" animate={isRotate ? { rotate: -45,x: 12,y: 0} : { rotate: 0 }}  style={{ transformOrigin: "center" }} transition={{ duration: 0.4, ease: "easeInOut" }} />
                     <motion.path d="M0 8.5L32 8.5" stroke="white" animate={isRotate ? { rotate: 45,x:12,y:0} : { rotate: 0 }}  style={{ transformOrigin: "center" }} transition={{ duration: 0.4, ease: "easeInOut" }}/>
                 </svg>) :
                 (<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <motion.path d="M1.27661 23.4305L23.4305 1.27666" stroke="white" animate={!isRotateSecond ? { rotate: 45,x:0,y:7.8} : { rotate: 0,x:0,y:0}}  style={{ transformOrigin: "center" }} transition={{ duration: 0.4, ease: "easeInOut" }}/>
                     <motion.path d="M24.3535 24.3536L15.1227 15.1228" stroke="white" animate={!isRotateSecond ? { rotate: -45,x:0,y:-7.8} : { rotate: 0,x:0,y:0}}  style={{ transformOrigin: "center" }} transition={{ duration: 0.4, ease: "easeInOut" }}/>
                     <motion.path d="M9.58423 9.58434L0.35345 0.353557" stroke="white" animate={!isRotateSecond ? { rotate: -45,x:0,y:7.8} : { rotate: 0,x:0,y:0}}  style={{ transformOrigin: "center" }} transition={{ duration: 0.4, ease: "easeInOut" }}/>
                 </svg>)}
         </motion.div>
     );
};

export default MenuButton