import Image from "next/image";

const Menu = () => {
     return(
       <div className='w-full flex items-center h-screen pl-[9%] pr-[9%] sm:pl-28 sm:pr-28 xl:pl-32 xl:pr-21 bg-black'>
           <div className='flex justify-between w-full items-center'>
               <ul className='sm:w-6/13 md:w-5/9 lg:w-3/6'>
                   <li className='text-white pl-[18%] relative opacity-100 font-[Supreme] font-bold sm:text-[34px] md:text-[40px]  lg:text-[50px] 2xl:text-[50px] leading-[160%] tracking-[0px] uppercase align-middle group delay-[100ms] transition-all duration-[10000ms] ease-in-out"'>HOME<div className='absolute group-hover:block transition-all duration-[10000ms] hidden right-0 top-1/2 border-2 border-[#E5E548] w-full h-0'></div></li>
                   <li className='text-white pl-[18%] relative opacity-100 font-[Supreme] font-bold sm:text-[34px] md:text-[40px]  lg:text-[50px] 2xl:text-[50px] leading-[160%] tracking-[0px] uppercase align-middle group delay-[100ms] transition-all duration-[10000ms] ease-in-out"'>WORKS<div className='absolute group-hover:block  hidden right-0  top-1/2 border-2 border-[#E5E548] w-full h-1'></div></li>
                   <li className='text-white pl-[18%] relative opacity-100 font-[Supreme] font-bold sm:text-[34px] md:text-[40px]  lg:text-[50px] 2xl:text-[50px] leading-[160%] tracking-[0px] uppercase align-middle group delay-[100ms] transition-all duration-[10000ms] ease-in-out"'>COMPANY<div className='absolute group-hover:block  right-0 hidden  top-1/2 border-2 border-[#E5E548] w-full h-1'></div></li>
                   <li className='text-white pl-[18%] relative opacity-100 font-[Supreme] font-bold sm:text-[34px] md:text-[40px]  lg:text-[50px] 2xl:text-[50px] leading-[160%] tracking-[0px] uppercase align-middle group delay-[100ms] transition-all duration-[10000ms] ease-in-out"'>THOUGHTS<div className='absolute group-hover:block  right-0 hidden  top-1/2 border-2 border-[#E5E548] w-full h-1'></div></li>
                   <li className='text-white pl-[18%] relative opacity-100 font-[Supreme] font-bold sm:text-[34px] md:text-[40px]  lg:text-[50px] 2xl:text-[50px] leading-[160%] tracking-[0px] uppercase align-middle group delay-[100ms] transition-all duration-[10000ms] ease-in-out"'>CONTACT<div className='absolute group-hover:block  right-0 hidden top-1/2 border-2 border-[#E5E548] w-full h-1'></div></li>
               </ul>
               <div className='xl:w-[275px] lg:w-[240px] h-100 gap-12 md:w-[220px] flex flex-col justify-between'>
                   <div className='flex flex-col gap-8'>
                       <h3 className='text-white font-[Supreme] font-bold sm:text-[18px] text-[16px] leading-[120%] tracking-[2px]'>SOC</h3>
                       <ul>
                           <li className='text-white font-[Supreme] font-normal sm:text-[14px] text-[12px] leading-[240%] tracking-[1px]'>Instagram</li>
                           <li className='text-white font-[Supreme] font-normal sm:text-[14px] text-[12px] leading-[240%] tracking-[1px]'>Twitter</li>
                           <li className='text-white font-[Supreme] font-normal sm:text-[14px] text-[12px] leading-[240%] tracking-[1px]'>LinkedIn</li>
                           <li className='text-white font-[Supreme] font-normal sm:text-[14px] text-[12px] leading-[240%] tracking-[1px]'>Facebook</li>
                       </ul>
                   </div>
                   <div className='flex flex-col gap-8'>
                       <h3 className='text-white font-[Supreme] font-bold sm:text-[18px] text-[16px] leading-[120%] tracking-[2px]'>NEURO IDEAS HQ</h3>
                       <p className='text-white font-[Supreme] font-normal text-[14px] leading-[240%] tracking-[1px]'>Nirmana Rd. 32 Building 123 <br/> Kampoeng Ideas <br/> Canggu, Bali</p>
                   </div>
               </div>
           </div>
           <div className='absolute bottom-12 flex gap-8'>
              <p className='font-[Supreme] text-[#666666] font-medium text-[12px] leading-[100%] tracking-[0.04em] uppercase align-middle'>NEURO®, inc</p>
               <p className='font-[Supreme] text-[#666666] font-medium text-[12px] leading-[100%] tracking-[0.04em] uppercase align-middle'>2022</p>
           </div>
           <img className='sm:block hidden absolute bottom-0 right-0 z-0' src="/WORKS.svg" alt="Works"/>
       </div>
     );
};

export default Menu