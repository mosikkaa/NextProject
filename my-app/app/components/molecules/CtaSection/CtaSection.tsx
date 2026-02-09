'use client'

import CtaTitle from "../../atoms/CtaTitle/CtaTitle"
import CtaButton from "../../atoms/CtaButton/CtaButton"
import CtaFooter from "../../atoms/CtaFooter/CtaFooter"

const CtaSection = () => {
  return (
    <section className="bg-[#E5E548] px-[9%] sm:pl-28 sm:pr-20 lg:pr-20 xl:pl-32 xl:pr-21  py-16 font-[Supreme] w-full">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">
        <CtaTitle />
        <CtaButton text="CONTACT US" />
      </div>
      <CtaFooter />
    </section>
  )
}

export default CtaSection
