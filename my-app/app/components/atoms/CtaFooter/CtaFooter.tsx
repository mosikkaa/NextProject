import FooterColumn from "../FooterColumn/FooterColumn"

const CtaFooter = () => {
  return (
    <footer className="grid grid-cols-5 gap-10 mt-30">
      <div className="font-bold">NEURO.</div>

      <FooterColumn
        title="NEURO IDEAS HQ"
        items={[
          "Nirmana Rd. 32 Building 123",
          "Kampong Ideas",
          "Canggu, Bali",
        ]}
      />

      <FooterColumn
        title="BUSINESS"
        items={["talk@neuroideas.com", "+62 666 888 32"]}
      />

      <FooterColumn
        items={["HOME", "WORKS", "COMPANY", "THOUGHTS", "CONTACT"]}
      />

      <FooterColumn
        items={["Instagram", "Twitter", "LinkedIn", "Facebook"]}
      />

      <div className="col-span-5 mt-10 text-[12px] flex gap-10">
        <span>NEURO®, inc</span>
        <span>2022</span>
        <span>DESIGN BY NEUWEBZ</span>
      </div>
    </footer>
  )
}

export default CtaFooter
