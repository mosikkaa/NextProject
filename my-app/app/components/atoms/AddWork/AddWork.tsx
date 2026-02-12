import Image from 'next/image'
import closeBtn from '../../../../public/Close.svg'
import { motion } from 'motion/react'
import { useState } from 'react'

interface AddWorkProps {
    onClose: () => void,
    onAddProject: (project: any) => void,
    nextNum: number
}

const AddWork = ({ onClose, onAddProject, nextNum }: AddWorkProps) => {
    const [image, setImage] = useState<string | null>(null);

    const [form, setForm] = useState({
        title: "",
        description: "",
        type: "",
        section: "",
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value, }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const newProject = {
            img: image,
            num: String(nextNum).padStart(2, "0"),
            title: form.title,
            description: form.description,
            type: form.type,
            section: form.section,
        };

        onAddProject(newProject);
        onClose();

        setForm({
            title: "",
            description: "",
            type: "",
            section: "",
        });
        setImage(null);
    };

    const handleImageChange = (e: any) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    return (
        <motion.div
            className="w-full fixed inset-0 z-99 bg-black/70 backdrop-blur-sm flex items-center justify-center"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="py-15 lg:rounded-[40px] bg-[#1a1a1a] relative" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className='p-6 cursor-pointer absolute right-2 top-0'>
                    <Image src={closeBtn} alt="close" width={30} height={30} />
                </button>
                <div className='w-full md:w-150 h-full flex flex-col items-center justify-center lg:gap-10 gap-5'>
                    <h1 className='text-white lg:text-[24px] font-bold'>ADD NEW PROJECT</h1>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-3/4 md:w-75'>
                        <input type="text" name="title" placeholder='TITLE' value={form.title} onChange={handleChange} className='border-b border-gray-400 text-white lg:p-3 p-1 outline-none' />
                        <input type="text" name="description" placeholder='DESCRIPTION' value={form.description} onChange={handleChange} className='border-b border-gray-400 text-white lg:p-3 p-1  outline-none' />
                        <input type="text" name="type" placeholder='TYPE' value={form.type} onChange={handleChange} className='border-b border-gray-400 text-white lg:p-3 p-1  outline-none' />
                        <input type="text" name="section" placeholder='SECTION' value={form.section} onChange={handleChange} className='border-b border-gray-400 text-white lg:p-3 p-1 outline-none' />
                        <input type="file" accept="image/*" onChange={handleImageChange} className="text-white cursor-pointer bg-[#313131] lg:p-3 p-1" />
                        <button type="submit" className="cursor-pointer hover:bg-yellow-200 transition-all duration-300 mt-4 bg-[#E5E548] text-black lg:py-3 py-1.5 rounded-[10px] font-bold">ADD PROJECT</button>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default AddWork