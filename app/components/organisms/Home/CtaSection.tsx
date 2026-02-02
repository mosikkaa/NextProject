'use client'

import CtaTitle from "@/app/components/molecules/CtaTitle/CtaTitle"
import CtaButton from "@/app/components/atoms/CtaButton/CtaButton"
import CtaFooter from "@/app/components/molecules/CtaFooter/CtaFooter"

const CtaSection = () => {
  return (
    <section className="bg-[#E5E548] px-20 py-20 font-[Supreme]">
      <div className="flex justify-between items-start">
        <CtaTitle />
        <CtaButton text="CONTACT US" />
      </div>

      <CtaFooter />
    </section>
  )
}

export default CtaSection