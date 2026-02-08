'use client'

import CtaTitle from "../../atoms/CtaTitle/CtaTitle"
import CtaButton from "../../atoms/CtaButton/CtaButton"
import CtaFooter from "../../atoms/CtaFooter/CtaFooter"

const CtaSection = () => {
  return (
    <section className="bg-[#E5E548] px-20 py-20 font-[Supreme] w-full">
      <div className="flex justify-between items-start">
        <CtaTitle />
        <CtaButton text="CONTACT US" />
      </div>

      <CtaFooter />
    </section>
  )
}

export default CtaSection
