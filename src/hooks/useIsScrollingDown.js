import { useRef, useEffect, useState } from 'react'

export const useIsScrollingDown = () => {
  const prevScrollY = useRef()
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrollingDown((isScrollingDown) => {
        const scrolledDown = window.scrollY > prevScrollY.current
        if (scrolledDown && !isScrollingDown) {
          return true
        } else if (!scrolledDown && isScrollingDown) {
          return false
        } else {
          prevScrollY.current = window.scrollY
          return isScrollingDown
        }
      })
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return isScrollingDown
}
