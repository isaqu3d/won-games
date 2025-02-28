import clsx from 'clsx'
import React from 'react'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => {
  return (
    <h2
      className={clsx(
        'text-2xl md:text-3xl font-semibold font-sans',
        color === 'white' ? 'text-white' : 'text-black',
        lineLeft && 'pl-2 border-l-8 border-secondary',
        lineBottom &&
          'relative mb-4 after:absolute after:left-0 after:-bottom-4 after:w-20 after:border-4 after:border-primary'
      )}
    >
      {children}
    </h2>
  )
}

export default Heading
