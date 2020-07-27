import React from "react"
import { motion } from "framer-motion"

// In a component that wraps your page contents
const FadeWrapper = ({ children, transition = 1 }) => {
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

export default FadeWrapper
