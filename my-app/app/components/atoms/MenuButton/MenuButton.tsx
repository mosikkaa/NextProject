import * as motion from "motion/react-client";

const MenuButton = ({ isOpen, onClick }:any) => {

     return(
         <motion.div className='rotate-0 sm:rotate-90 cursor-pointer flex items-center justify-center w-8 h-8 ' onClick={():void => {onClick()}}>
             <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <motion.path  initial={false} d="M1.27661 23.4305L23.4305 1.27666" stroke="white" animate={!isOpen ? { rotate: 45,x:0,y:3.4} : { rotate: 0,x:0,y:0}}  style={{ transformOrigin: "center" }} transition={{ duration: 0.4, ease: "easeInOut" }}/>
                 {!isOpen ? (<motion.path  initial={false} d="M1.27661 23.4305L23.4305 1.27666" stroke="white" animate={!isOpen ? { rotate: 45,x:0,y:-3.4} : { rotate: 90,x:0,y:0}}  style={{ transformOrigin: "center" }} transition={{ duration: 0.4, ease: "easeInOut" }}/>) : (<><motion.path d="M24.3535 24.3536L15.1227 15.1228" stroke="white" animate={!isOpen ? { rotate: 0,x:0,y:-7.8} : { rotate: 0,x:0,y:0}}  style={{ transformOrigin: "center" }} transition={{ duration: 0.4, ease: "easeInOut" }}/><motion.path d="M9.58423 9.58434L0.35345 0.353557" stroke="white" animate={!isOpen ? { rotate: 0,x:0,y:7.8} : { rotate: 0,x:0,y:0}}  style={{ transformOrigin: "center" }} transition={{ duration: 0.4, ease: "easeInOut" }}/></>)}
             </svg>
         </motion.div>
     );
};

export default MenuButton