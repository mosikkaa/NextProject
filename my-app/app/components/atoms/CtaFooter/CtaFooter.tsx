import { motion } from "motion/react"
import FooterColumn from "../FooterColumn/FooterColumn"
import {CtaProps} from "@/app/types/types";

const CtaFooter = ({scrollToSection,refs}:CtaProps) => {
  return (
    <motion.footer initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}  className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

      <div className="order-1 font-[Supreme] font-extrabold text-[24px] leading-[100%] tracking-[-0.4px]"> NEURO.</div>

      <div className="order-5 sm:order-2">
        <FooterColumn
          title="NEURO IDEAS HQ"
          items={[
            "Nirmana Rd. 32 Building 123",
            "Kampong Ideas",
            "Canggu, Bali",
          ]}/>
      </div>

      <div className="order-4 sm:order-3">
        <FooterColumn
          title="BUSINESS"
          items={["talk@neuroideas.com", "+62 666 888 32"]}/>
      </div>

      <div className="order-2 sm:order-4 lg:order-4 flex flex-wrap lg:flex-nowrap gap-[68px]">
          <motion.ul initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}  className="text-black text-[14px] flex flex-col font-supreme font-medium leading-[240%] tracking-[0.04em] uppercase">
              <li className='cursor-pointer hover:scale-110 ease-in-out transition duration-200' onClick={() => scrollToSection(refs.homeRef)}>HOME</li>
              <li className='cursor-pointer hover:scale-110 ease-in-out transition duration-200' onClick={() => scrollToSection(refs.latestProjectsRef)}>WORKS</li>
              <li className='cursor-pointer hover:scale-110 ease-in-out transition duration-200' onClick={() => scrollToSection(refs.studioRef)}>COMPANY</li>
              <li className='cursor-pointer hover:scale-110 ease-in-out transition duration-200' onClick={() => scrollToSection(refs.latestRef)}>THOUGHTS</li>
              <li className='cursor-pointer hover:scale-110 ease-in-out transition duration-200' onClick={() => scrollToSection(refs.ctaRef)}>CONTACT</li>
          </motion.ul>
          <motion.ul initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}  className="text-black text-[14px] flex flex-col font-supreme font-normal text-[14px] leading-[240%] tracking-[1px]">
              <li className='cursor-pointer hover:scale-110 ease-in-out transition duration-200'>Instagram</li>
              <li className='cursor-pointer hover:scale-110 ease-in-out transition duration-200'>Twitter</li>
              <li className='cursor-pointer hover:scale-110 ease-in-out transition duration-200'>LinkedIn</li>
              <li className='cursor-pointer hover:scale-110 ease-in-out transition duration-200'>Facebook</li>
          </motion.ul>
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}  className="order-6 sm:col-span-2 lg:col-span-5 mt-10 text-[12px] flex flex-wrap gap-6">
        <span>NEURO®, inc</span>
        <span>2022</span>
        <span>DESIGN BY NEUWEBZ</span>
      </motion.div>

    </motion.footer>
  )
}
export default CtaFooter