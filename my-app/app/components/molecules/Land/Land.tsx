import Textarea from "@/app/components/atoms/Textarea/Textarea";
import Image from 'next/image'
import Video from "@/app/components/atoms/Video/Video";

const Land =() => {
    return (
        <div className='w-full h-screen bg-[url(https://neuro-finalproject.vercel.app/igniting-innovation-harnessing-power-coding-600nw-2425426569-modified.webp)]'>
           <div className='w-full relative  h-[50%] sm:h-screen px-[9%] flex-shrink-0 items-center flex sm:relative bg-[#C4C4C4]'>

                <Textarea/>
                <div className="absolute hidden sm:flex sm:left-1/2 sm:bottom-[3%] -translate-x-1/2  p-8 cursor-pointer ">
                    <Image src="/ArrowDown.svg" width={20} height={24} alt="Arrow down"/>
                </div>
               <Video/>

           </div>

            <div className='h-[50%] sm:hidden flex items-end py-[6%] px-[10%] w-full bg-black'>
                <div className='flex justify-between items-center w-full h-[60px]'>
                    <Image className='' src="/Discover.svg" width={60} height={60} alt="Discover"/>
                    <Image src="/ArrowDown.svg" width={20} height={24} alt="Arrow down"/>
                </div>

            </div>


        </div>
    )
}

export default Land;