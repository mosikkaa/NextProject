'use client'

interface CtaButtonProps {
  text: string
}

const CtaButton = ({ text }: CtaButtonProps) => {
  return (
    <button
      className="
        w-[108px] h-[108px] 
        rounded-full 
        bg-white 
        text-black 
        font-[Supreme] 
        font-bold 
        text-[12px] 
        uppercase 
        flex items-center justify-center 
        mt-20

        hover:bg-[#E5E548]       
        hover:text-black         
        hover:scale-105          
        hover:shadow-lg          
        transition-all           
        duration-300 
        ease-in-out
      "
    >
      {text}
    </button>
  )
}

export default CtaButton