import react from 'react'

const Textarea = () => {
    return (
        <div className='justify-center gap-8 flex flex-col '>
            <div>
               <h1 className='font-[Supreme] font-bold 2xl:text-[96px] xl:text-[76px] lg:text-[66px] md:text-[56px] sm:text-[46px] text-[36px] leading-[100%] tracking-[-2px] align-middle uppercase'>CREATIVE TEAM</h1>
               <h1 className="font-[Supreme] font-bold 2xl:text-[96px] xl:text-[76px] lg:text-[66px] md:text-[56px]  sm:text-[46px] text-[36px] leading-[100%] tracking-[-2px] align-middle uppercase text-[#E5E548]">
                  <span className="line-through decoration-[#E5E548] decoration-[1.6px] text-transparent select-none">aas</span>
                  <span className="line-through text-end decoration-[#E5E548] decoration-[1.6px]">FOR FUTURE'S</span>
                  <span className="line-through decoration-[#E5E548] decoration-[1.6px] text-transparent select-none">.</span>
               </h1>
               <h1 className='font-[Supreme] font-bold 2xl:text-[96px] xl:text-[76px] lg:text-[66px] md:text-[56px] sm:text-[46px] text-[36px] leading-[100%] tracking-[-2px] align-middle uppercase'><span className='text-black select-none invisible'>aas</span>BRANDS.</h1>
            </div>
            <p className='w-64 font-[Supreme] font-light text-[18px] leading-[160%] ml-38'>We are outstanding individuals <br/> who loves to combine art + design</p>
        </div>
    )
}

export default Textarea