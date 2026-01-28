import Textarea from "@/app/components/atoms/Textarea/Textarea";
import Image from 'next/image'

const Land =() => {
    return (
        <div className='w-full h-screen flex items-center justify-center relative bg-[#C4C4C4]'>

            <Textarea/>
            <Image className='absolute' src="/Discover.svg" width={108} height={108} alt="Picture of the author"/>
            <Image className='absolute bottom-2' src="/ArrowDown.svg" width={108} height={108} alt="Picture of the author"/>


        </div>
    )
}

export default Land;