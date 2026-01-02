'use client'

import { ReactNode, useEffect, useState } from "react"
import { createPortal } from "react-dom"

interface PortalProps {
  children: ReactNode
}

export function Portal({ children }: PortalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted) {
    return null
  }

  const portalRoot = document.getElementById("portal")

  if (!portalRoot) {
    return null
  }

  return createPortal(children, portalRoot)
}
