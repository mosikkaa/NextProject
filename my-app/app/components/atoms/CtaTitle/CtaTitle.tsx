const CtaTitle = () => {
  return ( 
    <h1 className="font-[Supreme] font-bold uppercase text-left leading-[100%] text-[40px] sm:text-[56px] lg:text-[80px]">

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
    </h1>
  )
}

export default CtaTitle