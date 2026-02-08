'use client'
import {useState} from "react";


const Video = () => {

    const [play, setPlay] = useState<boolean>(false);

     return(
       <div className='w-full'>

           <div className='flex-col sm:w-[45%] lg:w-[50%] items-center relative w-full sm:bottom-22 sm:left-55 lg:left-50 justify-center sm:absolute z-12'>
               <p className='font-[Supreme] text-[#FFFFFF] absolute bottom-5 right-6 sm:right-0 z-20 sm:relative sm:bottom-0 font-normal text-[14px] leading-[160%] tracking-[1px] text-end'>0:32</p>
               <div className="relative w-full sm:h-[140px] h-[320px] lg:h-[160px] aspect-video overflow-hidden bg-[url('/Preview.jpg')]">
                   {play ? (<video autoPlay src="/Video.mp4" poster="/Preview.jpg" className="w-full h-full object-cover"></video>) : (<button onClick={() => setPlay(true)} className="absolute cursor-pointer bottom-24 left-6 sm:bottom-6 z-10"><img src="/Play.svg" alt="Play" className="h-28 w-28 sm:w-12 sm:h-12 hover:scale-110 transition"/> </button>)}
               </div>
               <p className='font-[Supreme] absolute bottom-5 left-6 sm:bottom-0 sm:left-0 sm:relative z-0 text-[#FFFFFF] font-normal text-[14px] leading-[160%] tracking-[1px] align-middle'>PLAY REELS</p>
           </div>

           <img className='sm:block hidden relative  opacity-50 z-0' src="/LIPBALS.svg" alt="Lipbals"/>
       </div>
     );
};

export default Video