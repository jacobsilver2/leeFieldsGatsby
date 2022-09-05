import React from 'react'
import BigFooter from '../components/BigFooter'
import MobileFooter from '../components/MobileFooter'
import { useWindowSize } from '../hooks'

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
