interface ButtonProps {
    buttonText: string,
    onClick?: () => void
}

const Button = ({ buttonText, onClick }: ButtonProps) => {
    return (
        <div className='w-103.5 lg:w-277.5'>
            <button onClick={onClick} className='border border-white rounded-[80px] p-[16px_20px] text-[#FFFFFF] cursor-pointer hover:bg-gray-900 duration-300 ease-in-out tracking-widest'>{buttonText}</button>
        </div>
    )
}

export default Button