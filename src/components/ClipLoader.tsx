'use client'

import React from 'react'

interface ClipLoaderProps {
  color?: string
  size?: string | number
}

export const ClipLoader = ({ color = '#000', size = 35 }: ClipLoaderProps) => {
  const sizeValue = typeof size === 'string' ? size : `${size}px`

  return (
    <div
      style={{
        width: sizeValue,
        height: sizeValue,
        border: `2px solid ${color}`,
        borderBottomColor: 'transparent',
        borderRadius: '50%',
        display: 'inline-block',
        boxSizing: 'border-box',
        animation: 'clipLoader 0.75s linear infinite',
      }}
    >
      <style>{`
        @keyframes clipLoader {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
