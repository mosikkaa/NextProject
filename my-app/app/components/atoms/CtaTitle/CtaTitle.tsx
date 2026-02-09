import { motion } from "motion/react"

const CtaTitle = () => {
  return ( 
    <motion.h1 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}  className="font-[Supreme] font-bold uppercase text-left leading-[100%] text-[40px] sm:text-[56px] lg:text-[80px]">

      <span className="block text-transparent [-webkit-text-stroke:2px_black] font-normal">
        <span className="block sm:inline">WE ALWAYS</span>
        <span className="block sm:inline sm:ml-2">SEEK FOR</span>
      </span>

      <span className="block text-transparent [-webkit-text-stroke:2px_black] font-normal"> NEW </span>

      <span className="block text-transparent [-webkit-text-stroke:2px_black] font-normal"> ADVENTURES </span>

      <div className="flex flex-wrap items-center gap-4">
        <span className="block text-transparent [-webkit-text-stroke:2px_black] font-normal"> LET’S DO </span>

        <span className="relative inline-block text-black font-bold"> BUSINESS
          <span className="absolute left-1/2 top-1/2 w-[180px] sm:w-[260px] lg:w-[400px] h-[2px] bg-black -translate-x-1/2 -translate-y-1/2" />
        </span>
      </div>
    </motion.h1>
  )
}

export default CtaTitle