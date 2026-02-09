import { motion } from "motion/react"

const Solutions = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}  className='tracking-wider [text-shadow:-1px_-1px_0_#666666,1px_-1px_0_#666666,-1px_1px_0_#666666,1px_1px_0_#666666,0_-1px_0_#666666,0_1px_0_#666666,-1px_0_0_#666666,1px_0_0_#666666] leading-[100%] font-bold text-[56px] lg:text-[88px]'>WE BUILD IMMERSIVE DESIGN <span className='text-shadow-none line-through decoration-[#E5E548] decoration-3 text-[#E5E548] [-webkit-text-stroke:0px]'><span className='text-black'>s</span>SOLUTIONS<span className='text-black'>s</span></span> FOR YOUR INNOVATIVE BRANDS</motion.div>
    )
}

export default Solutions