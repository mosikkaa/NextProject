import Image from 'next/image'
import closeBtn from '../../../../public/Close.svg'
import { motion } from 'motion/react'
import { useState } from 'react'
import defaultImg from "../../../../public/architecture.jpg"

interface AddWorkProps {
    onClose: () => void,
    onAddProject: (project: any) => void,
    nextNum: number
}

const AddWork = ({ onClose, onAddProject, nextNum }: AddWorkProps) => {
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
        e.preventDefault()

        const newProject = {
            img: defaultImg,
            num: String(nextNum).padStart(2, "0"),
            title: form.title,
            description: form.description,
            type: form.type,
            section: form.section,
        }
        onAddProject(newProject)
        onClose()

        setForm({
            title: "",
            description: "",
            type: "",
            section: "",
        })
    }
    return (
        <motion.div
            className="w-full fixed inset-0 z-99 bg-black/70 flex items-center justify-center"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="w-150 h-150 border-2 border-gray-300 rounded-[40px] bg-black relative" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className='p-6 cursor-pointer absolute right-0'>
                    <Image src={closeBtn} alt="close" width={30} height={30} />
                </button>
                <div className='w-150 h-150 flex flex-col items-center justify-center gap-10'>
                    <h1 className='text-white text-[30px]'>Add New Project</h1>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-75'>
                        <input type="text" name="title" placeholder='Title' value={form.title} onChange={handleChange} className='border border-gray-400 text-white p-3 rounded-[20px] outline-none' />
                        <input type="text" name="description" placeholder='Description' value={form.description} onChange={handleChange} className='border border-gray-400 text-white p-3 rounded-[20px] outline-none' />
                        <input type="text" name="type" placeholder='Type' value={form.type} onChange={handleChange} className='border border-gray-400 text-white p-3 rounded-[20px] outline-none' />
                        <input type="text" name="section" placeholder='Section' value={form.section} onChange={handleChange} className='border border-gray-400 text-white p-3 rounded-[20px] outline-none' />
                        <button type="submit" className="cursor-pointer hover:bg-yellow-200 transition-all duration-300 mt-4 bg-[#E5E548] text-black py-3 rounded-[20px] font-bold">ADD PROJECT</button>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default AddWork