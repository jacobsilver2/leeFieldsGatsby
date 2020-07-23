import React from "react"
import { motion } from "framer-motion"

// In a component that wraps your page contents
const FadeWrapper = ({ children }) => {
  return (
    <motion.div
      transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  )
}

export default FadeWrapper
