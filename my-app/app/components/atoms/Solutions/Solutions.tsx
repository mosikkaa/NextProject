import { motion } from "motion/react"

const Solutions = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}  className='tracking-wider [text-shadow:-1px_-1px_0_#666666,1px_-1px_0_#666666,-1px_1px_0_#666666,1px_1px_0_#666666,0_-1px_0_#666666,0_1px_0_#666666,-1px_0_0_#666666,1px_0_0_#666666] leading-[100%] font-bold text-[54px] lg:text-[88px]'>
            WE BUILD IMMERSIVE DESIGN
            <span className='text-shadow-none decoration-3 text-[#E5E548] [-webkit-text-stroke:0px]'>
                <div className="flex sm:inline-flex  items-center max-w-[350px] sm:max-w-[350px] lg:max-w-[800px] lg:w-[580px] relative z-10">
                  <div className="w-full shrink-0 bg-[#e5e548] h-[2px] absolute z-10 " />
                  <span className="sm:text-[54px] lg:text-[88px] text-[50px] text-start sm:text-center font-bold leading-none  text-[#E5E548] uppercase whitespace-nowrap w-full">
                    SOLUTIONS
                  </span>
                </div></span> FOR YOUR INNOVATIVE BRANDS
        </motion.div>
    )
}

export default Solutions