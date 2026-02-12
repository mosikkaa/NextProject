import { motion } from "motion/react"

interface ButtonProps {
    buttonText: string,
    onClick?: () => void
}

const Button = ({ buttonText, onClick }: ButtonProps) => {
    return (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} >
            <button onClick={onClick} className='border border-white rounded-[80px] p-[16px_20px] text-[#FFFFFF] cursor-pointer hover:bg-white hover:text-black font-bold duration-300 ease-in-out tracking-widest'>{buttonText}</button>
        </motion.div>
    )
}

export default Button