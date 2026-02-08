import FooterColumn from "../FooterColumn/FooterColumn"

const CtaFooter = () => {
  return (
    <footer className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

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
        <FooterColumn items={["HOME", "WORKS", "COMPANY", "THOUGHTS", "CONTACT"]}/>
        <FooterColumn items={["Instagram", "Twitter", "LinkedIn", "Facebook"]}/>
      </div>

      <div className="order-6 sm:col-span-2 lg:col-span-5 mt-10 text-[12px] flex flex-wrap gap-6">
        <span>NEURO®, inc</span>
        <span>2022</span>
        <span>DESIGN BY NEUWEBZ</span>
      </div>

    </footer>
  )
}
export default CtaFooter