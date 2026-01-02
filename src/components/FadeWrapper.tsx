import { type ReactNode } from "react"
import { motion } from "framer-motion"

interface FadeWrapperProps {
  children: ReactNode
  transition?: number
}

export const FadeWrapper = ({ children, transition = 1 }: FadeWrapperProps) => {
  return (
    <motion.div
      transition={{ duration: transition }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  )
}
