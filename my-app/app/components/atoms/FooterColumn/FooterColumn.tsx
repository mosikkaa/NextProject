import { motion } from "motion/react"

interface FooterColumnProps {
  title?: string
  items: string[]
}

const FooterColumn = ({ title, items}: FooterColumnProps) => {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}  className="text-black text-[14px]">
      {title && <p className="font-bold mb-3">{title}</p>}
      {items.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </motion.div>
  )
}

export default FooterColumn