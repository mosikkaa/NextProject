interface FooterColumnProps {
  title?: string
  items: string[]
}

const FooterColumn = ({ title, items }: FooterColumnProps) => {
  return (
    <div className="text-black text-[14px]">
      {title && <p className="font-bold mb-3">{title}</p>}
      {items.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  )
}

export default FooterColumn