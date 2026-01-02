'use client'

import React, { ReactNode, useState, useEffect, useRef, CSSProperties } from 'react'

interface HeadroomProps {
  children: ReactNode
  style?: CSSProperties
  onUnpin?: () => void
  onPin?: () => void
}

export const Headroom = ({ children, style, onUnpin, onPin }: HeadroomProps) => {
  const [isPinned, setIsPinned] = useState(true)
  const [height, setHeight] = useState(0)
  const lastScrollY = useRef(0)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headerRef.current) {
      setHeight(headerRef.current.offsetHeight)
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        if (!isPinned) {
          setIsPinned(true)
          onPin?.()
        }
      } else if (currentScrollY > lastScrollY.current && currentScrollY > height) {
        if (isPinned) {
          setIsPinned(false)
          onUnpin?.()
        }
      } else if (currentScrollY < lastScrollY.current) {
        if (!isPinned) {
          setIsPinned(true)
          onPin?.()
        }
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isPinned, height, onUnpin, onPin])

  return (
    <div
      ref={headerRef}
      style={{
        position: 'relative',
        width: '100%',
        transform: isPinned ? 'translateY(0)' : `translateY(-100%)`,
        transition: 'transform 0.2s ease-in-out',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
