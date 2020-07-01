import React from "react"
import useWindowSize from "../hooks/useWindowSize"
import BigFooter from "../components/BigFooter"
import MobileFooter from "../components/MobileFooter"
import StyledFooter from "../styles/StyledFooter"
const Footer = () => {
  const size = useWindowSize()
  return (
    <>
      {size.width <= 828 && <MobileFooter />}
      {size.width > 828 && <BigFooter />}
    </>
  )
}

export default Footer
