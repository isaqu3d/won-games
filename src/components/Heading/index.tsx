import { ReactNode } from 'react'

export type HeadingProps = {
  children: ReactNode
}

const Heading = ({ children }: HeadingProps) => (
  <h2 className="font-sans font-semibold sm:text-3xl text-2xl">{children}</h2>
)
export default Heading
