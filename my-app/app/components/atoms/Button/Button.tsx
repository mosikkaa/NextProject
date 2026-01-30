interface ButtonProps {
    buttonText: string
}

const Button = ({ buttonText }: ButtonProps) => {
    return (
        <div className='w-277.5'>
            <button className='border border-white rounded-[80px] p-[16px_20px] text-[#FFFFFF] cursor-pointer hover:bg-gray-900 duration-300 ease-in-out tracking-widest'>{buttonText}</button>
        </div>
    )
}

export default Button