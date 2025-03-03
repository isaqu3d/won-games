import { render, screen } from '@testing-library/react'
import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    render(<Heading>Most Popular</Heading>)

    expect(screen.getByRole('heading', { name: /most popular/i })).toHaveClass(
      'text-white'
    )
  })

  it('should render a black heading when is color passed', () => {
    render(<Heading color="black">Most Popular</Heading>)

    expect(screen.getByRole('heading', { name: /most popular/i })).toHaveClass(
      'text-black'
    )
  })

  it('should render a heading with a line to the left side', () => {
    render(<Heading lineLeft>Most Popular</Heading>)

    expect(screen.getByRole('heading', { name: /most popular/i })).toHaveClass(
      'pl-2 border-l-8 border-secondary'
    )
  })

  it('should render a heading with a line at the bottom', () => {
    render(<Heading lineBottom>Most Popular</Heading>)

    expect(screen.getByRole('heading', { name: /most popular/i })).toHaveClass(
      'relative mb-4 after:absolute after:left-0 after:-bottom-4 after:w-20 after:border-4 after:border-primary'
    )
  })
})
