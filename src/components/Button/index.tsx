import React from 'react'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
}

const sizeClasses = {
  small: 'h-8 text-sm px-4',
  medium: 'h-10 text-base px-6',
  large: 'h-12 text-large px-8'
}

const Button = ({ children, size = 'medium' }: ButtonProps) => {
  return (
    <button
      className={`
        bg-gradient-to-b from-red-500 to-pink-500
        text-white border-none rounded-md
        ${sizeClasses[size]}
      `}
    >
      {children && <span>{children}</span>}
    </button>
  )
}

export default Button
