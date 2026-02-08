interface ButtonProps {
    buttonText: string,
    onClick?: () => void
}

const Button = ({ buttonText, onClick }: ButtonProps) => {
    return (
        <div>
            <button onClick={onClick} className='border border-white rounded-[80px] p-[16px_20px] text-[#FFFFFF] cursor-pointer hover:bg-gray-900 duration-300 ease-in-out tracking-widest'>{buttonText}</button>
        </div>
    )
}

export default Button